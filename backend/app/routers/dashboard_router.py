from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.vehicle import Vehicle
from app.models.driver import Driver
from app.utils.enums import VehicleStatus

router = APIRouter()


@router.get("/dashboard/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):

    available = db.query(Vehicle).filter(
        Vehicle.status == VehicleStatus.AVAILABLE
    ).count()

    on_trip = db.query(Vehicle).filter(
        Vehicle.status == VehicleStatus.ON_TRIP
    ).count()

    in_maintenance = db.query(Vehicle).filter(
        Vehicle.status == VehicleStatus.IN_SHOP
    ).count()

    total_drivers = db.query(Driver).count()

    return {
        "availableVehicles": available,
        "onTripVehicles": on_trip,
        "inMaintenance": in_maintenance,
        "totalDrivers": total_drivers
    }