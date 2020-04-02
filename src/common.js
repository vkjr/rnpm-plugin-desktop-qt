
'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Check that 'react-native init' itself used yarn to install React Native.
 * When using an old global react-native-cli@1.0.0 (or older), we don't want
 * to install React Native with npm, and React + Jest with yarn.
 * Let's be safe and not mix yarn and npm in a single project.
 * @param projectDir e.g. /Users/martin/AwesomeApp
 */
const isGlobalCliUsingYarn = function(projectDir) {
  return fs.existsSync(path.join(projectDir, 'yarn.lock'));
};

module.exports = {
  isGlobalCliUsingYarn,
};
