#!/usr/bin/env node
import welcome from 'cli-welcome'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
import chalk from 'chalk'
import alert from 'cli-alert'
import checkNode from 'cli-check-node'

const log = console.log
const emailColor = chalk.white.bold.inverse
const githubColor = chalk.hex('#6cc644').bold.inverse
const linkedInColor = chalk.hex('#00a0dc').bold.inverse
const dim = chalk.dim
const italic = chalk.dim.italic

// alerts
const success = msg => alert({ type: 'success', msg })
const info = msg => alert({ type: 'info', msg })
const warning = msg => alert({ type: 'warning', msg })
const error = msg => alert({ type: 'error', msg })

checkNode(`12`)

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

success('Thanks for checking this out')
info(`I'm drinking coffee ☕️ right now`)
warning('You are about to do something...not wise, young one')
error('Well, that was our last ship across the pond, now, wasnt it')
