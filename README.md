# 📱 Social Media App

A full-stack social media application built with **React, Node.js, Express, and MongoDB**.

The project provides core social networking functionality including user authentication, profiles, posts, comments, likes, following, and notifications.

---

## 🚀 Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Secure password handling
- Password reset functionality
- Protected routes

### 👤 User Profiles

- View user profiles
- Follow / unfollow users
- Manage profile information
- View user posts

### 📝 Posts

- Create posts
- Edit posts
- Delete posts
- View posts from users
- Like and unlike posts

### 💬 Comments

- Add comments to posts
- View comments
- Manage comments

### 🔔 Notifications

- Notifications for social interactions

---

## 🏗️ Architecture

The application is divided into separate frontend and backend applications.

```text
                    ┌─────────────────────┐
                    │    React Frontend   │
                    │                     │
                    │     UI / State      │
                    └──────────┬──────────┘
                               │
                         HTTP / REST API
                               │
                    ┌──────────▼──────────┐
                    │   Express Backend   │
                    │                     │
                    │ Authentication      │
                    │ Business Logic      │
                    │ API Endpoints       │
                    └──────────┬──────────┘
                               │
                            Mongoose
                               │
                    ┌──────────▼──────────┐
                    │      MongoDB        │
                    │                     │
                    │ Users               │
                    │ Posts               │
                    │ Comments            │
                    │ Relationships       │
                    └─────────────────────┘

```
## 🛠️ Tech Stack
### Frontend
- React
- JavaScript
- HTML
- CSS
### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication
### Database
- MongoDB
- Mongoose
### Development Tools
- Git
- Postman
## 🔑 Authentication Flow
The application uses JWT-based authentication.
```text
User
 │
 │ Login / Register
 ▼
React Frontend
 │
 │ API Request
 ▼
Express Backend
 │
 │ Validate credentials
 ▼
MongoDB
 │
 │ User verified
 ▼
JWT Token
 │
 ▼
Authenticated Requests
```
Protected API endpoints require a valid authentication token.

## 🧠 What I Learned
Building this project helped me understand how different parts of a full-stack application work together.
### Key areas I worked with:
- Designing REST APIs
- Connecting a React frontend with a backend
- JWT-based authentication
- MongoDB data modeling
- User relationships such as followers/following
- Protected API routes
- CRUD operations
- Managing frontend and backend responsibilities
- Handling interactions between multiple users
### 🔮 Future Improvements
Some areas that could be improved in future versions:
- Real-time notification architecture
- Image and media optimization
- Pagination and infinite scrolling
- Better API validation
- Automated unit and integration tests
- Rate limiting and additional security measures
- Improved deployment and monitoring

### ⚙️ Running Locally
1. Clone the repository
 ```text
git clone https://github.com/savinyu/SocialMedia-App.git
cd SocialMedia-App
```
3. Install dependencies
Install dependencies for both the frontend and backend.
```text
cd frontend
npm install
cd ../backend
npm install
```
4. Configure environment variables.\
Create the required .env files for the backend and configure the database connection and JWT settings.
5. Start the application
Start the backend:
```text
npm run dev
Then start the frontend:
npm start
```
