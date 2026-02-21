from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.maintenance_schema import MaintenanceCreate
from app.services.maintenance_service import MaintenanceService
from fastapi import Path

router = APIRouter()
service = MaintenanceService()


@router.post("/maintenance")
def create_maintenance(data: MaintenanceCreate, db: Session = Depends(get_db)):
    return service.create_maintenance(
        db=db,
        vehicle_id=data.vehicle_id,
        description=data.description,
        cost=data.cost,
        date=data.date
    )


@router.put("/maintenance/{maintenance_id}/complete")
def complete_maintenance(
    maintenance_id: int = Path(..., description="Maintenance ID"),
    db: Session = Depends(get_db)
):
    return service.complete_maintenance(db=db, maintenance_id=maintenance_id)