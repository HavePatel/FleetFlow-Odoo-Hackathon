from datetime import datetime, date
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.trip import Trip
from app.utils.enums import VehicleStatus, DriverStatus, TripStatus
from app.repositories.vehicle_repo import VehicleRepository
from app.repositories.driver_repo import DriverRepository


vehicle_repo = VehicleRepository()
driver_repo = DriverRepository()


class DispatchService:

    # -------------------------------
    # DISPATCH TRIP
    # -------------------------------
    def dispatch_trip(self, db: Session, vehicle_id: int, driver_id: int, cargo_weight: int):

        try:
            vehicle = vehicle_repo.get_by_id(db, vehicle_id)
            driver = driver_repo.get_by_id(db, driver_id)

            # -------- VALIDATIONS --------

            if not vehicle:
                raise HTTPException(status_code=404, detail="Vehicle not found")

            if not driver:
                raise HTTPException(status_code=404, detail="Driver not found")

            if vehicle.status != VehicleStatus.AVAILABLE:
                raise HTTPException(status_code=400, detail="Vehicle not available")

            if driver.status != DriverStatus.AVAILABLE:
                raise HTTPException(status_code=400, detail="Driver not available")

            if driver.license_expiry < date.today():
                raise HTTPException(status_code=400, detail="Driver license expired")

            if cargo_weight > vehicle.max_capacity:
                raise HTTPException(status_code=400, detail="Over capacity")

            # -------- CREATE TRIP --------

            trip = Trip(
                vehicle_id=vehicle.id,
                driver_id=driver.id,
                cargo_weight=cargo_weight,
                status=TripStatus.DISPATCHED,
                start_time=datetime.utcnow()
            )

            db.add(trip)

            # Lock vehicle & driver
            vehicle.status = VehicleStatus.ON_TRIP
            driver.status = DriverStatus.ON_TRIP

            db.commit()
            db.refresh(trip)

            return trip

        except HTTPException:
            db.rollback()
            raise

        except Exception:
            db.rollback()
            raise HTTPException(status_code=500, detail="Internal Server Error")

    # -------------------------------
    # COMPLETE TRIP
    # -------------------------------
    def complete_trip(self, db: Session, trip_id: int):

        try:
            trip = db.query(Trip).filter(Trip.id == trip_id).first()

            if not trip:
                raise HTTPException(status_code=404, detail="Trip not found")

            if trip.status != TripStatus.DISPATCHED:
                raise HTTPException(status_code=400, detail="Trip not in dispatched state")

            vehicle = vehicle_repo.get_by_id(db, trip.vehicle_id)
            driver = driver_repo.get_by_id(db, trip.driver_id)

            # Update lifecycle
            trip.status = TripStatus.COMPLETED
            trip.end_time = datetime.utcnow()

            # Unlock vehicle & driver
            vehicle.status = VehicleStatus.AVAILABLE
            driver.status = DriverStatus.AVAILABLE

            db.commit()
            db.refresh(trip)

            return trip

        except HTTPException:
            db.rollback()
            raise

        except Exception:
            db.rollback()
            raise HTTPException(status_code=500, detail="Internal Server Error")