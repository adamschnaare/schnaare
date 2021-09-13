#!/usr/bin/env node
import chalk from 'chalk'
import alert from 'cli-alert'
import init from './utils/init.js'
;(() => {
    init()

    const log = console.log
    const emailColor = chalk.white.bold.inverse
    const githubColor = chalk.hex('#6cc644').bold.inverse
    const linkedInColor = chalk.hex('#00a0dc').bold.inverse
    const dim = chalk.dim
    const italic = chalk.dim.italic

    log(`${italic(`A software engineer, dad, and horribly dry joke enthusiast.`)}

${emailColor(' Email ')}    ${dim(`adam.schnaare@spinuptech.com`)}
${githubColor(' Github ')}   ${dim('https://github.com/adamschnaare')}
${linkedInColor(' LinkedIn ')} ${dim('https://www.linkedin.com/in/adamschnaare/')}
`)

    alert({ type: `info`, msg: `Thanks for checking this out!` })
})()
