import * as yargs from 'yargs'
import generate from './command/generate'
import copyConfig from './command/copyConfig'

yargs
    .command(generate)
    .option('p', {
        alias: 'page',
        default: false,
        type: 'boolean'
    })
    .help().argv

yargs.command(copyConfig).help().argv

// let argv = yargs.argv
// console.log(argv)
