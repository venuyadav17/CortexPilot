# CortexPilot

<p align="center">
  <b>Hybrid AI-Powered Code Review Platform built with FastAPI, SQLAlchemy & PostgreSQL</b>
</p>

---

# 🚀 Overview

CortexPilot is a production-oriented AI-powered Code Review Platform that combines deterministic static code analysis with Large Language Model (LLM) reasoning.

Unlike traditional AI code reviewers that directly send code to an LLM, CortexPilot follows a hybrid architecture:

1. Analyze source code using a custom rule-based engine.
2. Detect quality, security, and maintainability issues.
3. Generate a structured review report.
4. Retrieve relevant coding standards using Retrieval-Augmented Generation (RAG).
5. Enhance findings using Gemini AI.
6. Store review history securely in PostgreSQL.
7. Provide dashboard analytics and export capabilities.

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
- Secure APIs using JWT Authentication
- Store review history in PostgreSQL
- Follow production software engineering principles

---

# ✨ Current Features

## Backend

- FastAPI REST API
- Modular Architecture
- Layered Service Design
- Request Validation using Pydantic
- Interactive Swagger Documentation

---

## Rule-Based Code Analysis

Currently CortexPilot detects:

- TODO Comments
- Debug Print Statements
- Hardcoded Passwords
- Hardcoded API Keys / Secrets
- Empty Code Submissions
- Long Lines (>80 Characters)

---

## AI Code Review

Gemini AI provides:

- Problem Explanation
- Security Impact
- Recommended Fixes
- Best Practices
- Production-Level Suggestions

---

## Retrieval-Augmented Generation (RAG)

Instead of sending the complete knowledge base to Gemini, CortexPilot retrieves only relevant coding standards.

Features:

- Custom Knowledge Base
- Rule-to-Context Mapping
- Context Injection
- Smart Retrieval
- Modular Retriever Service

---

## Review Report Generator

Automatically Generates:

- Code Quality Score
- Review Status
- Severity Classification
- Total Issues
- Code Summary

Status:

- Good
- Needs Improvement
- Poor

Severity:

- Info
- Warning
- Critical

---

## Quick Summary Generator

Every review starts with a concise issue summary.

Example:

- Hardcoded Secret detected
- Debug Print detected
- TODO Comment found

Developers can immediately understand the major problems before reading the detailed AI explanation.

---

## Authentication

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected APIs

---

## Dashboard Analytics

Provides:

- Total Reviews
- Average Score
- Best Score
- Lowest Score
- Good Reviews
- Needs Improvement Reviews
- Poor Reviews
- Issue Statistics
- Severity Statistics
- Review History
- Recent Reviews

---

## Export

Developers can export review history as:

- CSV
- PDF

---

## File Upload

Supports source code upload.

API:

```http
POST /upload
```

---

## Review History

Stores:

- Timestamp
- Quality Score
- Review Status
- Quick Summary
- Issues
- AI Review

API:

```http
GET /history
```

---

## Database

Powered by:

- PostgreSQL
- SQLAlchemy ORM

Benefits:

- Better Scalability
- Production Ready
- Secure Data Storage
- Faster Querying
- ORM-Based Architecture

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

      ┌─────────────┼─────────────┐
      │             │             │

      ▼             ▼             ▼

 Rule Engine    Retriever     AI Service

                    │             │

                    ▼             ▼

           Knowledge Base    Gemini AI

      └─────────────┼─────────────┘

                    ▼

          Report Generator

                    ▼

       Quick Summary Generator

                    ▼

          History Service

                    ▼

          SQLAlchemy ORM

                    ▼

            PostgreSQL Database

                    ▼

        Structured JSON Response
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

## Database

- PostgreSQL
- SQLAlchemy ORM

## Authentication

- JWT
- Passlib
- bcrypt

## Validation

- Pydantic

## Environment

- python-dotenv

## Export

- Pandas
- ReportLab

## Version Control

- Git
- GitHub

---

# 📈 Development Progress

| Session | Feature | Status |
|----------|---------|--------|
| 1 | FastAPI Setup | ✅ |
| 2 | Project Structure | ✅ |
| 3 | Review API | ✅ |
| 4 | Static Analysis | ✅ |
| 5 | Rule Engine | ✅ |
| 6 | Report Generator | ✅ |
| 7 | Advanced Rules | ✅ |
| 8 | Quality Score | ✅ |
| 9 | Gemini AI | ✅ |
| 10 | Review History | ✅ |
| 11 | File Upload | ✅ |
| 12 | RAG Integration | ✅ |
| 13 | Quick Summary | ✅ |
| 14 | JWT Authentication | ✅ |
| 15 | Dashboard Analytics | ✅ |
| 16 | PDF & CSV Export | ✅ |
| 17 | PostgreSQL Integration | ✅ |
| 18 | SQLAlchemy Migration | ✅ |
| 19 | Docker | ⏳ |
| 20 | Render Deployment | ⏳ |
| 21 | React Frontend | ⏳ |
| 22 | Vercel Deployment | ⏳ |

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

Generate Report

        │

        ▼

Generate Quick Summary

        │

        ▼

Retrieve Coding Standards (RAG)

        │

        ▼

Gemini AI Review

        │

        ▼

Store in PostgreSQL

        │

        ▼

Dashboard / Export

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
    }
  ],
  "issues": [],
  "ai_review": "Detailed AI explanation..."
}
```

---

# 🚀 Upcoming Features

- Docker Support
- Cloud Deployment (Render)
- React Dashboard
- Vercel Deployment
- CI/CD Pipeline
- Monitoring & Logging
- Team Collaboration
- Multi-language Code Analysis
- AI Generated Code Fixes

---

# 👨‍💻 Author

**Venu Yadav**

B.Tech Computer Science & Engineering

Building CortexPilot to learn:

- Backend Engineering
- AI Integration
- Retrieval-Augmented Generation (RAG)
- System Design
- SQLAlchemy & PostgreSQL
- Production Software Architecture
- Cloud Deployment