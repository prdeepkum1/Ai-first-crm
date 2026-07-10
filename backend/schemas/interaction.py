from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional


class InteractionCreate(BaseModel):
    doctor_name: str
    hospital: str
    interaction_type: str
    notes: str
    summary: Optional[str] = None
    follow_up_date: Optional[date] = None


class InteractionResponse(BaseModel):
    id: int
    doctor_name: str
    hospital: str
    interaction_type: str
    notes: str
    summary: Optional[str]
    follow_up_date: Optional[date]
    created_at: datetime

    class Config:
        from_attributes = True


class InteractionUpdate(BaseModel):
    doctor_name: str
    hospital: str
    interaction_type: str
    notes: str
    summary: Optional[str] = None
    follow_up_date: Optional[date] = None