/**
 * Syntaxes (It's not supported by Next.js)
 * {@link https://github.com/postcss/postcss#syntaxes}
 *
 * Plugins
 * {@link https://github.com/postcss/postcss#plugins}
 *
 * Postcss-preset-env options
 * {@link https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env}
 *
 * Postcss-preset-env features
 * {@link https://preset-env.cssdb.org/features/}
 *
 * Optimising Tailwind CSS for production
 * {@link https://tailwindcss.com/docs/optimizing-for-production}
 *
 * Nesting support in the Tailwind CSS plugin API (tailwindcss/nesting)
 * {@link https://tailwindcss.com/docs/using-with-preprocessors#nesting}
 */

module.exports = {
  plugins: {
    '@tailwindcss/nesting': {}, // this plugin has to come before 'tailwindcss'
    'postcss-preset-env': {
      features: {
        'nesting-rules': false, // ensure this value as false when using @tailwindcss/nesting
      },
    },
    tailwindcss: {}, // for using tailwindcss
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // invoking CSS minification in production environment
  },
}
