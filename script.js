/* ---------------------------------------------------------
   1. GLOBAL CONFIGURATION
   --------------------------------------------------------- */
const GITHUB_USERNAME = "itzsudipta";
const API_TIMEOUT = 10000; // 10 seconds timeout for API calls
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

/* ---------------------------------------------------------
   2. UTILITY FUNCTIONS
   --------------------------------------------------------- */
// Safe element getter with null check
const safeGetElement = (id) => {
    try {
        return document.getElementById(id);
    } catch (error) {
        console.warn(`Element '${id}' not found:`, error);
        return null;
    }
};

// Fetch with timeout to prevent hanging requests
const fetchWithTimeout = async (url, options = {}, timeout = API_TIMEOUT) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
};

// Cache management for API responses
const cache = {
    get: (key) => {
        try {
            const item = sessionStorage.getItem(key);
            if (!item) return null;
            const { data, timestamp } = JSON.parse(item);
            if (Date.now() - timestamp < CACHE_DURATION) return data;
            sessionStorage.removeItem(key);
        } catch (error) {
            console.warn('Cache read error:', error);
        }
        return null;
    },
    set: (key, data) => {
        try {
            sessionStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
        } catch (error) {
            console.warn('Cache write error:', error);
        }
    }
};

/* ---------------------------------------------------------
   3. ANIMATIONS & INITIALIZATION
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    try {
        // Initialize AOS with error handling
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }

        // Fetch Data
        fetchGitHubStats();

        // Setup Contact Form
        setupContactForm();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

/* ---------------------------------------------------------
   4. GITHUB STATS LOGIC
   --------------------------------------------------------- */
