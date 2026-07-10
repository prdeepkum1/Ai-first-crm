

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas.interaction import InteractionUpdate

from database.dependencies import get_db

from schemas.interaction import (
    InteractionCreate,
    InteractionResponse,
)

from repositories.interaction_repository import InteractionRepository

router = APIRouter(
    prefix="/interactions",
    tags=["Interactions"]
)

# CREATE ROUTE
@router.post("/", response_model=InteractionResponse)
def create_interaction(
    interaction: InteractionCreate,
    db: Session = Depends(get_db)
):
    return InteractionRepository.create(db, interaction)

# UPDATE ROUTE
@router.put("/{interaction_id}",
            response_model=InteractionResponse)
def update_interaction(
    interaction_id: int,
    interaction: InteractionUpdate,
    db: Session = Depends(get_db)
):

    return InteractionRepository.update(
        db,
        interaction_id,
        interaction
    )

# DELETE ROUTE
@router.delete("/{interaction_id}")
def delete_interaction(
    interaction_id: int,
    db: Session = Depends(get_db)
):
    return InteractionRepository.delete(db, interaction_id)


@router.get("/", response_model=list[InteractionResponse])
def get_all_interactions(
    db: Session = Depends(get_db)
):
    return InteractionRepository.get_all(db)