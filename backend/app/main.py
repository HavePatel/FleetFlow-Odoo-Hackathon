from fastapi import FastAPI
from app.core.database import Base, engine
from app.routers import vehicle_router, driver_router, trip_router
from app.routers import maintenance_router
from app.routers import dashboard_router
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI(title="FleetFlow API")

app.include_router(vehicle_router.router)
app.include_router(driver_router.router)
app.include_router(trip_router.router)
app.include_router(maintenance_router.router)
app.include_router(dashboard_router.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)