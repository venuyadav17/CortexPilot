# CortexPilot

<p align="center">
  <b>Hybrid AI-Assisted Code Review Platform built with FastAPI</b>
</p>

---

## 🚀 Overview

CortexPilot is a production-oriented AI-assisted Code Review Platform that combines a deterministic rule-based analysis engine with Large Language Model (LLM) reasoning.

Unlike a basic AI chatbot that directly sends code to an AI model, CortexPilot first analyzes code using its own static review engine. The detected issues are then passed to Gemini AI to generate deeper explanations, improvement suggestions, and best practices.

This hybrid approach improves reliability, reduces unnecessary AI dependency, and follows real-world software engineering practices.

---

## 🎯 Project Objectives

- Build a scalable FastAPI backend architecture
- Perform rule-based static code analysis
- Detect code quality and security issues
- Generate code quality scores
- Integrate Gemini AI for intelligent review explanations
- Provide structured JSON API responses
- Build a production-ready AI engineering project

---

# ✨ Current Features

## Backend

- FastAPI REST API
- Clean layered architecture
- Modular service design
- Swagger API documentation
- Environment-based configuration

---

## Code Analysis Engine

CortexPilot currently detects:

- TODO comments
- Debug print statements
- Possible hardcoded passwords
- Hardcoded API keys/secrets
- Empty code submissions
- Long lines (>80 characters)

---

## Review Report System

Generates:

- Code quality score
- Review status:
  - Good
  - Needs Improvement
  - Poor
- Total issue count
- Severity-based evaluation

Severity levels:

- Info
- Warning
- Critical

---

## AI Review System

Powered by Gemini AI:

- Explains detected issues
- Provides security recommendations
- Suggests improvements
- Gives coding best practices
- Generates developer-friendly feedback

---

# 🏗 Architecture

```text
                 Client

                   │
                   ▼

              FastAPI API

                   │
                   ▼

          Pydantic Validation

                   │
                   ▼

            Review Service

                   │

        ┌──────────┴──────────┐

        ▼                     ▼

   Rule Engine            AI Service

        │                     │

        ▼                     ▼

 Python Rules            Gemini AI

        │                     │

        └──────────┬──────────┘

                   ▼

           Report Generator

                   │
                   ▼

        Structured JSON Response
```

---

# 📂 Project Structure

```text
CortexPilot/

├── app/
│
│   ├── routes/
│   │
│   ├── schemas/
│   │
│   ├── services/
│   │      ├── review_service.py
│   │      └── ai_service.py
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
│   └── main.py
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

## Configuration

- python-dotenv
- Environment Variables

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
| 4 | Basic Code Analysis Service | ✅ |
| 5 | Rule-Based Review Engine | ✅ |
| 6 | Modular Rule System | ✅ |
| 7 | Advanced Review Rules | ✅ |
| 8 | Report Generator + Quality Score | ✅ |
| 9 | Gemini AI Integration | ✅ |
| 10 | Review History System | ⏳ |
| 11 | File Upload Support | ⏳ |
| 12 | Retrieval-Augmented Generation (RAG) | ⏳ |
| 13 | Deployment | ⏳ |

---

# 🔄 Current Workflow

```text

Developer submits code

          │

          ▼

FastAPI receives request

          │

          ▼

Validate request data

          │

          ▼

Execute static rules

          │

          ▼

Generate issue report

          │

          ▼

Calculate quality score

          │

          ▼

Send context to Gemini

          │

          ▼

Generate AI explanation

          │

          ▼

Return final review

```

---

# 🔍 Example Response

```json
{
  "status": "Needs Improvement",

  "score": 60,

  "total_issues": 3,

  "issues": [
    {
      "rule": "HARDCODED_SECRET",
      "severity": "Critical",
      "message": "Possible secret detected.",
      "suggestion": "Move secrets into environment variables."
    }
  ],

  "ai_review":
  "The code contains a security risk because secrets should not be stored directly inside source files..."
}
```

---

# 🚀 Future Enhancements

## Code Review

- Detect unused imports
- Detect duplicate code
- Detect complex functions
- Detect security vulnerabilities

## AI Improvements

- Better prompt engineering
- AI-generated fixes
- Code rewriting suggestions
- Multiple AI provider support

## Platform Features

- Review history storage
- User authentication
- Multi-file analysis
- Repository upload
- Dashboard

## Production

- Docker support
- CI/CD pipeline
- Cloud deployment
- Monitoring and logging

---

# 👨‍💻 Author

**Venu Yadav**

B.Tech Computer Science & Engineering

Building CortexPilot to explore Backend Engineering, AI Integration, and Production Software Architecture.