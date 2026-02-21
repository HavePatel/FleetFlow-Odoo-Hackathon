from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.trip_schema import TripCreate
from app.services.dispatch_service import DispatchService
from fastapi import Path

router = APIRouter()
service = DispatchService()

@router.post("/trips")
def dispatch_trip(data: TripCreate, db: Session = Depends(get_db)):
    return service.dispatch_trip(
        db,
        data.vehicle_id,
        data.driver_id,
        data.cargo_weight
    )



@router.put("/trips/{trip_id}/complete")
def complete_trip(trip_id: int = Path(...), db: Session = Depends(get_db)):
    return service.complete_trip(db, trip_id)