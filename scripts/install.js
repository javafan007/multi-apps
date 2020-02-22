const { spawn } = require('child_process');

spawn(
  'concurrently',
  [
    '--kill-others',
    '--kill-others-on-fail',
    '-p',
    'name',
    '"npm run install:module"',
    '"npm run install:react-parent"',
    '"npm run install:react-child"',
    '"npm run install:vue-child"',
  ],
  { stdio: 'inherit', shell: true }
);
