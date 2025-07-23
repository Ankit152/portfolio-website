module.exports = {
    darkMode: 'class', // or 'media'
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.8s ease-in forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
}
  