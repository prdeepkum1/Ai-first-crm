from pydantic import BaseModel
from datetime import date, datetime


class ReminderCreate(BaseModel):
    doctor_name: str
    reminder_date: date
    message: str


class ReminderResponse(BaseModel):
    id: int
    doctor_name: str
    reminder_date: date
    message: str
    created_at: datetime

    class Config:
        from_attributes = True