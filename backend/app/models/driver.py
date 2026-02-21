from sqlalchemy import Column, Integer, String, Date, Enum
from app.core.database import Base
from app.utils.enums import DriverStatus

class Driver(Base):
    __tablename__ = "drivers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    license_expiry = Column(Date, nullable=False)
    status = Column(Enum(DriverStatus), default=DriverStatus.AVAILABLE)