from pydantic import BaseModel
from datetime import date


class MaintenanceCreate(BaseModel):
    vehicle_id: int
    description: str
    cost: int
    date: date


class MaintenanceResponse(BaseModel):
    id: int
    vehicle_id: int
    description: str
    cost: int
    date: date

    class Config:
        from_attributes = True  # Pydantic v2 fix

class MaintenanceCompleteResponse(BaseModel):
    id: int
    vehicle_id: int
    is_completed: bool

    class Config:
        from_attributes = True