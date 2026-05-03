# Smart Medication Adherence System

A full-stack web application to help users track and manage medication schedules.

---

## 🚀 Getting Started

### Prerequisites
- Python 3.x
- Node.js & npm
- Git

---

## 📦 Clone the Repository

```bash
git clone https://github.com/aitasam098/-Smart-Medication-Adherence-System.git
cd Smart-Medication-Adherence-System
```

---

## 🔧 Backend Setup (Django)

```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs at: `http://127.0.0.1:8000`

---

## 💻 Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🌐 Environment Variables

Create a `.env` file in the `frontend/` folder:
```
VITE_API_URL=http://127.0.0.1:8000
```