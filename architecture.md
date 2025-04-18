# 📁 Project Directory Structure

This document outlines the structure of the project to help maintain clarity and consistency throughout development.

---

## **src/**  
The main source directory for the application.

### └── **core/**  
Contains core engineering design patterns and service logic. This is where key business logic and reusable services reside.

### └── **interfaces/**  
Handles the application’s interface layer. This includes:
- **Routes** – Define the API endpoints.
- **Controllers** – Manage the request-response cycle.
- **Middleware** – Handle pre-processing or validation before hitting controllers.

### └── **db/**  
Responsible for all database-related logic:
- **Models** – Define the data schema and ORM setup.
- **Repositories** – Encapsulate all data access logic.
- Any other database utilities or configuration.

---

## **utils/**  
A collection of helper and utility functions that support various parts of the application. These functions are designed to be reusable and stateless.

---
