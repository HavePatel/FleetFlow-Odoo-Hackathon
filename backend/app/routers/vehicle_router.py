from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.vehicle import Vehicle
from app.schemas.vehicle_schema import VehicleCreate
from app.repositories.vehicle_repo import VehicleRepository

router = APIRouter()
repo = VehicleRepository()

@router.post("/vehicles")
def create_vehicle(data: VehicleCreate, db: Session = Depends(get_db)):
    vehicle = Vehicle(**data.dict())
    return repo.create(db, vehicle)