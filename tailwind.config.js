/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': {
            color: '#000080',
          },
          '50%': {
            color: '#99C93C',
          },
          '100%': {
            color: '#000080',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.1s ease-out',
        'spin-slow': 'spin 2s linear infinite',
        'shimmer': 'shimmer 5s infinite',
      },
      scale: {
        '102': '1.02',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-10': '10deg',
        'x-10': '10deg',
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(94, 23, 235, 0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
