from typing import TypedDict, Optional

class AgentState(TypedDict):
    user_input: str

    interaction_id: Optional[int]

    summary: Optional[str]

    sentiment: Optional[str]

    follow_up: Optional[str]

    response: Optional[str]