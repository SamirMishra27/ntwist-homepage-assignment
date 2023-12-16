/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'feature-orange': '#FF3A2D'
            }
        }
    },
    plugins: []
}
