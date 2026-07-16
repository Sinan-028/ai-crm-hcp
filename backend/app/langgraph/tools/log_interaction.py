from langchain_core.tools import tool

@tool
def log_interaction(summary: str):

    """
    Save interaction summary.
    """

    return f"Interaction Logged:\n\n{summary}"