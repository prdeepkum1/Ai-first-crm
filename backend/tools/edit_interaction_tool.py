from langchain_core.tools import tool

from database.connection import SessionLocal
from repositories.interaction_repository import InteractionRepository
from schemas.interaction import InteractionUpdate


@tool
def edit_interaction(
    interaction_id: int,
    doctor_name: str,
    hospital: str,
    interaction_type: str,
    notes: str,
    summary: str,
    follow_up_date: str | None = None,
):
    """
    Edit an existing interaction.
    """

    db = SessionLocal()

    try:

        interaction = InteractionUpdate(
            doctor_name=doctor_name,
            hospital=hospital,
            interaction_type=interaction_type,
            notes=notes,
            summary=summary,
            follow_up_date=follow_up_date
        )

        updated = InteractionRepository.update(
            db,
            interaction_id,
            interaction
        )

        if updated is None:
            return {
                "status": "error",
                "message": "Interaction Not Found"
            }

        return {
            "status": "success",
            "message": "Interaction Updated Successfully",
            "interaction_id": updated.id
        }

    finally:
        db.close()