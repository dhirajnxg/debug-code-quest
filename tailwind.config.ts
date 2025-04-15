
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
        // Modify color palette to green and black
        background: {
          DEFAULT: '#000000', // Black
          foreground: '#10B981', // Green
        },
        primary: {
          DEFAULT: '#10B981', // Green
          foreground: '#000000', // Black
        },
        border: '#10B981', // Green border
        debug: {
          "green": "#10B981",
          "black": "#000000",
          "red": "#EF4444"
        }
      },
      keyframes: {
        // Add a new keyframe for bug color transition
        'bug-color-transition': {
          '0%': { color: '#EF4444' }, // Start with red
          '100%': { color: '#10B981' } // Transition to green
        }
      },
      animation: {
        'bug-color': 'bug-color-transition 5s ease-in-out forwards'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
