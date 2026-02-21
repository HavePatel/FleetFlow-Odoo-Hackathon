from app.models.driver import Driver

class DriverRepository:

    def get_by_id(self, db, driver_id):
        return db.query(Driver).filter(Driver.id == driver_id).first()

    def create(self, db, driver):
        db.add(driver)
        db.commit()
        db.refresh(driver)
        return driver