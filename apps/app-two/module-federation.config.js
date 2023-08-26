module.exports = {
  name: 'app-two',
  exposes: {
    './Routes': 'apps/app-two/src/app/remote-entry/entry.routes.ts',
  },
};
