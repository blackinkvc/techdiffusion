const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const FILES = [
  'assets/techs_extra.js', 'assets/techs_extend.js', 'assets/techs_more.js',
  'assets/techs_midtech.js', 'assets/data.js'
];

function loadMain(root) {
  const ctx = vm.createContext({ console });
  for (const file of FILES) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });
  }
  return vm.runInContext('TECHS', ctx);
}

function sourceDigest(techs) {
  return crypto.createHash('sha256').update(JSON.stringify(techs)).digest('hex');
}

module.exports = { loadMain, sourceDigest };
