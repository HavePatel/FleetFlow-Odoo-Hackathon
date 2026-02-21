from sqlalchemy import Column, Integer, ForeignKey, DateTime, Enum
from sqlalchemy.orm import relationship
from app.core.database import Base
from app.utils.enums import TripStatus

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"), nullable=False)
    driver_id = Column(Integer, ForeignKey("drivers.id"), nullable=False)
    cargo_weight = Column(Integer, nullable=False)
    status = Column(Enum(TripStatus), default=TripStatus.DRAFT)
    start_time = Column(DateTime)
    end_time = Column(DateTime)