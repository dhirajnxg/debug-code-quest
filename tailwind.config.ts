
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000', // Black
          foreground: '#00FF00', // Bright Green
        },
        primary: {
          DEFAULT: '#00FF00', // Bright Green
          foreground: '#000000', // Black
        },
        border: '#00FF00', // Bright Green border
        debug: {
          "green": "#00FF00",
          "black": "#000000",
          "red": "#EF4444"
        }
      },
      keyframes: {
        'bug-color-transition': {
          '0%': { color: '#EF4444' }, // Start with red
          '100%': { color: '#00FF00' } // Transition to bright green
        }
      },
      animation: {
        'bug-color': 'bug-color-transition 5s ease-in-out forwards'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
