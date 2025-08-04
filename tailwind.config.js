module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        lisubosa: ['"Lisu Bosa"', 'serif'],  // Add Lisu Bosa to the theme
      }, 
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-in-top': 'slide-in-top 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
      
      clipPath: {
        'left-diagonal': 'polygon(0 0, 80% 0, 20% 100%, 0% 100%)',
        'right-diagonal': 'polygon(80% 0, 100% 0, 100% 100%, 20% 100%)',
      }
    },
  },
  plugins: [ require('tailwind-clip-path')], // install this plugin],
};
