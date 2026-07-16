from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.ai.schemas import AIRequest, AIResponse
from app.ai.service import ask_ai
from app.db.database import get_db
from app.repositories.interaction_repository import InteractionRepository

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.post("/chat", response_model=AIResponse)
def chat(request: AIRequest, db: Session = Depends(get_db)):
    repo = InteractionRepository(db)

    interaction = repo.get_by_id(request.interaction_id)

    if interaction is None:
        raise HTTPException(
            status_code=404,
            detail="Interaction not found",
        )

    crm_context = f"""
HCP ID: {interaction.hcp_id}
User ID: {interaction.user_id}
Interaction Type: {interaction.interaction_type}
Summary: {interaction.summary}
Sentiment: {interaction.sentiment}
Follow Up: {interaction.follow_up}
"""

    response = ask_ai(
        user_query=request.query,
        crm_context=crm_context,
    )

    return AIResponse(
        response=response,
    )