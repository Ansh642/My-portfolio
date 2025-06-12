/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        primary: '#18181B', // Elegant dark
        secondary: '#F3F4F6', // Soft light
        accent: '#6366F1', // Premium accent (indigo)
        muted: '#A1A1AA', // Muted gray
        background: '#F9FAFB', // Light background
        card: '#FFFFFF', // Card background
        border: '#E5E7EB', // Border color
      },
      boxShadow: {
        premium: '0 4px 32px 0 rgba(60, 72, 88, 0.12)',
      },
      borderRadius: {
        premium: '1.5rem',
      },
    },
    fontFamily: {
      heding: ["Raleway"],
      baloo: ["Baloo Bhaina 2"],
      itim: ["Itim"]
    }
  },
  plugins: [],
}