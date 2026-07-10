

from datetime import datetime

from langchain_core.tools import tool

from database.connection import SessionLocal
from models.reminder import Reminder


@tool
def create_reminder(
    doctor_name: str,
    reminder_date: str,
    message: str
):
    """
    Create reminder for MR follow-up.
    """

    db = SessionLocal()

    try:

        # Convert only if needed
        if isinstance(reminder_date, str):

            reminder_date = reminder_date.strip()

            if " " in reminder_date and "-" not in reminder_date:

                reminder_date = datetime.strptime(
                    reminder_date,
                    "%d %B"
                ).replace(
                    year=datetime.now().year
                ).date()

        reminder = Reminder(
            doctor_name=doctor_name,
            reminder_date=reminder_date,
            message=message
        )

        db.add(reminder)
        db.commit()
        db.refresh(reminder)

        return {
            "status": "success",
            "message": "Reminder Created Successfully",
            "reminder_id": reminder.id
        }

    finally:
        db.close()