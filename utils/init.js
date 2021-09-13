import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
import unhandled from 'cli-handle-unhandled'
import checkNode from 'cli-check-node'
import welcome from 'cli-welcome'

export default () => {
    unhandled()
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
}
