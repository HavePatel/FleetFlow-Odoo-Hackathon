from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.driver import Driver
from app.schemas.driver_schema import DriverCreate, DriverResponse
from app.repositories.driver_repo import DriverRepository

router = APIRouter()
repo = DriverRepository()


@router.post("/drivers", response_model=DriverResponse)
def create_driver(data: DriverCreate, db: Session = Depends(get_db)):
    driver = Driver(**data.model_dump())
    return repo.create(db, driver)


@router.get("/drivers", response_model=list[DriverResponse])
def get_drivers(db: Session = Depends(get_db)):
    return db.query(Driver).all()