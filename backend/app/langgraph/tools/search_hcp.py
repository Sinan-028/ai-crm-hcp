from langchain_core.tools import tool

@tool
def search_hcp(name: str):
    return f"HCP Found: {name}"