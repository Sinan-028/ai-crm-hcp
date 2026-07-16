from typing import TypedDict

class CRMState(TypedDict):
    user_query: str
    crm_context: str
    response: str