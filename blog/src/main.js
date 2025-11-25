document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation
    AOS.init({ once: true, duration: 800 });

    let activeCategory = 'All';
    let searchQuery = '';

    // DOM Elements
    const grid = document.getElementById('blog-grid');
    const filtersContainer = document.getElementById('category-filters');
    const searchInput = document.getElementById('search-input');
    const emptyState = document.getElementById('empty-state');
    const listView = document.getElementById('blog-list-view');
    const postView = document.getElementById('blog-post-view');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // 1. Initialize Categories
    window.initCategories = function () {
        // Extract unique categories from blogPosts (loaded from posts.js)
        const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

        filtersContainer.innerHTML = categories.map(cat => `
            <button onclick="setCategory('${cat}')" 
                class="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                ${cat === activeCategory ? 'bg-primary text-white shadow-lg shadow-blue-500/30' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary'}">
                ${cat}
            </button>`).join('');
    }

    // 2. Render Grid
    window.renderGrid = function () {
        const filtered = blogPosts.filter(post => {
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');

        grid.innerHTML = filtered.map((post, index) => `
            <div class="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="h-48 overflow-hidden relative">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">${post.category}</div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-3 space-x-4">
                        <span><i class="far fa-calendar-alt mr-1"></i> ${post.date}</span>
                        <span><i class="far fa-clock mr-1"></i> ${post.readTime}</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">${post.title}</h3>
                    <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">${post.excerpt}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${post.tags.map(tag => `<span class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">${tag}</span>`).join('')}
                    </div>
                    <button onclick="router('post', ${post.id})" class="w-full mt-auto py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all text-sm font-medium">
                        Read Article <i class="fas fa-arrow-right ml-1"></i>
                    </button>
                </div>
            </div>`).join('');
    }

    // 3. Render Individual Post
    function renderPost(id) {
        const post = blogPosts.find(p => p.id === parseInt(id));
        if (!post) return window.router('list');

        document.getElementById('post-title').innerText = post.title;
        document.getElementById('post-date').innerText = post.date;
        document.getElementById('post-read-time').innerText = post.readTime;
        document.getElementById('post-hero-image').src = post.image;
        document.getElementById('post-content').innerHTML = post.content;
        document.getElementById('post-tags').innerHTML = post.tags.map(tag => `<span class="px-3 py-1 rounded-full bg-primary/20 text-blue-200 text-sm font-medium border border-primary/30">${tag}</span>`).join('');

        window.scrollTo(0, 0);
    }

    // 4. Router Logic
    window.router = function (view, id = null) {
        if (view === 'list') {
            postView.classList.add('hidden');
            listView.classList.remove('hidden');
            history.pushState(null, '', '#list');
            setTimeout(() => AOS.refresh(), 100);
            // Re-render grid when returning to list to ensure state is correct
            window.renderGrid();
        } else if (view === 'post') {
            listView.classList.add('hidden');
            postView.classList.remove('hidden');
            renderPost(id);
            history.pushState(null, '', `#post-${id}`);
        }
    }

    // 5. Filter & Search Functions
    window.setCategory = function (cat) {
        activeCategory = cat;
        initCategories();
        renderGrid();
    }

    window.resetFilters = function () {
        activeCategory = 'All';
        searchQuery = '';
        searchInput.value = '';
        initCategories();
        renderGrid();
    }

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderGrid();
    });

    // 6. Dark Mode Logic (Fixed with !hidden)
    function checkTheme() {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }
    checkTheme();

    themeToggleBtn.addEventListener('click', function () {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) localStorage.setItem('theme', 'dark');
        else localStorage.setItem('theme', 'light');
    });

    // 7. Handle Browser Back Button
    window.addEventListener('popstate', () => {
        const hash = window.location.hash;
        if (hash.startsWith('#post-')) window.router('post', hash.split('-')[1]);
        else window.router('list');
    });

    // --- INITIALIZATION ---
    window.initCategories(); // Create buttons
    window.renderGrid();     // <--- THIS IS THE FIX! (Show posts immediately)

    // Check URL on load to see if we should show a specific post
    const hash = window.location.hash;
    if (hash.startsWith('#post-')) {
        window.router('post', hash.split('-')[1]);
    }
});