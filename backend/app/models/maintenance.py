from sqlalchemy import Column, Integer, ForeignKey, String, Date, Boolean
from app.core.database import Base


class MaintenanceLog(Base):
    __tablename__ = "maintenance_logs"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"), nullable=False)
    description = Column(String, nullable=False)
    cost = Column(Integer, nullable=False)
    date = Column(Date, nullable=False)

    is_completed = Column(Boolean, default=False)