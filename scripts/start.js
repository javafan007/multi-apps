const { spawn } = require('child_process');

process.env.NODE_ENV = 'development';

spawn(
  'concurrently',
  [
    '--kill-others',
    '--kill-others-on-fail',
    '-p',
    'name',
    '"npm run start:react-parent"',
    '"npm run start:react-child"',
    '"npm run start:vue-child"',
  ],
  { stdio: 'inherit', shell: true }
);
