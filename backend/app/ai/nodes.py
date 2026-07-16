from app.ai.prompts import SYSTEM_PROMPT

from app.ai.tools import (
    log_interaction_tool,
    edit_interaction_tool,
    interaction_history_tool,
    summarize_tool,
    next_best_action_tool,
)


def assistant_node(state):
    context = state["crm_context"]
    query = state["user_query"].lower()

    # Tool 1
    if "log" in query:
        response = log_interaction_tool(context)

    # Tool 2
    elif "edit" in query or "update" in query:
        response = edit_interaction_tool(context)

    # Tool 3
    elif "history" in query or "previous" in query:
        response = interaction_history_tool(context)

    # Tool 4
    elif "summary" in query or "summarize" in query:
        response = summarize_tool(context)

    # Tool 5
    elif (
        "next best action" in query
        or "recommend" in query
        or "follow up" in query
    ):
        response = next_best_action_tool(context)

    else:
        response = summarize_tool(context)

    return {
        "response": response
    }