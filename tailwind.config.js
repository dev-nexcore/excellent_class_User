module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        radley: ['var(--font-radley)'],
      },
    }, // ✅ This closing brace was missing before
  },
  plugins: [],
};
