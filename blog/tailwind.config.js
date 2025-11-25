/** @type {import('tailwindcss').Config} */
module.exports = {
    // Change this line to 'class' to ensure it works with the toggle logic
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                secondary: "#10B981",
                light: "#F8FAFC",
                dark: "#0F172A",
            }
        }
    },
    plugins: [],
};