from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.maintenance import MaintenanceLog
from app.utils.enums import VehicleStatus
from app.repositories.vehicle_repo import VehicleRepository
from app.utils.enums import VehicleStatus

vehicle_repo = VehicleRepository()


class MaintenanceService:

    def create_maintenance(self, db: Session, vehicle_id: int, description: str, cost: int, date):

        try:
            vehicle = vehicle_repo.get_by_id(db, vehicle_id)

            if not vehicle:
                raise HTTPException(status_code=404, detail="Vehicle not found")

            # Create maintenance record
            maintenance = MaintenanceLog(
                vehicle_id=vehicle_id,
                description=description,
                cost=cost,
                date=date
            )

            db.add(maintenance)

            # 🔥 AUTO LOCK VEHICLE
            vehicle.status = VehicleStatus.IN_SHOP

            db.commit()
            db.refresh(maintenance)

            return maintenance

        except HTTPException:
            db.rollback()
            raise

        except Exception:
            db.rollback()
            raise HTTPException(status_code=500, detail="Internal Server Error")
    


    def complete_maintenance(self, db: Session, maintenance_id: int):

        try:
            maintenance = db.query(MaintenanceLog).filter(
                MaintenanceLog.id == maintenance_id
            ).first()

            if not maintenance:
                raise HTTPException(status_code=404, detail="Maintenance record not found")

            if maintenance.is_completed:
                raise HTTPException(status_code=400, detail="Maintenance already completed")

            vehicle = vehicle_repo.get_by_id(db, maintenance.vehicle_id)

            # Mark maintenance complete
            maintenance.is_completed = True

            # 🔥 Unlock vehicle
            vehicle.status = VehicleStatus.AVAILABLE

            db.commit()
            db.refresh(maintenance)

            return maintenance

        except HTTPException:
            db.rollback()
            raise

        except Exception:
            db.rollback()
            raise HTTPException(status_code=500, detail="Internal Server Error")