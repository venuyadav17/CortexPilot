# CortexPilot

<p align="center">
  <b>Hybrid AI-Assisted Code Review Platform built with FastAPI</b>
</p>

---

# 🚀 Overview

CortexPilot is a production-oriented AI-assisted Code Review Platform that combines deterministic static code analysis with Large Language Model (LLM) reasoning.

Unlike traditional AI code reviewers that directly send code to an LLM, CortexPilot follows a hybrid architecture:

1. Analyze source code using a custom rule-based engine.
2. Detect quality, security, and maintainability issues.
3. Generate a structured review report.
4. Retrieve relevant coding standards using Retrieval-Augmented Generation (RAG).
5. Enhance findings using Gemini AI.
6. Store review history in a SQLite database.

This architecture improves reliability, reduces AI hallucinations, and follows production-grade backend engineering practices.

---

# 🎯 Project Objectives

- Build a scalable AI-powered backend
- Create a modular FastAPI architecture
- Perform automated static code analysis
- Detect security and code quality issues
- Generate structured review reports
- Integrate Gemini AI for intelligent explanations
- Implement Retrieval-Augmented Generation (RAG)
- Store review history in a database
- Follow production software engineering principles

---

# ✨ Current Features

## Backend

- FastAPI REST API
- Modular folder structure
- Layered service architecture
- Request validation using Pydantic
- Interactive Swagger Documentation

---

## Rule-Based Code Analysis

Currently CortexPilot detects:

- TODO comments
- Debug print statements
- Hardcoded passwords
- Hardcoded API keys / secrets
- Empty code submissions
- Long lines (>80 characters)

---

## Review Report Generator

Automatically generates:

- Code Quality Score
- Review Status
- Total Issues
- Code Summary
- Severity Classification

Status:

- Good
- Needs Improvement
- Poor

Severity Levels:

- Info
- Warning
- Critical

---

## Quick Summary Generator

Every review includes a concise summary before the detailed AI explanation.

Example:

- Hardcoded Secret detected
- Debug Print detected
- TODO Comment found

This allows developers to understand major issues instantly.

---

## Gemini AI Review

Gemini AI provides:

- Explanation of detected issues
- Security impact analysis
- Recommended fixes
- Best coding practices
- Production-ready suggestions

---

## Smart Retrieval-Augmented Generation (RAG)

Instead of sending the complete knowledge base to Gemini, CortexPilot retrieves only the relevant coding standards based on detected issues.

Current RAG Features:

- Custom Knowledge Base
- Rule-to-Context Mapping
- Context Injection into Gemini
- Relevant Guideline Retrieval
- Modular Retriever Service

---

## File Upload Support

Developers can upload source files directly for analysis.

Available API:

```http
POST /upload
```

---

## Review History

Every review is stored with:

- Timestamp
- Review Status
- Quality Score
- Quick Summary
- Detailed Issues
- AI Review

Available API:

```http
GET /history
```

---

## SQLite Database Storage

Review history is now stored inside a SQLite database instead of JSON files.

Benefits:

- Faster retrieval
- Better scalability
- Easier migration to PostgreSQL
- Production-oriented persistence

---

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

       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼

 Rule Engine     Retriever      AI Service
                     │              │
                     ▼              ▼
            Knowledge Base     Gemini AI

       └──────────────┼──────────────┘
                      ▼

            Report Generator

                      │

                      ▼

          Quick Summary Generator

                      │

                      ▼

            History Service

                      │

                      ▼

             SQLite Database

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

│   ├── routes/
│   │      ├── review.py
│   │      ├── upload.py
│   │      └── history.py
│   │
│   ├── services/
│   │      ├── review_service.py
│   │      ├── ai_service.py
│   │      ├── retriever_service.py
│   │      ├── history_service.py
│   │      └── summary_service.py
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
├── database/
│      ├── database.py
│      └── reviews.db
│
├── knowledge_base/
│      └── coding_rules.txt
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

- Google Gemini
- Google GenAI SDK

## Validation

- Pydantic

## Database

- SQLite

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
|---------|---------|--------|
| 1 | FastAPI Setup | ✅ |
| 2 | Professional Project Structure | ✅ |
| 3 | POST Review API | ✅ |
| 4 | Basic Analysis Service | ✅ |
| 5 | Rule-Based Review Engine | ✅ |
| 6 | Modular Rule System | ✅ |
| 7 | Advanced Review Rules | ✅ |
| 8 | Report Generator + Quality Score | ✅ |
| 9 | Gemini AI Integration | ✅ |
| 10 | Review History | ✅ |
| 11 | File Upload Support | ✅ |
| 12 | Retrieval-Augmented Generation (RAG) | ✅ |
| 13 | Smart RAG Retrieval | ✅ |
| 14 | Quick Summary Generator | ✅ |
| 15 | SQLite Database Integration | ✅ |
| 16 | JWT Authentication | ⏳ |
| 17 | Frontend (React) | ⏳ |
| 18 | Docker | ⏳ |
| 19 | Cloud Deployment | ⏳ |

---

# 🔄 Current Workflow

```text
Developer submits code
        │
        ▼
POST /review
        │
        ▼
Request Validation
        │
        ▼
Rule-Based Analysis
        │
        ▼
Generate Quality Report
        │
        ▼
Generate Quick Summary
        │
        ▼
Retrieve Relevant Coding Rules
        │
        ▼
Gemini AI Review
        │
        ▼
Store Review in SQLite
        │
        ▼
Return Structured JSON Response
```

---

# 🔍 Example API Response

```json
{
  "status": "Needs Improvement",
  "score": 65,
  "quick_summary": [
    {
      "severity": "Critical",
      "title": "Hardcoded Secret",
      "summary": "Move secrets into environment variables."
    },
    {
      "severity": "Info",
      "title": "Debug Print",
      "summary": "Remove debug statements before production."
    }
  ],
  "issues": [],
  "ai_review": "Detailed AI explanation..."
}
```

---

# 🚀 Future Enhancements

## Static Analysis

- Unused Import Detection
- Duplicate Code Detection
- Complexity Analysis
- Dead Code Detection
- Security Vulnerability Detection

## AI

- AI-generated Code Fixes
- Better Prompt Engineering
- Multi-model Support
- Project-level Review

## Platform

- User Authentication (JWT)
- Dashboard
- User-specific Review History
- Team Collaboration

## Production

- PostgreSQL
- Docker
- CI/CD
- Cloud Deployment
- Monitoring & Logging

---

# 👨‍💻 Author

**Venu Yadav**

B.Tech Computer Science & Engineering

Building CortexPilot to learn:

- Backend Engineering
- AI Integration
- Retrieval-Augmented Generation (RAG)
- System Design
- Production Software Architecture