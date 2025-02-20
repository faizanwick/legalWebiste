module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#445394',    // Deep blue
        secondary: '#f97316',  // Vibrant orange
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'logo-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'logo-spin': 'spin 1.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

