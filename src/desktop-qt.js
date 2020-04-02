'use strict';

const chalk = require('chalk');
const Common = require('./common');


module.exports = async function (config, args, options) {

  let rndPackage = "git+https://github.com/vkjr/react-native-desktop-qt.git";

  console.log(`Installing ${rnwPackage}...`);
  const pkgmgr = Common.isGlobalCliUsingYarn(process.cwd()) ? 'yarn add' : 'npm install --save';
  const execOptions = options.verbose ? { stdio: 'inherit' } : {};
  execSync(`${pkgmgr} ${rndPackage}`, execOptions);
  console.log(chalk.green(`${rndPackage} successfully installed.`));
};
