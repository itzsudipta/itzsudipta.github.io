document.addEventListener('DOMContentLoaded', () => {

    // --- 1. EYE TRACKING LOGIC ---
    // This makes the bug's eyes follow the cursor
    const leftPupil = document.getElementById('pupil-left');
    const rightPupil = document.getElementById('pupil-right');
    const eyesContainer = document.getElementById('eyes-container');

    // Original positions (from SVG attributes)
    const leftBase = { x: 270, y: 110 };
    const rightBase = { x: 310, y: 110 };

    function updateEyes(e) {
        // Get the bounding rectangle of the eyes container
        // We calculate this inside the function or on resize to handle responsiveness
        const rect = eyesContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate angle from center of eyes to mouse
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

        // Max distance the pupil can move (in pixels)
        const maxMove = 4;

        // Calculate new coordinates
        const moveX = Math.cos(angle) * maxMove;
        const moveY = Math.sin(angle) * maxMove;

        // Apply translation relative to base position
        // We use transform directly to avoid messing up SVG coordinate systems
        leftPupil.setAttribute('cx', leftBase.x + moveX);
        leftPupil.setAttribute('cy', leftBase.y + moveY);

        rightPupil.setAttribute('cx', rightBase.x + moveX);
        rightPupil.setAttribute('cy', rightBase.y + moveY);
    }

    // Listen for mouse movement
    document.addEventListener('mousemove', updateEyes);


    // --- 2. BINARY RAIN PARTICLES ---
    const container = document.getElementById('particles-container');
    const particleCount = 25; // Number of floating numbers

    function createParticles() {
        container.innerHTML = ''; // Clear existing

        for (let i = 0; i < particleCount; i++) {
            const el = document.createElement('div');
            el.classList.add('binary-particle');
            el.innerText = Math.random() > 0.5 ? '1' : '0';

            // Random Positioning (0-100vw)
            el.style.left = Math.random() * 100 + '%';

            // Random Size (10px - 20px)
            const size = Math.floor(Math.random() * 10) + 10;
            el.style.fontSize = size + 'px';

            // Random Animation Duration (5s - 15s)
            const duration = Math.random() * 10 + 5;
            el.style.animationDuration = duration + 's';

            // Random Delay
            el.style.animationDelay = (Math.random() * 5) + 's';

            container.appendChild(el);
        }
    }

    createParticles();
});