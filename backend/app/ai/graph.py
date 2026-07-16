from langgraph.graph import END, StateGraph

from app.ai.nodes import assistant_node
from app.ai.state import CRMState

builder = StateGraph(CRMState)

builder.add_node("assistant", assistant_node)

builder.set_entry_point("assistant")

builder.add_edge("assistant", END)

graph = builder.compile()