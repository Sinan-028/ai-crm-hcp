from langchain_core.tools import tool

@tool
def edit_interaction(
    interaction_id: int,
    summary: str,
):
    return f"Interaction {interaction_id} updated."