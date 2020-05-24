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

const config = {
    publicPath: isProduction ? '../../' : '/',
    pages: getEntry(),
    configureWebpack: {
        plugins: [
            {
                apply: compiler => {
                    compiler.hooks.afterEmit.tap(
                        'AfterEmitPlugin',
                        async compilation => {
                            // wekpack 生成资源到 output 目录之后执行
                        }
                    )
                }
            }
            // 批量把生成的html里的‘/widget://’替换为‘widget://’ (把vue-cli在publicPath前加的'/'去掉！)
            // {
            //     apply: compiler => {
            //         compiler.plugin('compilation', compilation => {
            //             compilation.plugin(
            //                 'html-webpack-plugin-after-html-processing',
            //                 htmlPluginData => {
            //                     const tier =
            //                         htmlPluginData.outputName.split('/')
            //                             .length - 1

            //                     htmlPluginData.html = htmlPluginData.html.replace(
            //                         /\/widget:\/\//g,
            //                         '../'.repeat(tier)
            //                     )
            //                     return htmlPluginData
            //                 }
            //             )
            //         })
            //     }
            // }
        ]
    },
    chainWebpack: config => {
        // config.resolve.modules.add(resolve('src'))
        config.resolve.alias.set('@', resolve('./src'))

        // ts 文件提升到最高
        config.resolve.extensions
            .prepend('.js')
            .prepend('.ts')
            .prepend('.tsx')

        config.resolve.alias.set(
            'config',
            path.resolve(__dirname, `config/${process.env.NODE_ENV}.ts`)
        )

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
// let _publicPath = isProduction ? '/' : '/'
// Object.defineProperty(config, 'publicPath', {
//     set: function (val) { },
//     get: function () {
//         return _publicPath
//     }
// })

module.exports = config
