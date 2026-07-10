from langchain_core.tools import tool
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
import os
from dotenv import load_dotenv

load_dotenv()

llm = ChatGroq(
    model="openai/gpt-oss-20b",
    api_key=os.getenv("GROQ_API_KEY")
)


@tool
def summarize_interaction(notes: str):
    """
    Summarize doctor's interaction notes.
    """

    prompt = f"""
    Summarize the following doctor interaction in 2-3 sentences.

    Notes:
    {notes}
    """

    response = llm.invoke([
        HumanMessage(content=prompt)
    ])

    return {
        "status": "success",
        "summary": response.content
    }