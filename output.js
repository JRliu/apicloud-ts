{
  mode: 'development',
  context: '/Users/liujianrong/Desktop/my-projects/apicloud-ts',
  devtool: 'cheap-module-eval-source-map',
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/dist',
    filename: '[name].js',
    publicPath: '/',
    globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  resolve: {
    alias: {
      '@': '/Users/liujianrong/Desktop/my-projects/apicloud-ts/src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      config: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/config/development.ts'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.mjs',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/@vue/cli-plugin-eslint/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/.cache/vue-loader',
              cacheIdentifier: '1136fee5'
            }
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/.cache/vue-loader',
              cacheIdentifier: '1136fee5'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  includePaths: [
                    '/Users/liujianrong/Desktop/my-projects/apicloud-ts/src/style',
                    '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules'
                  ]
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  includePaths: [
                    '/Users/liujianrong/Desktop/my-projects/apicloud-ts/src/style',
                    '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules'
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.3.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/.cache/babel-loader',
              cacheIdentifier: '2c54da22'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue',
                '.ts',
                '.tsx'
              ],
              cache: true,
              cacheIdentifier: '4c6dbb23',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/eslint/lib/api.js',
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/.cache/ts-loader',
              cacheIdentifier: 'b8d302f0'
            }
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-ts/node_modules/.cache/ts-loader',
              cacheIdentifier: 'b8d302f0'
            }
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html-0') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '0'
        ],
        template: './src/tpl/index.html',
        filename: 'pages/error/Error.html'
      }
    ),
    /* config.plugin('html-1') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '1'
        ],
        template: './src/tpl/index.html',
        filename: 'pages/test/Demo.html'
      }
    ),
    /* config.plugin('preload-0') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'pages/error/Error.html'
        ],
        include: {
          type: 'initial',
          entries: [
            '0'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-0') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'pages/error/Error.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            '0'
          ]
        }
      }
    ),
    /* config.plugin('preload-1') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'pages/test/Demo.html'
        ],
        include: {
          type: 'initial',
          entries: [
            '1'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-1') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'pages/test/Demo.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            '1'
          ]
        }
      }
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        vue: true,
        tslint: false,
        formatter: 'codeframe',
        checkSyntacticErrors: false
      }
    ),
    {
      apply: function () { /* omitted long function */ }
    }
  ],
  entry: {
    '0': [
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/src/pages/error/Error/main.ts'
    ],
    '1': [
      '/Users/liujianrong/Desktop/my-projects/apicloud-ts/src/pages/test/Demo/main.ts'
    ]
  }
}
