import * as yargs from 'yargs'
import * as fs from 'fs-extra'
import * as path from 'path'
import prodConfig from '../../config/production'
import devConfig from '../../config/development'

const ENV = process.env.NODE_ENV
const widgetId =
    ENV === 'development' ? devConfig.widgetId : prodConfig.widgetId

const command: yargs.CommandModule<{}, { [k: string]: string }> = {
    command: [`copy-config`],
    describe: '复制config.xml到dist目录',
    async handler(args) {
        // 复制config.json
        fs.copyFileSync(
            path.resolve('./config.xml'),
            path.resolve('./dist/config.xml')
        )
        // 修改config.xml的入口路径
        const file = './dist/config.xml'
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) {
                return console.log(err)
            }
            let result = data.replace(
                /<content src=".*\.html"/,
                `<content src="./pages/test/Demo.html"`
            )

            result = result.replace(
                /<widget id="[a-zA-Z0-9]*"/,
                `<widget id="${widgetId}"`
            )

            fs.writeFile(file, result, 'utf8', function(err) {
                if (err) return console.log(err)
            })
        })
    }
}

export default command
