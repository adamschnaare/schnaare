#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkg = require('./package.json')
const chalk = require('chalk')
const log = console.log
const emailColor = chalk.white.bold.inverse
const githubColor = chalk.hex('#6cc644').bold.inverse
const linkedInColor = chalk.hex('#00a0dc').bold.inverse
const dim = chalk.dim
const italic = chalk.dim.italic

welcome({
    title: 'Adam Schnaare',
    version: pkg.version,
    tagLine: 'by Adam Schnaare',
    description: pkg.description,
    bgColor: `#6cc644`,
    color: `#000000`,
    bold: true,
    clear: true,
})

log(`${italic(`A software engineer, dad, and horribly dry joke enthusiast.`)}

${emailColor(' Email ')}    ${dim(`adam.schnaare@spinuptech.com`)}
${githubColor(' Github ')}   ${dim('https://github.com/adamschnaare')}
${linkedInColor(' LinkedIn ')} ${dim('https://www.linkedin.com/in/adamschnaare/')}
`)
