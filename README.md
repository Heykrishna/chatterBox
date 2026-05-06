# ChatterBox

ChatterBox is a full-stack social media web application built using the MERN stack.
It supports authentication, posts, stories, notifications, real-time messaging, and user interactions with a modern responsive UI.

---

## Features

* User Authentication (JWT)
* Real-time Chat using Socket.IO
* Create & View Posts
* Stories Feature
* Notifications System
* Suggested Users
* Follow / Unfollow Users
* Responsive UI
* MongoDB Database Integration
* Secure Backend APIs

---

## Tech Stack

### Frontend

* React.js
* Vite
* Redux Toolkit
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.IO

---

## Project Structure

```bash
Chatter-Box-main/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Heykrishna/chatterBox-.git
cd chatterBox-
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000
```

Start backend server:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* Database hosted on MongoDB Atlas

---

## Screenshots

Add your project screenshots here.

---

## Author

Krishna Raj

GitHub: https://github.com/Heykrishna
