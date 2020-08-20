module.exports = {
  apps : [{
    name: 'ui',
    cwd: 'ui',
    script: 'yarn',
    watch: 'ui',
    args: 'build',
    env: {
      "PORT": 3000,
      "NODE_ENV": "dev",
    },
    env_prod : {
       "NODE_ENV": "prod"
    }
  }, {
    name: 'server',
    cwd: '.',
    script: 'yarn',
    watch: ['server', 'ui'],
    ignore_watch: ['server/node_modules', 'server/dist'],
    args: 'start',
    env: {
      "PORT": 5000,
      "NODE_ENV": "dev",
    },
    env_prod : {
      "PORT": 5000,
      "NODE_ENV": "prod"
    }
  }]
};
