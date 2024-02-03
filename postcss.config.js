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
 * Additional options in autoprefixer
 * {@link https://github.com/postcss/autoprefixer#options}
 *
 * Optimising Tailwind CSS for production
 * {@link https://tailwindcss.com/docs/optimizing-for-production}
 *
 * Nesting support in the Tailwind CSS plugin API (tailwindcss/nesting)
 * {@link https://tailwindcss.com/docs/using-with-preprocessors#nesting}
 */

module.exports = {
  plugins: {
    '@tailwindcss/nesting': {}, // 항상 tailwindcss 앞에 위치
    'postcss-preset-env': {
      autoprefixer: {
        // grid: 'autoplace', // ie 10-11 대응 grid layout 속성 prefix
      },
      features: {
        'nesting-rules': false, // @tailwindcss/nesting 사용 시 false로 설정
      },
    },
    tailwindcss: {}, // tailwindcss 사용 시 필요
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // production 환경에서 css minify 구현
  },
}
