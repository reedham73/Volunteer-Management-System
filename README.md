# Volunteer Management System

A simple full stack web application for managing volunteers at college events.

## Description

The system lets event organizers register volunteers, track their availability,
and view a quick dashboard summary. Built as an academic Java full stack project.

## Features

- Dashboard with total / available / unavailable volunteer counts
- Add, view, edit, and delete volunteers
- Search volunteers by name
- Filter volunteers by availability

## Technology Stack

**Frontend:** React.js, Vite, JavaScript, HTML5, CSS3
**Backend:** Java, Spring Boot, Spring Web (REST API), Spring Data MongoDB
**Database:** MongoDB
**Tools:** Maven, Git, GitHub

## Requirements

- Java 17+
- Node.js 18+
- Maven 3.8+
- MongoDB (local or Atlas)

## MongoDB Setup

1. Install MongoDB Community Server or use MongoDB Atlas.
2. Start the MongoDB service (default port `27017`).
3. The app will auto-create the `volunteer_management_db` database on first run.
4. Update the connection string in `backend/src/main/resources/application.properties` if needed.

## How to Run the Backend

```bash
cd backend
mvn spring-boot:run
```
Backend runs at `http://localhost:8080`.

## How to Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`.

## API Endpoints

| Method | Endpoint               | Description             |
|--------|-------------------------|--------------------------|
| GET    | /api/volunteers          | Get all volunteers      |
| GET    | /api/volunteers/{id}     | Get volunteer by ID     |
| POST   | /api/volunteers          | Add a new volunteer     |
| PUT    | /api/volunteers/{id}     | Update a volunteer      |
| DELETE | /api/volunteers/{id}     | Delete a volunteer      |
| GET    | /api/dashboard            | Get dashboard stats     |

Query params: `?search=name` and `?availability=Available|Unavailable` on `GET /api/volunteers`.

## Repository

[ADD YOUR GITHUB URL]

## Future Scope

- Authentication for admin/organizer roles
- Email notifications to volunteers for event assignments
- Export volunteer list to CSV/PDF
- Event-wise volunteer assignment tracking
