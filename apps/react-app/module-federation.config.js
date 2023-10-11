module.exports = {
  name: 'react-app',
  exposes: {
    './Module': './src/remote-entry.ts',
    './web-components': './src/bootstrap.tsx'
  },
};
