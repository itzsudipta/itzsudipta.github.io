# My Portfolio

Full-stack portfolio website with React frontend and FastAPI backend.

## Setup

**Frontend:**
```bash
cd frontend
npm install
npm start
```

**Backend:**
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn server:app --reload
```

## Tech Stack

- Frontend: React 19, Tailwind CSS, Radix UI, Framer Motion
- Backend: FastAPI, MongoDB, JWT Auth
- Storage: AWS S3 (boto3)
