import * as yargs from 'yargs'
import add from './command/add'

// console.log(yargs)
yargs
    .command(add)
    .option('p', {
        alias: 'page',
        default: false,
        type: 'boolean'
    })
    .help().argv

// let argv = yargs.argv
// console.log(argv)
