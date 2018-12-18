const shipItDeploy = require('shipit-deploy');

module.exports = (shipit) => {
  shipItDeploy(shipit);

  shipit.initConfig({
    default: {
      branch: 'production',
      dirToCopy: 'build',
      deployTo: '/var/apps/pogohelper-web',
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      repositoryUrl: 'https://github.com/Divoolej/pogohelper-web.git',
    },
    production: {
      servers: 'deploy@pogohelper.top:2137',
    },
  });

  shipit.on('fetched', () => {
    shipit.start('build');
  });

  shipit.blTask('build', async () => {
    await shipit.local(`
      cd ${shipit.workspace} &&
      yarn install &&
      yarn build --environment production
    `);
  });
};
