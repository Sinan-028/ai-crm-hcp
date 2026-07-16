from app.ai.llm import llm


def next_best_action_tool(context: str):

    prompt = f"""
You are an AI CRM assistant.

Read the interaction below and recommend the next best action.

Interaction:

{context}
"""

    response = llm.invoke(prompt)

    return response.content