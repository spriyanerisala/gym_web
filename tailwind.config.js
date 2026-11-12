/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          dark: '#0A0B0E',
          charcoal: '#13151B',
          card: '#181A22',
          cardHover: '#1F222D',
          border: '#272B38',
          accent: '#FF4D12', // Vibrant high-energy orange
          accentHover: '#E03D05',
          accentCrimson: '#FF2A4D', // Red neon accent
          gold: '#FFB800',
          muted: '#8E95A5',
          light: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Impact', 'Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(10,11,14,0.4), rgba(10,11,14,0.92))'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
