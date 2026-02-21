from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.driver import Driver
from app.schemas.driver_schema import DriverCreate
from app.repositories.driver_repo import DriverRepository

router = APIRouter()
repo = DriverRepository()

@router.post("/drivers")
def create_driver(data: DriverCreate, db: Session = Depends(get_db)):
    driver = Driver(**data.dict())
    return repo.create(db, driver)