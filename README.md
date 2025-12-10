<div align="center">
  
# 🚀 Sudipta Sarkar - Portfolio

[![Live Demo](https://img.shields.io/badge/demo-online-success.svg)](https://sudipta.dev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688.svg)](https://fastapi.tiangolo.com/)

**Full-stack developer portfolio showcasing modern web technologies, clean design, and responsive user experience.**

[View Live Demo](https://sudipta.dev) • [Report Bug](https://github.com/itzsudipta/issues) • [Request Feature](https://github.com/itzsudipta/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

---

## 🎯 About

Modern, responsive portfolio website built with React and FastAPI. Features a clean, professional design with dark/light theme support, smooth animations, and comprehensive SEO optimization.

**Key Highlights:**
- ⚡ Lightning-fast performance with React 19
- 🎨 Beautiful UI with Tailwind CSS and Framer Motion
- 📱 Fully responsive across all devices
- 🌓 Dark/Light theme toggle
- 🔍 SEO optimized with meta tags and structured data
- 📧 Working contact form with Web3Forms
- ♿ Accessible and user-friendly

---

## ✨ Features

- **Hero Section** - Eye-catching landing with animated profile picture and gradient effects
- **About Section** - Professional bio with skills visualization
- **Projects Showcase** - Grid layout displaying featured projects
- **Blog Page** - Dedicated blog section with modern design
- **Contact Form** - Functional contact form integrated with Web3Forms API
- **Theme Switcher** - Seamless dark/light mode transition
- **Smooth Animations** - Framer Motion powered transitions
- **SEO Ready** - Complete meta tags, sitemap, robots.txt
- **PWA Support** - Progressive Web App capabilities
- **Responsive Design** - Mobile-first approach

---

## 🛠️ Tech Stack

### Frontend

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | React | 19.0.0 | UI library for building user interfaces |
| **Styling** | Tailwind CSS | 3.4.18 | Utility-first CSS framework |
| **Animations** | Framer Motion | 12.23.25 | Animation and gestures library |
| **UI Components** | Radix UI | Latest | Accessible component primitives |
| **Icons** | Lucide React | 0.507.0 | Beautiful icon library |
| **Routing** | React Router DOM | 7.1.1 | Client-side routing |
| **Email Service** | Web3Forms | - | Contact form backend |
| **Build Tool** | Create React App | 5.0.1 | Development environment |

### Backend (Optional)

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | FastAPI | 0.110.1 | Modern Python web framework |
| **Server** | Uvicorn | 0.25.0 | ASGI server |
| **Database** | MongoDB | 4.5.0 | NoSQL database with Motor async driver |
| **Authentication** | PyJWT | 2.10.1 | JSON Web Token implementation |
| **Password Hashing** | Bcrypt | 4.1.3 | Secure password hashing |
| **Cloud Storage** | Boto3 | 1.34.129+ | AWS S3 integration |
| **Validation** | Pydantic | 2.6.4+ | Data validation |

### DevOps & Tools

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Version Control** | Git | Source code management |
| **Package Manager** | npm / pip | Dependency management |
| **Code Quality** | Black, Flake8, MyPy | Python linting and formatting |
| **Testing** | Pytest | Python testing framework |
| **Deployment** | Vercel | Frontend hosting |
| **CI/CD** | Bitbucket Pipelines | Automated deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python 3.14+ (if using backend)
- npm or yarn
- Git

### Installation

#### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/itzsudipta/mywebportfolio.git
cd mywebportfolio

# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your API keys to .env
# REACT_APP_WEB3FORMS_ACCESS_KEY=your_key_here

# Start development server
npm start
```

The app will open at `http://localhost:3000`

#### Backend Setup (Optional)

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv myportfolio

# Activate virtual environment
# Windows
myportfolio\Scripts\activate
# macOS/Linux
source myportfolio/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file and add MongoDB connection
echo "MONGO_URL=your_mongodb_url" > .env
echo "DB_NAME=portfolio" >> .env
echo "CORS_ORIGINS=http://localhost:3000" >> .env

# Start server
uvicorn server:app --reload
```

The API will run at `http://localhost:8000`

---

## 📁 Project Structure

```
mywebportfolio/
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── images/          # Profile pictures, project images
│   │   │   ├── documents/       # Resume PDF
│   │   │   └── data/            # JSON data files
│   │   ├── index.html           # HTML template with SEO
│   │   ├── manifest.json        # PWA manifest
│   │   ├── robots.txt           # Search engine crawling rules
│   │   └── sitemap.xml          # Site structure for SEO
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/          # Navbar, Footer
│   │   │   ├── sections/        # Hero, About, Projects, Blog, Contact
│   │   │   └── ui/              # Reusable UI components
│   │   ├── context/             # Theme context
│   │   ├── data/                # Mock data
│   │   ├── hooks/               # Custom hooks
│   │   ├── lib/                 # Utilities
│   │   ├── pages/               # Route pages
│   │   ├── App.js               # Main app component
│   │   └── index.js             # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── myportfolio/             # Virtual environment
│   ├── server.py                # FastAPI application
│   ├── requirements.txt         # Python dependencies
│   └── vercel.json              # Vercel deployment config
├── bitbucket-pipelines.yml      # CI/CD configuration
└── README.md
```

---

## 🌐 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel --prod
```

### Environment Variables (Vercel)

Add these in your Vercel project settings:

```
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

### Backend (Optional)

Deploy FastAPI backend on:
- Railway
- Render
- Heroku
- AWS EC2

---

## 📧 Contact

**Sudipta Sarkar**
- Email: [info.sudipta.nit@gmail.com](mailto:info.sudipta.nit@gmail.com)
- GitHub: [@itzsudipta](https://github.com/itzsudipta)
- LinkedIn: [infosudipta](https://www.linkedin.com/in/infosudipta/)
- Twitter: [@TheSudiptaVerse](https://x.com/TheSudiptaVerse)
- Website: [sudipta.dev](https://sudipta.dev)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Form handling by [Web3Forms](https://web3forms.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Sudipta Sarkar](https://sudipta.dev)

</div>
