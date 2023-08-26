module.exports = {
  name: 'app-one',
  exposes: {
    './Routes': 'apps/app-one/src/app/remote-entry/entry.routes.ts',
  },
};
