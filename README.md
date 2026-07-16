# AI CRM HCP

An AI-first Customer Relationship Management (CRM) application for Healthcare Professionals (HCPs), built as part of the Round 1 Technical Assessment.

---

## Tech Stack

### Frontend
- React + Vite
- Material UI
- Redux Toolkit
- Axios
- React Router

### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL

### AI
- LangGraph
- Groq LLM
- gemma2-9b-it

---

# Features

## Dashboard

- Live KPI Cards
- AI Status
- Recent Interactions
- Quick Actions

---

## HCP Management

- Add HCP
- View HCP Directory
- Search HCP

---

## Interaction Management

- Log Interaction
- View Interactions
- Edit Interaction API
- AI Assisted Follow-up

---

## AI Assistant

Uses LangGraph with Groq to:

- Summarize interactions
- Analyze sentiment
- Recommend next best action
- Generate follow-up suggestions

---

# LangGraph Tools

The AI Agent supports the following tools:

1. Log Interaction
2. Edit Interaction
3. Summarize Interaction
4. Recommend Next Best Action
5. Retrieve Interaction History

---

# Architecture

React (Material UI)
        │
        ▼
Axios API
        │
        ▼
FastAPI
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
PostgreSQL
        │
        ▼
LangGraph
        │
        ▼
Groq (gemma2-9b-it)

---

# Project Structure

backend/

- api
- ai
- core
- db
- models
- repositories
- schemas
- services

frontend/

- components
- pages
- services
- redux
- routes
- theme

---

# Run Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

# Run Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# AI Workflow

1. User logs an interaction.

2. Interaction is stored in PostgreSQL.

3. User requests AI insights.

4. LangGraph builds the workflow.

5. Groq generates:

- Summary
- Sentiment
- Next Best Action

6. Results are displayed in the React application.

---

# Author

Mohammad Sinan