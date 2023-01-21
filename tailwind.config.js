/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                padding: {
                    '2xl': '2rem',
                    DEFAULT: '1rem',
                    lg: '2rem',
                    sm: '1rem',
                    xl: '3rem',
                },
            },
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
    },
            fontFamily: {
                primary: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
