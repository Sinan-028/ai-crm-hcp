from langchain_core.tools import tool

@tool
def analyze_sentiment(text: str):
    return "Positive"