/* ---------------------------------------------------------
          1. GLOBAL CONFIGURATION
          --------------------------------------------------------- */
const GITHUB_USERNAME = "itzsudipta"; // Your GitHub username

/* ---------------------------------------------------------
   2. INITIALIZE ANIMATIONS (AOS)
   --------------------------------------------------------- */
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

/* ---------------------------------------------------------
   3. GITHUB STATS FETCHING LOGIC
   --------------------------------------------------------- */
async function fetchGitHubStats() {
    try {
        // A. Fetch User Profile & Repositories (Parallel Request)
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API limit exceeded or user not found');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        // B. Animate Total Repositories
        animateValue("repo-count", 0, userData.public_repos, 1500);

        // C. Calculate Most Used Language
        const langCounts = {};
        let totalReposWithLang = 0;

        reposData.forEach(repo => {
            if (repo.language) {
                langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                totalReposWithLang++;
            }
        });

        if (totalReposWithLang > 0) {
            // Find language with highest occurrence
            const topLang = Object.keys(langCounts).reduce((a, b) => langCounts[a] > langCounts[b] ? a : b);
            const percentage = Math.round((langCounts[topLang] / totalReposWithLang) * 100);

            document.getElementById('top-lang-name').innerText = topLang;
            animateValue("lang-percent", 0, percentage, 1500, "%");
        }

        // D. Fetch Contributions (via Proxy API)
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);

        if (contribRes.ok) {
            const contribData = await contribRes.json();
            // Sum contributions for the last year
            const totalContributions = Object.values(contribData.total).reduce((a, b) => a + b, 0);
            animateValue("contribution-count", 0, totalContributions, 2000, "+");
        } else {
            // Fallback if proxy fails
            document.getElementById('contribution-count').innerText = "500+";
        }

    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        // UI Fallbacks in case of error
        document.getElementById('repo-count').innerText = "15+";
        document.getElementById('contribution-count').innerText = "500+";
        document.getElementById('lang-percent').innerText = "90%";
        document.getElementById('top-lang-name').innerText = "Code";
    }
}

// Helper: Number Animation Function
function animateValue(id, start, end, duration, suffix = "") {
    const obj = document.getElementById(id);
    if (!obj) return; // Safety check

    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/* ---------------------------------------------------------
   4. DARK MODE TOGGLE LOGIC
   --------------------------------------------------------- */
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check LocalStorage or System Preference on load
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// Toggle Click Event
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    });
}

/* ---------------------------------------------------------
   5. MOBILE MENU LOGIC
   --------------------------------------------------------- */
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    // Open/Close Menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

/* ---------------------------------------------------------
   6. STARTUP EVENTS
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", fetchGitHubStats);