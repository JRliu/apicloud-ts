const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')

function getEntry() {
    let globPath = 'src/pages/**/main.ts'
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    // let pathDir = 'src(/|\\\\)(.*?)(/|\\\\)html'
    let files = glob.sync(globPath)

    let entries = files.map(file => {
        let item = {
            entry: file,
            filename: file
                .replace(/src(\/|\\\\)/, '')
                .replace(/(\/||\\\\)main\.ts/, '.html'),
            template: './src/tpl/index.html'
        }
        return item
    })

    let result = {}
    entries.forEach((item, index) => {
        result[index] = item
    })
    return result
}

function resolve(dir) {
    return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProduction ? 'widget://' : '/',
    pages: getEntry(),
    configureWebpack: {
        plugins: [
            {
                apply: compiler => {
                    compiler.hooks.afterEmit.tap(
                        'AfterEmitPlugin',
                        async compilation => {
                            // wekpack 生成资源到 output 目录之后执行
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
                                var result = data.replace(
                                    /<content src=".*\.html"/g,
                                    `<content src="./pages/login/index.html"`
                                )

                                fs.writeFile(file, result, 'utf8', function(
                                    err
                                ) {
                                    if (err) return console.log(err)
                                })
                            })
                        }
                    )
                }
            },
            // 批量把生成的html里的‘/widget://’替换为‘widget://’ (把vue-cli在publicPath前加的'/'去掉！)
            {
                apply: compiler => {
                    compiler.plugin('compilation', compilation => {
                        compilation.plugin(
                            'html-webpack-plugin-after-html-processing',
                            htmlPluginData => {
                                const tier =
                                    htmlPluginData.outputName.split('/')
                                        .length - 1

                                htmlPluginData.html = htmlPluginData.html.replace(
                                    /\/widget:\/\//g,
                                    '../'.repeat(tier)
                                )
                                return htmlPluginData
                            }
                        )
                    })
                }
            }
        ]
    },
    chainWebpack: config => {
        // ts 文件提升到最高
        config.resolve.extensions
            .prepend('.js')
            .prepend('.ts')
            .prepend('.tsx')

        // scss 模块
        let includePaths = [resolve('./src/style'), resolve('./node_modules')]
        config.module
            .rule('scss')
            .oneOf('normal')
            .use('sass-loader')
            .tap(options => {
                return _.merge(options, {
                    includePaths
                })
            })

        config.module
            .rule('scss')
            .oneOf('vue')
            .use('sass-loader')
            .tap(options => {
                return _.merge(options, {
                    includePaths
                })
            })
    }
}
