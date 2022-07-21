module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Source Sans Pro', 'sans'],
        custom2: ['Courgette', 'sans'],
        custom3: ['Inter', 'sans'],
        custom4: ['Secular One', 'sans-serif'],
      },
      boxShadow: {
        'shadow1': '0 0 8px 0px white'
      }
    },
  },
  plugins: [],
}
