# 🚀 AI Job Application Assistant

An AI-powered SaaS web application that helps users generate highly personalized recruiter cold emails instantly using their resume and target job role.

Built with **React**, **FastAPI**, **Groq LLM**, and **EmailJS** for seamless AI-powered job outreach automation.

---

## ✨ Features

* 📄 Upload resume and extract candidate information
* 🤖 Generate AI-powered personalized cold emails using Groq LLM
* 💌 Send emails directly to recruiters using EmailJS
* ⚡ Fast API backend with optimized response handling
* 🎨 Modern SaaS-inspired responsive UI
* 🧠 Tailored email generation based on job position
* 📱 Fully responsive across desktop and mobile

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS3
* Axios

### Backend

* FastAPI
* Python

### AI

* Groq API (LLM-powered email generation)

### Email Service

* EmailJS

---

## 📸 Preview

<img width="719" height="443" alt="image" src="https://github.com/user-attachments/assets/ca54fa6a-7bf7-43d3-a234-4952e3177b1d" />


---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/anubhootipandey/ai-job-application-assistant.git
cd ai-job-application-assistant
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🔑 Environment Variables

Create a `.env` file inside backend:

```env
GROQ_API_KEY=your_api_key
```

Create a `.env` file inside frontend:

```env
VITE_BASE_APP_URL=""
```

---

## 🧠 How It Works

1. User uploads resume
2. Backend extracts resume text
3. Resume + job role sent to Groq LLM
4. AI generates personalized recruiter email
5. User edits and sends email directly

---

## 🎯 Future Improvements

* ATS Resume Analyzer
* Multi-email automation
* LinkedIn recruiter finder
* Email tracking & analytics
* Authentication dashboard
* Job scraping integration

---

## 🌟 Why This Project Stands Out

Unlike generic email generators, this platform dynamically tailors recruiter outreach emails using resume context and target job roles, creating highly personalized applications with minimal effort.

---
