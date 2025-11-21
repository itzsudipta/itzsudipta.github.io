/* ---------------------------------------------------------
   1. GLOBAL CONFIGURATION
   --------------------------------------------------------- */
const GITHUB_USERNAME = "itzsudipta";

/* ---------------------------------------------------------
   2. ANIMATIONS & INITIALIZATION
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Fetch Data
    fetchGitHubStats();

    // Setup Contact Form
    setupContactForm();
});

/* ---------------------------------------------------------
   3. GITHUB STATS LOGIC
   --------------------------------------------------------- */
async function fetchGitHubStats() {
    try {
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API limit exceeded or user not found');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        animateValue("repo-count", 0, userData.public_repos, 1500);

        // Language Calculation
        const langCounts = {};
        let totalReposWithLang = 0;
        reposData.forEach(repo => {
            if (repo.language) {
                langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                totalReposWithLang++;
            }
        });

        if (totalReposWithLang > 0) {
            const topLang = Object.keys(langCounts).reduce((a, b) => langCounts[a] > langCounts[b] ? a : b);
            const percentage = Math.round((langCounts[topLang] / totalReposWithLang) * 100);
            const topLangEl = document.getElementById('top-lang-name');
            if (topLangEl) topLangEl.innerText = topLang;
            animateValue("lang-percent", 0, percentage, 1500, "%");
        }

        // Contributions (Proxy)
        try {
            const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);
            if (contribRes.ok) {
                const contribData = await contribRes.json();
                const totalContributions = Object.values(contribData.total).reduce((a, b) => a + b, 0);
                animateValue("contribution-count", 0, totalContributions, 2000, "+");
            } else {
                throw new Error("Proxy failed");
            }
        } catch (e) {
            const countEl = document.getElementById('contribution-count');
            if (countEl) countEl.innerText = "500+";
        }

    } catch (error) {
        console.error("Error fetching stats:", error);
        // UI Fallbacks
        fallbackValue('repo-count', "15+");
        fallbackValue('contribution-count', "500+");
        fallbackValue('lang-percent', "90%");
        fallbackValue('top-lang-name', "Code");
    }
}

function fallbackValue(id, val) {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
}

function animateValue(id, start, end, duration, suffix = "") {
    const obj = document.getElementById(id);
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

/* ---------------------------------------------------------
   4. THEME & MENU LOGIC
   --------------------------------------------------------- */
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });
}

const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

/* ---------------------------------------------------------
   5. CONTACT FORM HANDLING
   --------------------------------------------------------- */
/* ---------------------------------------------------------
   5. CONTACT FORM HANDLING (THEME CONSISTENT)
   --------------------------------------------------------- */
function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return; // Guard clause

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const status = document.getElementById("form-status");
        const btn = document.getElementById("submit-btn");
        const data = new FormData(event.target);

        // 1. Processing State
        btn.innerHTML = "Sending...";
        btn.disabled = true;

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            // 2. Swap Button for Message
            btn.classList.add('hidden');
            status.classList.remove('hidden');
            status.classList.add('flex'); // Center content

            if (response.ok) {
                // ------------------------------------------------------
                // SUCCESS STATE: Uses 'bg-secondary' (Your Theme Emerald)
                // ------------------------------------------------------
                status.innerHTML = "Message Sent Successfully!";

                // Changed from 'bg-green-500' to 'bg-secondary' to match your logo/theme
                status.className = "absolute inset-0 w-full h-full flex items-center justify-center rounded-lg font-semibold bg-secondary text-white shadow-lg";

                form.reset();

                // Reset after 4 seconds
                setTimeout(() => {
                    status.classList.add('hidden');
                    status.classList.remove('flex');
                    btn.classList.remove('hidden');
                    btn.innerHTML = "Send Message";
                    btn.disabled = false;
                }, 4000);

            } else {
                // ------------------------------------------------------
                // ERROR STATE
                // ------------------------------------------------------
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(e => e["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! Submission failed.";
                }

                // Used a standard Red that contrasts well with both Light and Dark modes
                status.className = "absolute inset-0 w-full h-full flex items-center justify-center rounded-lg font-semibold bg-red-500 text-white shadow-lg";

                // Reset after 3 seconds
                setTimeout(() => {
                    status.classList.add('hidden');
                    status.classList.remove('flex');
                    btn.classList.remove('hidden');
                    btn.innerHTML = "Try Again";
                    btn.disabled = false;
                }, 3000);
            }
        } catch (error) {
            // ------------------------------------------------------
            // NETWORK ERROR STATE
            // ------------------------------------------------------
            btn.classList.add('hidden');
            status.classList.remove('hidden');
            status.classList.add('flex');
            status.innerHTML = "Network Error. Check connection.";

            status.className = "absolute inset-0 w-full h-full flex items-center justify-center rounded-lg font-semibold bg-red-500 text-white shadow-lg";

            setTimeout(() => {
                status.classList.add('hidden');
                status.classList.remove('flex');
                btn.classList.remove('hidden');
                btn.innerHTML = "Try Again";
                btn.disabled = false;
            }, 3000);
        }
    });
}