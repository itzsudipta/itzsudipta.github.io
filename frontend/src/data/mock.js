// Mock data for Sudipta Sarkar's Developer Portfolio

export const personalInfo = {
  name: "Sudipta Sarkar",
  title: "Machine Learning Enthusiast & Web Developer",
  institution: "Narula Institute of Technology, Kolkata",
  bio: "Passionate about the math behind machine learning and bringing models to life on the web. When I'm not decoding equations that make ML work like magic, I'm diving deep into backend development. Always building, always exploring.",
  shortBio: "ML enthusiast who loves turning algorithms into real-world applications.",
  email: "info.sudipta.nit@gmail.com",
  location: "Kolkata, India"
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/itzsudipta", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/infosudipta/", icon: "Linkedin" },
  { name: "Twitter", url: "https://x.com/TheSudiptaVerse", icon: "Twitter" },
  { name: "Email", url: "mailto:info.sudipta.nit@gmail.com", icon: "Mail" }
];

export const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 }
  ],
  backend: [
    { name: "FastAPI", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "SQLAlchemy", level: 75 }
  ],
  ml: [
    { name: "Python", level: 90 },
    { name: "NumPy", level: 85 },
    { name: "Pandas", level: 85 },
    { name: "Scikit-learn", level: 80 },
    { name: "Matplotlib", level: 75 },
    { name: "Seaborn", level: 75 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Hugging Face", level: 70 },
    { name: "Vercel", level: 80 },
    { name: "Colab", level: 85 },
    { name: "Figma", level: 70 },
    { name: "Canva", level: 75 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "PixelCraft",
    description: "A powerful, web-based image editor allowing real-time manipulation and filters. Features include crop, resize, filters, and layer management.",
    tech: ["HTML", "CSS", "JavaScript", "Flask"],
    category: "Full-Stack",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
    image: "pixelcraft"
  },
  {
    id: 2,
    title: "GitRAG",
    description: "Smart Git assistant powered by RAG (Retrieval-Augmented Generation). Interact with your codebase using natural language queries and get intelligent responses.",
    tech: ["Python", "Gemma 2", "Vector DB"],
    category: "AI/ML",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
    image: "gitrag"
  },
  {
    id: 3,
    title: "ScholarlyDraw",
    description: "AI-powered tool transforming natural language descriptions into professional LaTeX/TikZ diagrams. Perfect for academic papers and technical documentation.",
    tech: ["IBM Granite", "Python"],
    category: "AI/ML",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
    image: "scholarlydraw"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Understanding Neural Networks: A Mathematical Deep Dive",
    excerpt: "Explore the mathematical foundations that power neural networks, from gradient descent to backpropagation, explained with intuition and rigor.",
    date: "2025-07-10",
    readTime: "12 min read",
    tags: ["Machine Learning", "Neural Networks", "Mathematics"],
    featured: true,
    slug: "understanding-neural-networks"
  },
  {
    id: 2,
    title: "Building RAG Applications: From Theory to Production",
    excerpt: "A comprehensive guide to building Retrieval-Augmented Generation systems that actually work in production environments.",
    date: "2025-07-05",
    readTime: "15 min read",
    tags: ["RAG", "LLMs", "Vector Databases"],
    featured: true,
    slug: "building-rag-applications"
  },
  {
    id: 3,
    title: "The Art of Feature Engineering in ML",
    excerpt: "Why feature engineering remains crucial even in the age of deep learning, and practical techniques to improve your models.",
    date: "2025-06-28",
    readTime: "10 min read",
    tags: ["Machine Learning", "Data Science", "Feature Engineering"],
    featured: false,
    slug: "feature-engineering-ml"
  },
  {
    id: 4,
    title: "FastAPI Best Practices for ML Model Deployment",
    excerpt: "Learn how to deploy machine learning models with FastAPI, including async endpoints, model caching, and production optimizations.",
    date: "2025-06-20",
    readTime: "8 min read",
    tags: ["FastAPI", "Machine Learning", "Deployment"],
    featured: false,
    slug: "fastapi-ml-deployment"
  }
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" }
];
