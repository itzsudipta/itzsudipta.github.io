```markdown
# Sudipta Sarkar - Portfolio

[![Live Demo](https://img.shields.io/badge/demo-online-success.svg)](https://sudipta.dev)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Modern, responsive portfolio website built with React and FastAPI, featuring a clean design with dark/light theme support and smooth animations.

**[View Live Demo](https://sudipta.dev)**

---

## Features

- ⚡ Lightning-fast performance with React 19
- 🎨 Beautiful UI with Tailwind CSS and Framer Motion animations
- 📱 Fully responsive design
- 🌓 Dark/Light theme toggle
- 📧 Working contact form with Web3Forms
- 🔍 SEO optimized

---

## Tech Stack

**Frontend**
- React 19.0.0
- Tailwind CSS 3.4.18
- Framer Motion 12.23.25
- React Router DOM 7.1.1
- Radix UI Components
- Lucide React Icons

**Backend** *(Optional)*
- FastAPI 0.110.1
- Uvicorn Server
- JWT Authentication

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Python 3.14+ *(optional, for backend)*

### Installation

**Frontend Setup**

```bash
# Clone the repository
git clone https://github.com/itzsudipta/mywebportfolio.git
cd mywebportfolio/frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your Web3Forms API key to .env
REACT_APP_WEB3FORMS_ACCESS_KEY=your_key_here

# Start development server
npm start
```

Visit `http://localhost:3000`

**Backend Setup** *(Optional)*

```bash
cd backend

# Create and activate virtual environment
python -m venv myportfolio
source myportfolio/bin/activate  # On Windows: myportfolio\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo "MONGO_URL=your_mongodb_url" > .env
echo "DB_NAME=portfolio" >> .env
echo "CORS_ORIGINS=http://localhost:3000" >> .env

# Start server
uvicorn server:app --reload
```

Visit `http://localhost:8000`

---

## Project Structure

```
mywebportfolio/
├── frontend/
│   ├── public/
│   │   ├── assets/          # Images, documents, data
│   │   ├── manifest.json    # PWA manifest
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── context/         # Theme context
│   │   ├── pages/           # Route pages
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── server.py            # FastAPI application
│   ├── requirements.txt
│   └── vercel.json
└── README.md
```

---

## Deployment

**Frontend (Vercel)**

```bash
npm i -g vercel
cd frontend
vercel --prod
```

Add `REACT_APP_WEB3FORMS_ACCESS_KEY` in Vercel environment variables.

**Backend Options**
- Railway
- Render
- Vercel
- AWS EC2

---

## Contact

**Sudipta Sarkar**

- 🌐 Website: [sudipta.dev](https://sudipta.dev)
- 📧 Email: [info.sudipta.nit@gmail.com](mailto:info.sudipta.nit@gmail.com)
- 💼 LinkedIn: [infosudipta](https://www.linkedin.com/in/infosudipta/)
- 🐙 GitHub: [@itzsudipta](https://github.com/itzsudipta)
- 𝕏 Twitter: [@TheSudiptaVerse](https://x.com/TheSudiptaVerse)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by Sudipta Sarkar**

⭐ Star this repo if you found it helpful!

</div>
```