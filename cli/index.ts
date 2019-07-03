import * as yargs from 'yargs'
import generate from './command/generate'

yargs
    .command(generate)
    .option('p', {
        alias: 'page',
        default: false,
        type: 'boolean'
    })
    .help().argv

// let argv = yargs.argv
// console.log(argv)
