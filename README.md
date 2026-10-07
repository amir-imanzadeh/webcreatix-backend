# WebCreatix Backend

The shared backend infrastructure for WebCreatix projects.

## Overview

WebCreatix Backend provides common backend services that can be used by multiple projects within the WebCreatix ecosystem.

The backend is designed to centralize functionality such as:

* User management
* Authentication
* Authorization
* Database access
* Validation
* Security
* Shared API services

## Architecture

```text
Softwins ─────────────┐
                      │
Coreactor ────────────┼─── WebCreatix Backend
                      │
Future Projects ──────┘
                             │
                             ▼
                         PostgreSQL
```

## Project Structure

```text
backend/
├── src
    └── database
        ├── commands.json
        └── database-manager.js
├── index.js
├── .env.example
├── package-lock.json
└── package.json
```

## Technology

* Node.js
* Express
* JavaScript
* PostgreSQL
* Docker

## Development

Create a local `.env` file based on `.env.example`.

Never commit production credentials, passwords, API keys, or other secrets.

## Status

Active development.

## Part of WebCreatix

This repository provides shared backend infrastructure for WebCreatix projects.

---

# PostgreSQL Practice

A collection of PostgreSQL exercises and reference examples created during the development and learning process.

## Contents

* Database creation
* Table creation
* CRUD operations
* Users
* Relationships
* Joins
* Aggregations
* Transactions
* Indexes
* Views
* Other PostgreSQL concepts

## Purpose

This repository is primarily educational. It is separate from the production database layer used by WebCreatix applications.

## Relationship with WebCreatix

The knowledge and techniques developed in this repository are applied to projects such as `webcreatix-backend`, Softwins, and Coreactor.

It is not a runtime dependency of those projects.

## Status

Learning / Reference Repository.
