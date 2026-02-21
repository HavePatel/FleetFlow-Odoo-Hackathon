from fastapi import FastAPI
from app.core.database import Base, engine
from app.routers import vehicle_router, driver_router, trip_router
from app.routers import maintenance_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="FleetFlow API")

app.include_router(vehicle_router.router)
app.include_router(driver_router.router)
app.include_router(trip_router.router)
app.include_router(maintenance_router.router)