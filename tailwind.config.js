/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                kenburns: {
                    "0%": { transform: "scale(1) translateX(-5%)" },
                    "100%": { transform: "scale(1.3) translateX(5%)" },
                },
            },
            animation: {
                kenburns: "kenburns 6s ease-in-out infinite alternate",
            },

        },
    },
    plugins: [],
};