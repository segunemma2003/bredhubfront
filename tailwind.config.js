module.exports = {
  content: [
    './**/*.html',        // Include all HTML files
    './src/**/*.js',      // Include all JavaScript files in the src directory and its subdirectories
    './styles/**/*.css', 
  ],
  theme: {
      extend: {
        fontFamily:{
          inter:['Inter','sans-serif'],
          poppins:['Poppins', 'sans-serif']
        }
       },
  },
  plugins: [],
};