from langchain_core.tools import tool

from database.connection import SessionLocal
from models.interaction import Interaction


@tool
def search_hcp(doctor_name: str):
    """
    Search HCP by doctor name.
    """

    db = SessionLocal()

    try:

        results = db.query(Interaction).filter(
            Interaction.doctor_name.ilike(f"%{doctor_name}%")
        ).all()

        if not results:
            return {
                "status": "error",
                "message": "Doctor not found"
            }

        doctors = []

        for item in results:
            doctors.append({
                "id": item.id,
                "doctor_name": item.doctor_name,
                "hospital": item.hospital,
                "interaction_type": item.interaction_type,
                "summary": item.summary
            })

        return {
            "status": "success",
            "count": len(doctors),
            "data": doctors
        }

    finally:
        db.close()