async function fetchGitHubStats() {
    try {
        // Check cache first
        const cachedStats = cache.get('github-stats');
        if (cachedStats) {
            displayGitHubStats(cachedStats);
            return;
        }

        // Fetch with timeout protection
        const [userRes, reposRes] = await Promise.all([
            fetchWithTimeout(`https://api.github.com/users/${GITHUB_USERNAME}`),
            fetchWithTimeout(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
        ]);

        if (!userRes.ok || !reposRes.ok) {
            throw new Error('GitHub API error');
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        // Cache the results
        cache.set('github-stats', { userData, reposData });

        displayGitHubStats({ userData, reposData });

    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        // UI Fallbacks
        setFallbackValues();
    }
}

function displayGitHubStats({ userData, reposData }) {
    try {
        // Animate repository count
        if (userData?.public_repos) {
            animateValue("repo-count", 0, userData.public_repos, 1500);
        }

        // Language Calculation
        const langCounts = {};
        let totalReposWithLang = 0;

        if (Array.isArray(reposData)) {
            reposData.forEach(repo => {
                if (repo?.language) {
                    langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                    totalReposWithLang++;
                }
            });
        }

        if (totalReposWithLang > 0) {
            const topLang = Object.keys(langCounts).reduce((a, b) =>
                langCounts[a] > langCounts[b] ? a : b
            );
            const percentage = Math.round((langCounts[topLang] / totalReposWithLang) * 100);
            const topLangEl = safeGetElement('top-lang-name');
            if (topLangEl) topLangEl.innerText = topLang;
            animateValue("lang-percent", 0, percentage, 1500, "%");
        }

        // Fetch Contributions with timeout
        fetchContributions();

    } catch (error) {
        console.error("Error displaying stats:", error);
        setFallbackValues();
    }
}

async function fetchContributions() {
    try {
        const contribRes = await fetchWithTimeout(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
            {},
            8000
        );

        if (contribRes.ok) {
            const contribData = await contribRes.json();
            if (contribData?.total) {
                const totalContributions = Object.values(contribData.total).reduce((a, b) => a + b, 0);
                animateValue("contribution-count", 0, totalContributions, 2000, "+");
            } else {
                throw new Error("Invalid contribution data");
            }
        } else {
            throw new Error("Contribution API failed");
        }
    } catch (error) {
        console.warn("Contribution fetch failed:", error.message);
        const countEl = safeGetElement('contribution-count');
        if (countEl) countEl.innerText = "500+";
    }
}

function setFallbackValues() {
    fallbackValue('repo-count', "15+");
    fallbackValue('contribution-count', "500+");
    fallbackValue('lang-percent', "90%");
    fallbackValue('top-lang-name', "Code");
}

function fallbackValue(id, val) {
    const el = safeGetElement(id);
    if (el) el.innerText = val;
}

function animateValue(id, start, end, duration, suffix = "") {
    const obj = safeGetElement(id);
    if (!obj) return;

    // Validate input
    if (typeof start !== 'number' || typeof end !== 'number' || typeof duration !== 'number') {
        console.warn(`Invalid animation parameters for ${id}`);
        return;
    }

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
   5. THEME & MENU LOGIC
   --------------------------------------------------------- */
// Theme initialization with localStorage protection
try {
    const themeToggle = safeGetElement('theme-toggle');
    const html = document.documentElement;

    // Safe localStorage access
    const getStoredTheme = () => {
        try {
            return localStorage.getItem('theme');
        } catch {
            return null;
        }
    };

    const setStoredTheme = (theme) => {
        try {
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.warn('Cannot save theme preference:', error);
        }
    };

    // Initialize theme
    if (getStoredTheme() === 'dark' ||
        (!getStoredTheme() && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Theme toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            setStoredTheme(html.classList.contains('dark') ? 'dark' : 'light');
        });
    }
} catch (error) {
    console.error('Theme initialization error:', error);
}

// Mobile menu with error handling
try {
    const menuBtn = safeGetElement('mobile-menu-btn');
    const mobileMenu = safeGetElement('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
} catch (error) {
    console.error('Mobile menu initialization error:', error);
}

/* ---------------------------------------------------------
   6. CONTACT FORM HANDLING
   --------------------------------------------------------- */
function setupContactForm() {
    const form = safeGetElement("contact-form");
    if (!form) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const status = safeGetElement("form-status");
        const btn = safeGetElement("submit-btn");

        if (!status || !btn) {
            console.error('Form elements not found');
            return;
        }

        const data = new FormData(event.target);

        // Processing State
        btn.innerHTML = "Sending...";
        btn.disabled = true;

        try {
            const response = await fetchWithTimeout(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }, 15000); // 15 second timeout for form submission

            // Swap Button for Message
            btn.classList.add('hidden');
            status.classList.remove('hidden');
            status.classList.add('flex');

            if (response.ok) {
                // SUCCESS STATE
                status.innerHTML = "Message Sent Successfully!";
                status.className = "absolute inset-0 w-full h-full flex items-center justify-center rounded-lg font-semibold bg-secondary text-white shadow-lg";

                form.reset();

                // Reset after 4 seconds
                setTimeout(() => {
                    resetFormUI(status, btn, "Send Message");
                }, 4000);

            } else {
                // ERROR STATE
                let errorMessage = "Oops! Submission failed.";
                try {
                    const errorData = await response.json();
                    if (errorData?.errors) {
                        errorMessage = errorData.errors.map(e => e?.message || "Error").join(", ");
                    }
                } catch (parseError) {
                    console.warn('Could not parse error response');
                }

                status.innerHTML = errorMessage;
                status.className = "absolute inset-0 w-full h-full flex items-center justify-center rounded-lg font-semibold bg-red-500 text-white shadow-lg";

                // Reset after 3 seconds
                setTimeout(() => {
                    resetFormUI(status, btn, "Try Again");
                }, 3000);
            }
        } catch (error) {
            // NETWORK ERROR STATE
            console.error('Form submission error:', error);

            btn.classList.add('hidden');
            status.classList.remove('hidden');
            status.classList.add('flex');

            const errorMessage = error.name === 'AbortError'
                ? "Request timed out. Please try again."
                : "Network Error. Check connection.";

            status.innerHTML = errorMessage;
            status.className = "absolute inset-0 w-full h-full flex items-center justify-center rounded-lg font-semibold bg-red-500 text-white shadow-lg";

            setTimeout(() => {
                resetFormUI(status, btn, "Try Again");
            }, 3000);
        }
    });
}

function resetFormUI(status, btn, btnText) {
    try {
        status.classList.add('hidden');
        status.classList.remove('flex');
        btn.classList.remove('hidden');
        btn.innerHTML = btnText;
        btn.disabled = false;
    } catch (error) {
        console.error('Error resetting form UI:', error);
    }
}

/* ---------------------------------------------------------
   7. ERROR HANDLING & 404 PAGE
   --------------------------------------------------------- */
// Global error handler for uncaught errors
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// Check if page is 404 and redirect if necessary
document.addEventListener('DOMContentLoaded', () => {
    // If the page title contains "404" or specific 404 indicators
    if (document.title.includes('404') ||
        document.querySelector('meta[name="prerender-status-code"]')?.content === '404') {
        console.info('404 page detected');
    }

    // Monitor for broken resources
    window.addEventListener('error', (e) => {
        if (e.target !== window) {
            console.warn('Resource failed to load:', e.target.src || e.target.href);
        }
    }, true);
});