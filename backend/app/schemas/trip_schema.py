from pydantic import BaseModel

class TripCreate(BaseModel):
    vehicle_id: int
    driver_id: int
    cargo_weight: int

class TripResponse(BaseModel):
    id: int
    vehicle_id: int
    driver_id: int
    cargo_weight: int
    status: str

    class Config:
        orm_mode = True