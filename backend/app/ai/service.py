from app.ai.graph import graph


def ask_ai(user_query: str, crm_context: str):
    result = graph.invoke(
        {
            "user_query": user_query,
            "crm_context": crm_context,
        }
    )

    return result["response"]