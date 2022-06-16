module.exports = {
  mode: 'jit',
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
