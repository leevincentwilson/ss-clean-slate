#! /usr/bin/env node

/* eslint-disable no-console */
console.log('Running Simple Solutions Clean Slate');
const fs = require('fs-extra');
const path = require('path');

const workingDir = process.cwd();
const editJsonFile = require('edit-json-file');

try {
  fs.copySync(path.resolve(__dirname, '../projectFiles'), path.resolve(workingDir));
  console.log('copied files');
} catch (err) {
  console.error(err);
}

console.log('updating package.jsons scripts');

const file = editJsonFile(`${workingDir}/package.json`);
file.set('scripts', {
  start: 'webpack-dev-server --config config/webpack.dev.babel.js',
  test: 'jest',
  lint: 'eslint --ext .js src --config ./config/.eslintrc.js',
});
file.save();
console.log('Package.json updated');
