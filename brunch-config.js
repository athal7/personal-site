module.exports = {
  files: {
    javascripts: {
      joinTo: {
        "vendor.js": /^(?!app)/,
        "app.js": /^app/
      }
    },
    stylesheets: { joinTo: "app.css" }
  },

  plugins: {
    babel: { 
      presets: [
        ['@babel/env', {
          targets: {
            browsers: ['last 2 versions', 'safari >= 7']
          }
        }],
        '@babel/react',
      ],
    },
    postcss: { 
      modules: true,
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ],
    }
  }
};
