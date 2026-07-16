from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.schemas.interaction import (
    InteractionCreate,
    InteractionResponse,
)
from app.services.interaction_service import InteractionService

router = APIRouter(
    prefix="/api/interactions",
    tags=["Interactions"],
)


@router.get("/", response_model=list[InteractionResponse])
def list_interactions(db: Session = Depends(get_db)):
    service = InteractionService(db)
    return service.get_all()


@router.get("/{interaction_id}", response_model=InteractionResponse)
def get_interaction(
    interaction_id: int,
    db: Session = Depends(get_db),
):
    service = InteractionService(db)

    interaction = service.get(interaction_id)

    if not interaction:
        raise HTTPException(
            status_code=404,
            detail="Interaction not found",
        )

    return interaction


@router.post("/", response_model=InteractionResponse)
def create_interaction(
    interaction: InteractionCreate,
    db: Session = Depends(get_db),
):
    service = InteractionService(db)
    return service.create(interaction.model_dump())


@router.put("/{interaction_id}", response_model=InteractionResponse)
def update_interaction(
    interaction_id: int,
    interaction: InteractionCreate,
    db: Session = Depends(get_db),
):
    service = InteractionService(db)

    updated = service.update(
        interaction_id,
        interaction.model_dump(),
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Interaction not found",
        )

    return updated