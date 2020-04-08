'use strict';

const chalk = require('chalk');
const Common = require('./common');
const execSync = require('child_process').execSync;
const path = require('path');


const PACKAGE = "git+https://github.com/status-im/react-native-desktop-qt.git";

const REACT_NATIVE_DESKTOP_GENERATE_PATH = function() {
  return path.resolve(
    process.cwd(),
    'node_modules',
    'react-native-desktop-qt',
    'local-cli',
    'generate-desktop.js'
  );
};


function installDesktopPackage(options) {
  let rndPackage = PACKAGE;

  console.log(`Installing ${rndPackage}...`);
  const pkgmgr = Common.isGlobalCliUsingYarn(process.cwd()) ? 'yarn add' : 'npm install --save';
  const execOptions = options.verbose ? {stdio: 'inherit'} : {};
  execSync(`${pkgmgr} ${rndPackage}`, execOptions);
  console.log(chalk.green(`${rndPackage} successfully installed.`));
}

function runDesktopFilesGenerationScript() {

  const generateDesktop = require(REACT_NATIVE_DESKTOP_GENERATE_PATH());
  generateDesktop(process.cwd(), Common.getReactNativeAppName());
}

module.exports = async function (config, args, options) {

  try {
    installDesktopPackage(options);

    runDesktopFilesGenerationScript();
  } catch (error) {
    console.error(chalk.red(error.message));
    console.error(error);
    process.exit(1);
  }
};
