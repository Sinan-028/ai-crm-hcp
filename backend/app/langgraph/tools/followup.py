from langchain_core.tools import tool

@tool
def generate_followup(text: str):
    return "Schedule follow-up next week."