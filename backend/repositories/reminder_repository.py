from sqlalchemy.orm import Session

from models.reminder import Reminder


class ReminderRepository:

    @staticmethod
    def create(db: Session, reminder):

        db_reminder = Reminder(
            doctor_name=reminder.doctor_name,
            reminder_date=reminder.reminder_date,
            message=reminder.message,
        )

        db.add(db_reminder)
        db.commit()
        db.refresh(db_reminder)

        return db_reminder

    @staticmethod
    def get_all(db: Session):

        return db.query(Reminder).all()

    @staticmethod
    def delete(db: Session, reminder_id: int):

        reminder = db.query(Reminder).filter(
            Reminder.id == reminder_id
        ).first()

        if not reminder:
            return {
                "message": "Reminder not found"
            }

        db.delete(reminder)
        db.commit()

        return {
            "message": "Reminder deleted successfully"
        }