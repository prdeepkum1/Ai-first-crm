


from sqlalchemy.orm import Session
from models.interaction import Interaction
from schemas.interaction import InteractionCreate, InteractionUpdate


class InteractionRepository:

    @staticmethod
    def create(db: Session, interaction: InteractionCreate):

        new_interaction = Interaction(
            doctor_name=interaction.doctor_name,
            hospital=interaction.hospital,
            interaction_type=interaction.interaction_type,
            notes=interaction.notes,
            summary=interaction.summary,
            follow_up_date=interaction.follow_up_date,
        )

        db.add(new_interaction)
        db.commit()
        db.refresh(new_interaction)

        return new_interaction

    @staticmethod
    def get_all(db: Session):
        return db.query(Interaction).all()

    @staticmethod
    def update(db: Session, interaction_id: int, data: InteractionUpdate):

        interaction = db.query(Interaction).filter(
            Interaction.id == interaction_id
        ).first()

        if not interaction:
            return None

        interaction.doctor_name = data.doctor_name
        interaction.hospital = data.hospital
        interaction.interaction_type = data.interaction_type
        interaction.notes = data.notes
        interaction.summary = data.summary
        interaction.follow_up_date = data.follow_up_date

        db.commit()
        db.refresh(interaction)

        return interaction

    @staticmethod
    def delete(db: Session, interaction_id: int):

        interaction = db.query(Interaction).filter(
            Interaction.id == interaction_id
        ).first()

        if not interaction:
            return {"message": "Interaction not found"}

        db.delete(interaction)
        db.commit()

        return {
            "message": "Interaction Deleted Successfully"
        }