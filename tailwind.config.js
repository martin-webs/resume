module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Source Sans Pro', 'sans'],
        custom2: ['Courgette', 'sans'],
      },
      boxShadow: {
        'shadow1': '0 0 8px 0px white'
      }
    },
  },
  plugins: [],
}
