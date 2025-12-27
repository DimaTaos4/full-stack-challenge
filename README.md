# fara.ai Backend Challenge

Backend service built with Node.js and Express.
Provides authentication, role-based access (admin / user),
static retailer management, and revenue analysis per retailer.

---

## Tech Stack

- Node.js
- Express
- PostgreSQL (hosted on Neon cloud)
- Sequelize ORM
- JWT Authentication
- bcrypt
- dotenv

---

## Features

- User registration and login
- JWT-based authentication
- Role-based authorization (admin / user)
- Static retailer configuration
- Admin retailer selection
- Revenue analysis per retailer
- Global error handling middleware

---

## Architecture & Flow

- Users authenticate via JWT tokens
- Regular users automatically receive analysis for their assigned retailer
- Admin users must explicitly select a retailer before requesting analysis
- Retailers are static business entities and stored as configuration
- Analysis data is fetched dynamically based on retailer selection

---

## API Endpoints

### Auth

- **POST** `/api/users/register`  
  Register a new user

- **POST** `/api/users/login`  
  Login and receive JWT token

---

### Analysis

- **GET** `/api/analysis`  
  Returns analysis for the user's retailer (regular user)

- **GET** `/api/analysis?retailerKey=zalando`
- **GET** `/api/analysis?retailerKey=breuninger`
  Returns analysis for selected retailer (admin only)

---

### Retailers (Admin only)

- **GET** `/api/retailers`  
  Returns list of available retailers

---

## Test Users / Demo Accounts

You can use the following credentials to test API endpoints (e.g., via Postman):

| Role       | Email           | Password  |
| ---------- | --------------- | --------- |
| Admin      | admin@test.com  | admin     |
| Retailer A | test-a@test.com | retailera |
| Retailer B | test-b@test.com | retailerb |

**Notes:**

- Admin users must select a retailer to fetch analysis (`/api/analysis?retailerKey=XYZ`)
- Regular users can fetch analysis directly for their assigned retailer

---

## Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Variables

The project requires the following environment variables.
They are provided in the .env file included in the project archive.

### 3. Run the server

- For development:

```bash
npm run dev
```

- For production:

```bash
npm start
```
