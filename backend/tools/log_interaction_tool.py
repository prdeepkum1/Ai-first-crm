from langchain_core.tools import tool

from database.connection import SessionLocal
from repositories.interaction_repository import InteractionRepository
from schemas.interaction import InteractionCreate


@tool
def log_interaction(
    doctor_name: str,
    hospital: str,
    interaction_type: str,
    notes: str
):
    """
    Save interaction into database.
    """

    db = SessionLocal()

    try:

        interaction = InteractionCreate(
            doctor_name=doctor_name,
            hospital=hospital,
            interaction_type=interaction_type,
            notes=notes,
            summary=notes,
            follow_up_date=None
        )

        saved = InteractionRepository.create(db, interaction)

        return {
            "status": "success",
            "interaction_id": saved.id,
            "message": "Interaction Logged Successfully"
        }

    finally:
        db.close()