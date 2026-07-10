


from typing import Annotated
from typing_extensions import TypedDict

from langgraph.graph import StateGraph, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode, tools_condition

from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, AIMessage

from tools.tool_registry import TOOLS

import os
from dotenv import load_dotenv

load_dotenv()

# ----------------------------
# LLM
# ----------------------------

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

llm = llm.bind_tools(TOOLS)

# ----------------------------
# State
# ----------------------------

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]

# ----------------------------
# Chatbot Node
# ----------------------------

def chatbot(state: AgentState):

    response = llm.invoke(state["messages"])

    return {
        "messages": [response]
    }

# ----------------------------
# Tool Node
# ----------------------------

tool_node = ToolNode(TOOLS)

# ----------------------------
# Graph
# ----------------------------

builder = StateGraph(AgentState)

builder.add_node("chatbot", chatbot)
builder.add_node("tools", tool_node)

builder.set_entry_point("chatbot")

builder.add_conditional_edges(
    "chatbot",
    tools_condition,
    {
        "tools": "tools",
        END: END,
    }
)

builder.add_edge("tools", "chatbot")

graph = builder.compile()

# ----------------------------
# Public Function
# ----------------------------

def chat_with_ai(message: str):

    try:

        result = graph.invoke(
            {
                "messages": [
                    HumanMessage(content=message)
                ]
            }
        )

        messages = result["messages"]

        last_message = messages[-1]

        if isinstance(last_message, AIMessage):
            return last_message.content

        return str(last_message)

    except Exception as e:

        import traceback
        traceback.print_exc()

        return str(e)