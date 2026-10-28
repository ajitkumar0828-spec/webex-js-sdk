const {spawnSync} = require('node:child_process');
const {mkdirSync, rmSync, writeFileSync} = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
mkdirSync(path.join(root, 'reports/sonar'), {recursive: true});
rmSync(path.join(root, 'coverage/sonar/contact-center'), {recursive: true, force: true});
const result = spawnSync(process.execPath, [
  '.yarn/releases/yarn-3.4.1.cjs', 'workspace', '@webex/contact-center', 'test:unit',
], {cwd: root, stdio: 'inherit', env: {...process.env, NODE_ENV: 'test', SONAR_COVERAGE: 'true'}});
writeFileSync(path.join(root, 'reports/sonar/test-status.json'), JSON.stringify([{
  workspace: '@webex/contact-center', exitCode: result.status, signal: result.signal,
  status: result.status === 0 ? 'passed' : 'failed',
}], null, 2) + '\n');
process.exitCode = result.status === 0 ? 0 : 1;
