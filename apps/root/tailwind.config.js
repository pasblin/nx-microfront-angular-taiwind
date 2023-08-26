const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'apps/login/src/**/*.{html,ts}',
    'apps/dashboard/src/**/*.{html,ts}',
    'apps/app-one/src/**/*.{html,ts}',
    'apps/app-two/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer"),require('tailwindcss-animated')],
};
