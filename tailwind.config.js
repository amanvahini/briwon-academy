/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        briwon: {
          deep: '#163267',      // Primary navy from Briwon wordmark
          dark: '#0F2347',      // Deepest midnight blue
          royal: '#1E40AF',     // Vibrant tech blue
          blue: '#2563EB',      // Interactive blue
          cyan: '#0284C7',      // Mid-wave tone
          light: '#38BDF8',     // Wave highlight tone
          surface: '#F8FAFC',   // Ultra-light neutral background
          border: '#E2E8F0',    // Soft border tone
        },
        accent: {
          emerald: '#059669',   // Practical & placement verification
          amber: '#D97706',     // Urgency & highlight
        }
      },
      boxShadow: {
        'briwon-sm': '0 2px 8px -1px rgba(22, 50, 103, 0.06)',
        'briwon-md': '0 8px 24px -4px rgba(22, 50, 103, 0.08)',
        'briwon-lg': '0 20px 35px -8px rgba(22, 50, 103, 0.12)',
      }
    },
  },
  plugins: [],
}
