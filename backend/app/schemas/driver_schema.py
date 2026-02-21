from pydantic import BaseModel
from datetime import date
from app.utils.enums import DriverStatus

class DriverCreate(BaseModel):
    name: str
    license_expiry: date

class DriverResponse(BaseModel):
    id: int
    name: str
    license_expiry: date
    status: DriverStatus

    class Config:
        orm_mode = True