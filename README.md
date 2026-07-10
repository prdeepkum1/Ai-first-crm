# 🏥 AI First CRM

An AI-powered Customer Relationship Management (CRM) system built for Medical Representatives (MRs) to manage doctor interactions, reminders, and AI-assisted conversations.

---

# 📌 Features

## 📊 Dashboard
- Total Doctors
- Total Hospitals
- Total Interactions
- Total Follow-ups
- Recent Interactions
- Interaction Analytics Chart

---

## 👨‍⚕️ Interaction Management

- Add New Interaction
- Update Interaction
- Delete Interaction
- View Interaction History
- Follow-up Date
- Notes Management

---

## 🤖 AI CRM Assistant

- AI Chat Interface
- Instant Responses
- CRM Assistance

---

## ⏰ Reminder Module

- View Reminders
- Follow-up Tracking
- Reminder Management

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- React Hot Toast
- Recharts

---

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- Uvicorn

---

# 📂 Project Structure

```
AI-FIRST-CRM
│
├── backend
│   │
│   ├── agents
│   │      crm_agent.py
│   │
│   ├── api
│   │      chat.py
│   │      doctor.py
│   │      interaction.py
│   │      reminder.py
│   │
│   ├── database
│   │      base.py
│   │      connection.py
│   │      dependencies.py
│   │
│   ├── models
│   │      interaction.py
│   │      reminder.py
│   │
│   ├── repositories
│   │      interaction_repository.py
│   │      reminder_repository.py
│   │
│   ├── schemas
│   │      interaction.py
│   │      reminder.py
│   │
│   ├── services
│   │
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
│
├── frontend
│   │
│   ├── public
│   │
│   ├── src
│   │
│   │   ├── assets
│   │   │
│   │   ├── components
│   │   │      common
│   │   │      chat
│   │   │      dashboard
│   │   │      interaction
│   │   │
│   │   ├── layouts
│   │   │      MainLayout.jsx
│   │   │
│   │   ├── pages
│   │   │      Dashboard.jsx
│   │   │      Chat.jsx
│   │   │      InteractionHistory.jsx
│   │   │      LogInteraction.jsx
│   │   │      Reminder.jsx
│   │   │      NotFound.jsx
│   │   │
│   │   ├── routes
│   │   │      AppRoutes.jsx
│   │   │
│   │   ├── services
│   │   │      api.js
│   │   │      chatService.js
│   │   │      doctorService.js
│   │   │      interactionService.js
│   │   │      reminderService.js
│   │   │
│   │   ├── utils
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/ai-first-crm.git
```

```bash
cd ai-first-crm
```

---

# 💻 Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# ⚙️ Backend Setup

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install packages

```bash
pip install -r requirements.txt
```

Run backend

```bash
uvicorn main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger API

```
http://127.0.0.1:8000/docs
```

---

# 🔗 API Endpoints

## AI Chat

```
GET /chat
```

---

## Interactions

```
GET    /interactions
POST   /interactions
PUT    /interactions/{id}
DELETE /interactions/{id}
```

---

## Reminders

```
GET    /reminders
POST   /reminders
DELETE /reminders/{id}
```

---

# 📸 Screenshots

## Dashboard

![image_alt](https://github.com/prdeepkum1/Ai-first-crm/blob/main/Screenshot%202026-07-10%20155311.png?raw=true)


---

## AI Chat

![image](https://github.com/prdeepkum1/Ai-first-crm/blob/main/Screenshot%202026-07-10%20160202.png?raw=true)

---

## Interaction History

![image](https://github.com/prdeepkum1/Ai-first-crm/blob/main/Screenshot%202026-07-10%20155922.png?raw=true)

---

## Reminder Page

![image_alt](https://github.com/prdeepkum1/Ai-first-crm/blob/main/Screenshot%202026-07-10%20160311.png?raw=true)

---

# 🔮 Future Improvements

- JWT Authentication
- Doctor Management Module
- AI powered summaries
- AI Reminder Suggestions
- Email Notifications
- Search & Filters
- Pagination
- Export PDF / Excel
- Deployment (Vercel + Render)

---


# 📄 License

This project is created for learning and educational purposes.
