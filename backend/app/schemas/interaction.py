from pydantic import BaseModel
from typing import Optional

class InteractionCreate(BaseModel):
    hcp_id: int
    user_id: int
    interaction_type: str
    summary: str
    sentiment: Optional[str] = None
    follow_up: Optional[str] = None


class InteractionResponse(InteractionCreate):
    id: int

    class Config:
        from_attributes = True