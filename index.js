#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkg = require('./package.json');

welcome({
  title: pkg.name,
  version: pkg.version,
  tagLine: 'by Adam Schnaare',
  description: pkg.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Adam Schnaare - Software Engineer

A software engineer, dad, and horribly dry joke enthusiast.

✉️ adam.schnaare@spinuptech.com
`);
