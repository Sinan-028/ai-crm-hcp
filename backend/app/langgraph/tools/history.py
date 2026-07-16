from langchain_core.tools import tool

@tool
def interaction_history(hcp: str):
    return f"History for {hcp}"