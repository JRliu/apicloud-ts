const glob = require('glob')
const shelljs = require('shelljs')
const fs = require('fs')

function getEntry () {
  let globPath = 'src/**/index.ts'
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  // let pathDir = 'src(/|\\\\)(.*?)(/|\\\\)html'
  let files = glob.sync(globPath)

  let entries = files.map(file => {
    let item = {
      entry: file,
      filename: file
        .replace(/src(\/|\\\\)/, '')
        .replace(/(\/||\\\\)index\.ts/, '.html'),
      template: 'public/index.html'
    }
    return item
  })

  let result = {}
  entries.forEach((item, index) => {
    result[index] = item
  })
  return result
}

function shell (code) {
  shelljs.exec(code, { stdio: 'inherit' })
}

function flatten (arr) {
  return arr.reduce((prev, curr) => prev.concat(curr), [])
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
              shell(`cp config.xml dist/config.xml`)
              // 修改config.xml的入口路径
              const file = './dist/config.xml'
              fs.readFile(file, 'utf8', function (err, data) {
                if (err) {
                  return console.log(err)
                }
                var result = data.replace(
                  /<content src=".*\.html"/g,
                  `<content src="./pages/login/index.html"`
                )

                fs.writeFile(file, result, 'utf8', function (
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
                htmlPluginData.html = htmlPluginData.html.replace(
                  /\/widget:\/\//g,
                  'widget://'
                )
                return htmlPluginData
              }
            )
          })
        }
      }
    ]
  },
  chainWebpack: config => {}
}
