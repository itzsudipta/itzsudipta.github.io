// ========================================
// CONFIGURATION & CONSTANTS
// ========================================

const CONFIG = {
    navbarOffset: 70,
    scrollThreshold: 100,
    sectionOffset: 200,
    typewriterSpeed: 80,
    scrollTopThreshold: 500,
    scrollIndicatorDelay: 5000,
    debounceDelay: 10
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

const debounce = (func, wait = CONFIG.debounceDelay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

// ========================================
// NAVIGATION & MENU
// ========================================

const hamburger = getElement('#hamburger');
const navMenu = getElement('#navMenu');
const navbar = getElement('#navbar');
const navLinks = getElements('.nav-link');

// Smooth scrolling for navigation links
getElements('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = getElement(this.getAttribute('href'));

        if (target) {
            navMenu?.classList.remove('active');
            hamburger?.classList.remove('active');

            window.scrollTo({
                top: target.offsetTop - CONFIG.navbarOffset,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (hamburger && navMenu && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// SCROLL EFFECTS
// ========================================

let lastScrollTop = 0;
const sections = getElements('section[id]');

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Navbar scroll effect
    navbar?.classList.toggle('scrolled', scrollTop > CONFIG.scrollThreshold);

    // Active navigation link highlighting
    let current = '';
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - CONFIG.sectionOffset) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    // Scroll to top button visibility
    if (scrollTopBtn) {
        if (scrollTop > CONFIG.scrollTopThreshold) {
            scrollTopBtn.style.display = 'block';
            requestAnimationFrame(() => scrollTopBtn.style.opacity = '1');
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => scrollTopBtn.style.display = 'none', 300);
        }
    }

    lastScrollTop = scrollTop;
};

window.addEventListener('scroll', debounce(handleScroll));

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            Object.assign(entry.target.style, {
                opacity: '1',
                transform: 'translateY(0)'
            });
        }
    });
}, observerOptions);

// Observe elements for scroll animations
getElements('.project-card, .about-content, .contact-content').forEach(element => {
    Object.assign(element.style, {
        opacity: '0',
        transform: 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
    });
    observer.observe(element);
});

// ========================================
// TYPEWRITER EFFECT
// ========================================

const typeWriter = (element, text, speed = CONFIG.typewriterSpeed) => {
    let i = 0;
    element.textContent = '';

    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i++);
            setTimeout(type, speed);
        }
    };
    type();
};

window.addEventListener('load', () => {
    const heroTitle = getElement('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText);
    }
});

// ========================================
// PROJECT CARD 3D TILT EFFECT
// ========================================

getElements('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2563eb;
    color: #fff;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1000;
    display: none;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
});

// ========================================
// LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    setTimeout(() => {
        const scrollIndicator = getElement('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            setTimeout(() => scrollIndicator.style.display = 'none', 500);
        }
    }, CONFIG.scrollIndicatorDelay);
});

// ========================================
// CONSOLE MESSAGE (Easter Egg)
// ========================================

console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in how this was built? Check out the code!', 'font-size: 14px; color: #6c757d;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #6c757d;');