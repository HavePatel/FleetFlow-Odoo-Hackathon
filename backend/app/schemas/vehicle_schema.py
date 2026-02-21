from pydantic import BaseModel
from app.utils.enums import VehicleStatus

class VehicleCreate(BaseModel):
    license_plate: str
    max_capacity: int
    odometer: int

class VehicleResponse(BaseModel):
    id: int
    license_plate: str
    max_capacity: int
    status: VehicleStatus
    odometer: int

    model_config = {
        "from_attributes": True
    }   