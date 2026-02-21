from sqlalchemy import Column, Integer, String, Enum
from app.core.database import Base
from app.utils.enums import VehicleStatus

class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    license_plate = Column(String, unique=True, index=True, nullable=False)
    max_capacity = Column(Integer, nullable=False)
    status = Column(Enum(VehicleStatus), default=VehicleStatus.AVAILABLE)
    odometer = Column(Integer, default=0)