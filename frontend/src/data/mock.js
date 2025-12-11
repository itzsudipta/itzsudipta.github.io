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
    { name: "Colab", level: 85 }
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
    title: "Linear Regression Made Stupidly Simple",
    excerpt: "If y = mx + b ever gave you trauma… welcome. You're in the right place. A beginner-friendly guide to understanding linear regression with real classroom examples.",
    date: "2025-11-30",
    readTime: "10 min read",
    tags: ["Linear Regression", "Machine Learning", "Beginner Friendly", "Data Science"],
    featured: true,
    slug: "linear-regression-made-stupidly-simple",
    content: `# 📉 Linear Regression for Dumb Beginners (Like Me 😂)

*If y = mx + b ever gave you trauma… welcome. You're in the right place.*

---

## 😵 Why I Wrote This Blog

Are you a beginner? Are you struggling with Linear Regression? Do you feel like your brain becomes **instant noodles** when you see "slope"? Same.

For **3 days**, I fought a deadly battle trying to understand how the slope works. People call it "simple". My brain said "nope".

But once everything clicked… I felt like a genius for 2 minutes. Then my life went downhill again. Anyway, let's not talk about that. 😂

---

## 🎒 The Most Dumb & Easy School Scenario (My Favourite Part)

Imagine a classroom. Five students. One question:

> **"Does studying more give better marks?"**

### 👥 The Students' Data

| Student | Study Hours (X) | Marks (Y) |
|---------|----------------|-----------|
| A       | 6              | 92        |
| B       | 6              | 92        |
| C       | 6              | 92        |
| D       | 6              | 92        |
| **YOU** | **10**         | **95**    |

**X =** [6, 6, 6, 6, 10]  
**Y =** [92, 92, 92, 92, 95]

---

## 😡 The Great Classroom Argument

**Students A–D:** "We study 6 hours and get 92 marks."  
**YOU:** "I study 10 hours and get 95. Hello? More study = more marks!"

The teacher suddenly becomes a mathematician and steps in.

---

## 👩‍🏫 Teacher's 3-Step Fair Judgment (The Magic of Linear Regression)

### 🟦 Step 1 — Find the Neutral Middle (Averages)

The teacher finds the **average study hours** and **average marks** to stand in a fair, neutral position.

\`\`\`
X_mean = 6.8  
Y_mean = 92.6
\`\`\`

This is the "middle point" of the class.

---

### 🟨 Step 2 — Check How Everyone Differs From the Middle

Teacher checks:
- Who studies more than average?
- Who studies less than average?
- Whose marks are above/below average?

This gives two values:
- **Numerator:** How much study & marks move together
- **Denominator:** How much study hours vary

---

### 🟥 Step 3 — Do Study Hours & Marks Move Together?

| Study | Marks | Result      |
|-------|-------|-------------|
| ↑     | ↑     | ✔ Agree     |
| ↓     | ↓     | ✔ Agree     |
| ↑     | ↓     | ❌ Opposite |
| ↓     | ↑     | ❌ Opposite |

This comparison helps calculate slope.

---

## 🎯 Final Slope Calculation

\`\`\`
Numerator   = 9.6
Denominator = 12.8
Slope m     = 9.6 / 12.8 = 0.75
\`\`\`

**Meaning:** Every +1 hour of study → marks increase by **0.75**

---

## 🟩 The Intercept (b)

\`\`\`
b = Y_mean − m × X_mean
  = 87.5
\`\`\`

So the final prediction line becomes:

\`\`\`
y = 0.75x + 87.5
\`\`\`

---

## 🧪 Predictions (They Are Weirdly Accurate)

For x = 6 → 91.9 (actual 92)  
For x = 10 → 94.9 (actual 95)

---

## 🧠 Residuals (The Tiny Mistakes)

Residual = actual − predicted = **0.1** for every student.

---

## 🎯 SSE (Sum of Squared Errors)

\`\`\`
0.1² = 0.01  
SSE = 0.01 × 5 = 0.05  (very small)
\`\`\`

This means: **Your line fits almost perfectly!**

---

## 💻 Manual Linear Regression Code

\`\`\`python
import matplotlib.pyplot as plt
x = [6,6,6,6,10]
y = [92,92,92,92,95]

x_mean = sum(x)/len(x)
y_mean = sum(y)/len(y)

dnm = 0
nume = 0

for i in range(len(x)):
  dnm += (x[i]-x_mean)**2
  nume += (x[i]-x_mean)*(y[i]-y_mean)

slope = nume/dnm
intercept = y_mean - slope*x_mean

y_pred = [slope*i + intercept for i in x]

plt.scatter(x, y)
plt.plot(x, y_pred)
plt.show()
\`\`\`

---

## 🤖 Linear Regression Using scikit-learn

\`\`\`python
import numpy as np
from sklearn.linear_model import LinearRegression

x = np.array([6,6,6,6,10]).reshape(-1,1)
y = np.array([92,92,92,92,95])

model = LinearRegression()
model.fit(x,y)

y_pred = model.predict(x)
\`\`\`

---

## 💬 Final Thoughts

I wrote this blog for my **future self** because I forget things like a goldfish. 🐠

I forget things faster than RAM without a UPS. ⚡💻

If this blog helped you too, feel free to reach out!`
  },
  {
    id: 2,
    title: "I Pushed to MAIN… and Survived | My Open-Source Journey",
    excerpt: "Are you planning to start contributing to open source? My chaotic journey from pushing to main branch to becoming a confident open-source contributor.",
    date: "2025-11-25",
    readTime: "5 min read",
    tags: ["Open Source", "Git", "GitHub"],
    featured: true,
    slug: "i-pushed-to-main-and-survived",
    content: `# I Pushed to MAIN… and Survived

Are you planning to start contributing to open source? If yes, trust me — you're already ahead of where I was when I started! 😅

## How It All Began

Back in 2023, when I applied to GSSoC for the first time, I had zero idea about issues, branches, or PRs. My GitHub knowledge was literally: \`git add .\` and hope for the best.

I had just completed my diploma and was about to join **Narula Institute of Technology** for B.Tech — and in excitement, I directly made changes and raised a PR without even creating an issue.

And the funniest part? I did it all on the **main branch** of the project owner's repo. Yes… THE MAIN branch. 💀

That legendary mistake forced me to actually learn Git and GitHub properly — branching, PRs, contribution guidelines, everything.

## Learning Git & GitHub Properly

After that chaos, I spent time understanding how open-source really works. I started maintaining my projects with Git, explored new tech, and tried contributing again.

A year later, I reapplied. My PR wasn't accepted, but instead of giving up, I took it as a sign:

*"You're close. Just keep going."*

## 2025 — My First Merged PR 🚀

In **APERTRE 2.0** (2025), my first PR finally got merged! That green "Merged" badge was pure happiness ✨

A huge thanks to my close friend and mentor **Arpan Chowdhury**, who guided me with a better approach and helped me understand deeper contribution workflows.

After that, I contributed to **GirlScript Summer of Code**, **Hacktoberfest**, and many other open-source events.

## What I Learned

- Open source becomes easy once you understand the workflow
- Don't contribute anything random — make meaningful improvements
- Learn Git & GitHub properly before you jump in
- Small, consistent efforts lead to big confidence

So don't worry if you're starting fresh. Explore technology, practice GitHub basics, and slowly begin contributing. That's all you need.

---

**TL;DR:** Open source looks scary at first, but once you understand the system, it becomes one of the most fun ways to learn, grow, and build confidence as a developer 💚.`
  }
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" }
];
