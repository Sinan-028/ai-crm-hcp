from app.ai.llm import llm


def summarize_tool(context: str):

    prompt = f"""
You are an AI CRM assistant.

Summarize the following healthcare interaction.

Interaction:

{context}
"""

    response = llm.invoke(prompt)

    return response.content