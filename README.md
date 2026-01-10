# goJourney-Website-Project
#Project Name => goJourney (Full Stack Travel Booking Website):-

goJourney is a full-stack travel booking web application built using React (Frontend), Node.js & Express (Backend), and MongoDB Atlas (Database).
The project implements user authentication (Signup/Login) with JWT, role-based users (User/Admin), and a secure backend API structure.

This project demonstrates how a frontend React application communicates with a backend REST API and stores data in a cloud database.


#Features:-

. User Authentication (Signup & Login using JWT)

. Protected Routes (Booking allowed only after login)

. MongoDB Atlas Cloud Database.

. RESTful API Architecture.

. CORS Enabled for Frontend–Backend Communication.

. API Testing using Postman.

. MVC Folder Structure (Models, Controllers, Routes)

Note:- Booking & payment data are currently handled on the frontend only. Authentication data is fully stored in MongoDB.

* Tech Stack:-
#FrontEnd:-

React.js
HTML, CSS, JavaScript
Fetch API

#Backend:-

Node.js,
Express.js,
JWT (Authentication),
bcryptjs (Password hashing),
dotenv,
CORS,
Database,
MongoDB Atlas (Cloud Database),
Mongoose

#Tools:-

Postman,
Git & GitHub,
VS Code,
Netlify,
Render

#API Endpoints:-

POST   /api/auth/register   → User Signup
POST   /api/auth/login      → User Login


#Database Structure:-
Database: goJourneyUsers
Collection: users

#user schema:-
{
  name: String,
  email: String,
  password: String,
  role: "user",
  createdAt: Date
}

#Developer Info:-
Developer: Vishal Saini
Role: Full Stack Developer(MERN)
GitHub project link : https://github.com/VishalSaini7272/goJourney-Website-Project/tree/main
Deploy link (Frontend) : https://gojourneywebsite.netlify.app
Deploy link (Backend) : https://gojourney-website-project-backend.onrender.com


Final Deploy link : https://gojourneywebsite.netlify.app
