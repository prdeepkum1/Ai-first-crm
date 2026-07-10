from sqlalchemy import Column, Integer, String, Date, DateTime
from datetime import datetime

from database.base import Base


class Reminder(Base):
    __tablename__ = "reminders"

    id = Column(Integer, primary_key=True, index=True)

    doctor_name = Column(String)
    reminder_date = Column(Date)
    message = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)