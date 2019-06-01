var jest = require('jest');
require('jest-extended');
require('../config/env');

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', err => {
  throw err;
});

var execSync = require('child_process').execSync;

var  argv = process.argv.slice(2);

var isInGitRepository = () => {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });

    return true;
  } catch (e) {
    return false;
  }
};

var isInMercurialRepository = () => {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });

    return true;
  } catch (e) {
    return false;
  }
};

if (!process.env.CI && argv.indexOf('--watchAll') === -1) {
  const hasSourceControl = isInGitRepository() || isInMercurialRepository();

  argv.push(hasSourceControl ? '--watch' : '--watchAll');
}

jest.run(argv);

