from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.vehicle import Vehicle
from app.schemas.vehicle_schema import VehicleCreate, VehicleResponse
from app.repositories.vehicle_repo import VehicleRepository

router = APIRouter()
repo = VehicleRepository()


@router.post("/vehicles", response_model=VehicleResponse)
def create_vehicle(data: VehicleCreate, db: Session = Depends(get_db)):
    vehicle = Vehicle(**data.model_dump())
    return repo.create(db, vehicle)


@router.get("/vehicles", response_model=list[VehicleResponse])
def get_vehicles(db: Session = Depends(get_db)):
    return db.query(Vehicle).all()