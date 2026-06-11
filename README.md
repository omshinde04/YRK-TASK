# YRK Full Stack Task

Full stack dynamic website built using Next.js, Node.js, Express.js and PostgreSQL.

## Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- PostgreSQL
- Google OAuth Authentication

### Tools
- Docker
- Git / GitHub


## Features

- Dynamic Home Page Content
- User Registration
- Google OAuth Login
- Contact Form Management
- Admin Controlled Content


## Database Design

PostgreSQL database contains:

### users
Stores registered users and authentication data.

### homepage
Stores dynamic homepage content controlled by admin.

### contacts
Stores contact form submissions.

Relationships and scalability can be extended using user roles and admin permissions.


## Project Structure


YRK-TASK

├── frontend
│ ├── app
│ ├── components
│ └── lib

├── backend
│ ├── controllers
│ ├── routes
│ ├── services
│ └── server.js

└── database.sql




## Run Project

Backend

npm install

npm run dev


Frontend

npm install

npm run dev