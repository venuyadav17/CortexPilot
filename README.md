# CortexPilot

<p align="center">
  <b>Hybrid AI-Assisted Code Review Platform built with FastAPI</b>
</p>

---

## 🚀 Overview

CortexPilot is a production-oriented AI-assisted Code Review Platform that combines deterministic static analysis with Large Language Model (LLM) reasoning.

Unlike a basic chatbot that directly sends code to an AI model, CortexPilot follows a hybrid approach:

1. Analyze source code using a custom rule-based engine.
2. Detect quality, security, and maintainability issues.
3. Generate a structured review report.
4. Enhance findings using Gemini AI.
5. Store review history for future access.

This architecture improves reliability, reduces complete AI dependency, and follows real-world backend engineering principles.

---

# 🎯 Project Objectives

- Build a scalable AI-powered backend system
- Create a modular FastAPI architecture
- Perform automated static code analysis
- Detect coding mistakes and security issues
- Generate structured code review reports
- Integrate Gemini AI for intelligent suggestions
- Store and retrieve previous reviews
- Follow production-style software design practices

---

# ✨ Current Features


## Backend System

- FastAPI REST API
- Modular folder structure
- Layered service architecture
- Request validation using Pydantic
- Interactive Swagger documentation


---

## Code Analysis Engine

CortexPilot currently detects:

- TODO comments
- Debug print statements
- Hardcoded passwords
- Hardcoded API keys/secrets
- Empty code submissions
- Long lines (>80 characters)


---

## Review Report Generator

Automatically generates:

- Code quality score
- Review status

Status categories:

- Good
- Needs Improvement
- Poor


Includes:

- Total detected issues
- Code summary
- Severity-based evaluation


Severity levels:

- Info
- Warning
- Critical


---

## Gemini AI Review

Gemini AI enhances static analysis by providing:

- Explanation of detected problems
- Security impact analysis
- Code improvement suggestions
- Recommended fixes
- Best practices


---

## Review History System

CortexPilot stores previous reviews with:

- Timestamp
- Review status
- Quality score
- Detected issues
- Gemini AI explanation


Available API:

```http
GET /history
```

Returns stored review history.

---

## Retrieval-Augmented Generation (RAG)

CortexPilot uses a retrieval layer to improve AI responses.

Current RAG features:

- Custom knowledge base
- Coding standard retrieval
- Context injection into Gemini
- More reliable AI explanations
- Modular retriever service

# 🏗 System Architecture


```text

                 Developer

                     │

                     ▼

              FastAPI Backend

                     │

                     ▼

            Request Validation

                (Pydantic)

                     │

                     ▼

              Review Service


        ┌────────────┼────────────┐


        ▼                         ▼


 Rule-Based Engine            AI Service


        │                         │


        ▼                         ▼


 Python Rules              Gemini AI Model


        │                         │


        └────────────┬────────────┘


                     ▼


             Report Generator


                     │


                     ▼


              History Service


                     │


                     ▼


          Structured JSON Response

```

---

# 📂 Project Structure


```text

CortexPilot/

│

├── app/

│   │

│   ├── routes/

│   │      ├── review.py

│   │      └── history.py

│   │

│   ├── services/

│   │      ├── review_service.py

│   │      ├── ai_service.py

│   │      └── history_service.py

│   │

│   ├── schemas/

│   │      └── review_schema.py

│   │

│   ├── review_rules/

│   │      └── python_rules.py

│   │

│   ├── utils/

│   │      └── report_generator.py

│   │

│   ├── models/

│   │

│   ├── config.py

│   │

│   └── main.py

│


├── storage/

│      └── history.json

│

├── requirements.txt

├── README.md

└── .gitignore

```

---

# 🛠 Tech Stack


## Backend

- Python
- FastAPI
- Uvicorn


## AI

- Google Gemini AI
- Google GenAI SDK


## Validation

- Pydantic


## Storage

- JSON File Storage  
(Current)

Future:

- PostgreSQL


## Configuration

- Environment Variables
- python-dotenv


## Version Control

- Git
- GitHub


---

# 📈 Development Progress


| Session | Feature | Status |
|---|---|---|
| 1 | FastAPI Setup | ✅ |
| 2 | Professional Project Structure | ✅ |
| 3 | POST Review API | ✅ |
| 4 | Basic Analysis Service | ✅ |
| 5 | Rule-Based Review Engine | ✅ |
| 6 | Modular Rule System | ✅ |
| 7 | Advanced Review Rules | ✅ |
| 8 | Report Generator + Quality Score | ✅ |
| 9 | Gemini AI Integration | ✅ |
| 10 | Review History System | ✅ |
| 11 | File Upload Support | ✅ |
| 12 | Retrieval-Augmented Generation (RAG) | ✅ |
| 13 | Authentication | ⏳ |
| 14 | Frontend Integration | ⏳ |
| 15 | Deployment | ⏳ |


---
under progress
# 🔄 Current Workflow


```text

Developer submits code


          ↓


POST /review API


          ↓


Validate request


          ↓


Run static rules


          ↓


Detect issues


          ↓


Calculate quality score


          ↓


Generate report


          ↓


Send findings to Gemini


          ↓


Generate AI explanation


          ↓


Save review history


          ↓


Return final response

```

---

# 🔍 Example API Response


```json

{
    "status": "Good",

    "score": 95,

    "total_issues": 1,


    "issues": [

        {

            "rule": "DEBUG_PRINT",

            "severity": "Info",

            "message": "Debug print statement found"

        }

    ],


    "ai_review":

    "The print statement should be replaced with logging in production applications."

}

```

---

# 🚀 Future Enhancements


## Code Intelligence

- Unused import detection
- Duplicate code detection
- Complexity analysis
- Security vulnerability detection


## AI Improvements

- Better prompt engineering
- AI generated fixes
- Code optimization suggestions
- Multi-model support


## Platform Features

- Upload source files
- Analyze complete projects
- User authentication
- Dashboard
- Review analytics


## Production

- Database migration
- Docker support
- CI/CD pipeline
- Cloud deployment


---

# 👨‍💻 Author

**Venu Yadav**

B.Tech Computer Science & Engineering

Building CortexPilot step by step to learn:

- Backend Engineering
- AI Integration
- System Design
- Production Software Architecture
