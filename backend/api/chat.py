

from fastapi import APIRouter

from agents.crm_agent import chat_with_ai

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)


@router.get("/")
def chat(message: str):

    response = chat_with_ai(message)

    return {
        "response": response
    }