from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.dependencies import get_db

from repositories.reminder_repository import ReminderRepository

from schemas.reminder import (
    ReminderCreate,
    ReminderResponse,
)

router = APIRouter(
    prefix="/reminders",
    tags=["Reminders"]
)


@router.post("/", response_model=ReminderResponse)
def create_reminder(
    reminder: ReminderCreate,
    db: Session = Depends(get_db),
):
    return ReminderRepository.create(db, reminder)


@router.get("/", response_model=list[ReminderResponse])
def get_all_reminders(
    db: Session = Depends(get_db),
):
    return ReminderRepository.get_all(db)


@router.delete("/{reminder_id}")
def delete_reminder(
    reminder_id: int,
    db: Session = Depends(get_db),
):
    return ReminderRepository.delete(db, reminder_id)