from pydantic import BaseModel


class AIRequest(BaseModel):
    query: str
    interaction_id: int


class AIResponse(BaseModel):
    response: str