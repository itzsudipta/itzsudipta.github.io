const blogPosts = [
    {
        id: 1,
        title: "I Pushed to MAIN… and Survived | My Open-Source Journey",
        excerpt: "How I messed up my first PR, learned Git the hard way, and finally got my first merge in 2025 — a beginner-friendly, fun, motivational open-source journey.",
        content: `
            <p class="mb-4">Are you planning to start contributing to open source? If yes, trust me — you're already ahead of where I was when I started! 😅</p>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">How It All Began</h3>
        <p class="mb-4">Back in <span class="font-semibold text-sky-500">2023</span>, when I applied to <strong>GSSoC</strong> for the first time, I had zero idea about issues, branches, or PRs. My GitHub knowledge was literally: <em class="text-slate-400">git add . and hope for the best.</em></p>

        <p class="mb-4">I had just completed my diploma and was about to join <strong>Narula Institute of Technology</strong> for B.Tech — and in excitement, I directly made changes and raised a PR without even creating an issue.</p>

        <p class="mb-4 font-semibold text-rose-500">And the funniest part? I did it all on the <strong>main branch</strong> of the project owner's repo. Yes… THE MAIN branch. 💀</p>

        <p class="mb-4">That legendary mistake forced me to actually learn Git and GitHub properly — branching, PRs, contribution guidelines, everything.</p>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Learning Git & GitHub Properly</h3>
        <p class="mb-4">After that chaos, I spent time understanding how open-source really works. I started maintaining my projects with Git, explored new tech, and tried contributing again.</p>

        <p class="mb-4">A year later, I reapplied. My PR wasn’t accepted, but instead of giving up, I took it as a sign:</p>
        <blockquote class="border-l-4 border-sky-500 pl-4 italic text-slate-600 dark:text-slate-300 mb-4">
          “You're close. Just keep going.”
        </blockquote>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">2025 — My First Merged PR 🚀</h3>
        <p class="mb-4">In <strong>APERTRE 2.0 (2025)</strong>, my first PR finally got merged! That green "Merged" badge was pure happiness ✨</p>

        <p class="mb-4">A huge thanks to my close friend and mentor <strong>Arpan Chowdhury</strong>, who guided me with a better approach and helped me understand deeper contribution workflows.</p>

        <p class="mb-4">After that, I contributed to <strong>GirlScript Summer of Code</strong>, <strong>Hacktoberfest</strong>, and many other open-source events.</p>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">What I Learned</h3>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li>Open source becomes easy once you understand the workflow.</li>
            <li>Don’t contribute anything random — make meaningful improvements.</li>
            <li>Learn Git & GitHub properly before you jump in.</li>
            <li>Small, consistent efforts lead to big confidence.</li>
        </ul>

        <p class="mb-4">So don’t worry if you’re starting fresh. Explore technology, practice GitHub basics, and slowly begin contributing. That's all you need.</p>

        <p class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-slate-800 dark:text-slate-200 mt-6">
            <strong class="text-emerald-500">TL;DR:</strong> Open source looks scary at first, but once you understand the system, it becomes one of the most fun ways to learn, grow, and build confidence as a developer 💚.
        </p>
        `,
        date: "Nov 25, 2025",
        readTime: "5 min read",
        category: "Open Source",
        image: "https://images.unsplash.com/photo-1709547228697-fa1f424a3f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Open Source", "Git", "github"]
    },
    // Copy the block above to add a new vlog
    {
        id: 2,
        title: "Linear Regression Made Stupidly Simple",
        excerpt: "If linear regression feels like chaos and y = mx + b looks like alien code, this storytelling guide will fix your brain.",
        content: `
    <h1>📉 Linear Regression for Dumb Beginners (Like Me 😂)</h1>
    <p><em>If y = mx + b ever gave you trauma… welcome. You're in the right place.</em></p>

    <hr/>

    <h2>😵 Why I Wrote This Blog</h2>
    <p>Are you a beginner? Are you struggling with Linear Regression? Do you feel like your brain becomes <strong>instant noodles</strong> when you see “slope”? Same.</p>

    <p>For <strong>3 days</strong>, I fought a deadly battle trying to understand how the slope works. People call it “simple”. My brain said “nope”.</p>

    <p>But once everything clicked… I felt like a genius for 2 minutes. Then my life went downhill again. Anyway, let's not talk about that. 😂</p>

    <hr/>

    <h2>🎒 The Most Dumb & Easy School Scenario (My Favourite Part)</h2>
    <p>Imagine a classroom. Five students. One question:</p>
    <blockquote><strong>“Does studying more give better marks?”</strong></blockquote>

    <h3>👥 The Students’ Data</h3>
    <table>
      <tr><th>Student</th><th>Study Hours (X)</th><th>Marks (Y)</th></tr>
      <tr><td>A</td><td>6</td><td>92</td></tr>
      <tr><td>B</td><td>6</td><td>92</td></tr>
      <tr><td>C</td><td>6</td><td>92</td></tr>
      <tr><td>D</td><td>6</td><td>92</td></tr>
      <tr><td><strong>YOU</strong></td><td><strong>10</strong></td><td><strong>95</strong></td></tr>
    </table>

    <p><strong>X =</strong> [6, 6, 6, 6, 10]<br/>
    <strong>Y =</strong> [92, 92, 92, 92, 95]</p>

    <hr/>

    <h2>😡 The Great Classroom Argument</h2>
    <p><strong>Students A–D:</strong> “We study 6 hours and get 92 marks.”<br/>
    <strong>YOU:</strong> “I study 10 hours and get 95. Hello? More study = more marks!”</p>

    <p>The teacher suddenly becomes a mathematician and steps in.</p>

    <hr/>

    <h2>👩‍🏫 Teacher’s 3-Step Fair Judgment (The Magic of Linear Regression)</h2>

    <h3>🟦 Step 1 — Find the Neutral Middle (Averages)</h3>
    <p>The teacher finds the <strong>average study hours</strong> and <strong>average marks</strong> to stand in a fair, neutral position.</p>

    <pre><code>X_mean = 6.8  
Y_mean = 92.6</code></pre>

    <p>This is the “middle point” of the class.</p>

    <hr/>

    <h3>🟨 Step 2 — Check How Everyone Differs From the Middle</h3>
    <p>Teacher checks:</p>
    <ul>
      <li>Who studies more than average?</li>
      <li>Who studies less than average?</li>
      <li>Whose marks are above/below average?</li>
    </ul>

    <p>This gives two values:</p>
    <ul>
      <li><strong>Numerator:</strong> How much study & marks move together</li>
      <li><strong>Denominator:</strong> How much study hours vary</li>
    </ul>

    <hr/>

    <h3>🟥 Step 3 — Do Study Hours & Marks Move Together?</h3>

    <table>
      <tr><th>Study</th><th>Marks</th><th>Result</th></tr>
      <tr><td>↑</td><td>↑</td><td>✔ Agree</td></tr>
      <tr><td>↓</td><td>↓</td><td>✔ Agree</td></tr>
      <tr><td>↑</td><td>↓</td><td>❌ Opposite</td></tr>
      <tr><td>↓</td><td>↑</td><td>❌ Opposite</td></tr>
    </table>

    <p>This comparison helps calculate slope.</p>

    <hr/>

    <h2>🎯 Final Slope Calculation</h2>

    <pre><code>
Numerator   = 9.6
Denominator = 12.8
Slope m     = 9.6 / 12.8 = 0.75
    </code></pre>

    <p><strong>Meaning:</strong> Every +1 hour of study → marks increase by <strong>0.75</strong></p>

    <hr/>

    <h2>🟩 The Intercept (b)</h2>

    <pre><code>
b = Y_mean − m × X_mean
  = 87.5
    </code></pre>

    <p>So the final prediction line becomes:</p>

    <pre><code>y = 0.75x + 87.5</code></pre>

    <hr/>

    <h2>🧪 Predictions (They Are Weirdly Accurate)</h2>
    <p>For x = 6 → 91.9 (actual 92)</p>
    <p>For x = 10 → 94.9 (actual 95)</p>

    <hr/>

    <h2>🧠 Residuals (The Tiny Mistakes)</h2>
    <p>Residual = actual − predicted = <strong>0.1</strong> for every student.</p>

    <hr/>

    <h2>🎯 SSE (Sum of Squared Errors)</h2>

    <pre><code>
0.1² = 0.01  
SSE = 0.01 × 5 = 0.05  (very small)
    </code></pre>

    <p>This means: <strong>Your line fits almost perfectly!</strong></p>

    <hr/>

    <h2>💻 Manual Linear Regression Code</h2>
    <pre><code>
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
    </code></pre>

    <hr/>

    <h2>🤖 Linear Regression Using scikit-learn</h2>

    <pre><code>
import numpy as np
from sklearn.linear_model import LinearRegression

x = np.array([6,6,6,6,10]).reshape(-1,1)
y = np.array([92,92,92,92,95])

model = LinearRegression()
model.fit(x,y)

y_pred = model.predict(x)
    </code></pre>

    <hr/>

    <h2>💬 Final Thoughts</h2>
    <p>I wrote this blog for my <strong>future self</strong> because I forget things like a goldfish. 🐠</p>
    <p>I forget things faster than RAM without a UPS. ⚡💻</p>
    <p>If this blog helped you too, feel free to reach out!</p>

  `,
        date: "Nov 30, 2025",
        readTime: "10 min read",
        category: "Machine Learning",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000",
        tags: ["Linear Regression", "Machine Learning", "Beginner Friendly", "Data Science"]
    }



    
];