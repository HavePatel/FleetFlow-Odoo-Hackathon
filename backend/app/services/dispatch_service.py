from datetime import datetime, date
from app.models.trip import Trip
from app.utils.enums import VehicleStatus, DriverStatus, TripStatus
from app.repositories.vehicle_repo import VehicleRepository
from app.repositories.driver_repo import DriverRepository

vehicle_repo = VehicleRepository()
driver_repo = DriverRepository()

class DispatchService:

    def dispatch_trip(self, db, vehicle_id, driver_id, cargo_weight):

        vehicle = vehicle_repo.get_by_id(db, vehicle_id)
        driver = driver_repo.get_by_id(db, driver_id)

        if not vehicle:
            raise Exception("Vehicle not found")

        if not driver:
            raise Exception("Driver not found")

        if vehicle.status != VehicleStatus.AVAILABLE:
            raise Exception("Vehicle not available")

        if driver.status != DriverStatus.AVAILABLE:
            raise Exception("Driver not available")

        if driver.license_expiry < date.today():
            raise Exception("License expired")

        if cargo_weight > vehicle.max_capacity:
            raise Exception("Over capacity")

        trip = Trip(
            vehicle_id=vehicle.id,
            driver_id=driver.id,
            cargo_weight=cargo_weight,
            status=TripStatus.DISPATCHED,
            start_time=datetime.utcnow()
        )

        db.add(trip)

        vehicle.status = VehicleStatus.ON_TRIP
        driver.status = DriverStatus.ON_TRIP

        db.commit()
        db.refresh(trip)

        return trip