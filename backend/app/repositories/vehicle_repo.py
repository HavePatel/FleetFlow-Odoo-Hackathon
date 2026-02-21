from app.models.vehicle import Vehicle

class VehicleRepository:

    def get_by_id(self, db, vehicle_id):
        return db.query(Vehicle).filter(Vehicle.id == vehicle_id).first()

    def create(self, db, vehicle):
        db.add(vehicle)
        db.commit()
        db.refresh(vehicle)
        return vehicle