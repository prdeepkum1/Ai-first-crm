
from fastapi import FastAPI
from sqlalchemy import text
from database.base import Base
from database.connection import engine
from api.interaction import router as interaction_router
from api.chat import router as chat_router
from fastapi.middleware.cors import CORSMiddleware
from api.reminder import router as reminder_router

import models

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

# Register routers
app.include_router(interaction_router)
app.include_router(chat_router)


app.include_router(reminder_router)

@app.get("/")
def home():
    return {"message": "AI First CRM Backend Running Successfully 🚀"}


@app.get("/test-db")
def test_db():

    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "message": "Database Connected Successfully ✅"
    }