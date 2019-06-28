{
  mode: 'production',
  context: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging',
  devtool: 'source-map',
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/dist',
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/widget://',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
      '.ts',
      '.tsx'
    ],
    modules: [
      'node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/@vue/cli-plugin-eslint/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules',
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/@vue/cli-service/node_modules'
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
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/.cache/vue-loader',
              cacheIdentifier: '0e59449d'
            }
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/.cache/vue-loader',
              cacheIdentifier: '0e59449d'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                  }
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
                loader: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
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
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/.cache/babel-loader',
              cacheIdentifier: '075b22ef'
            }
          },
          {
            loader: 'thread-loader'
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
          '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/@vue/cli-service/lib'
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
              cacheIdentifier: '0752b140',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/eslint/lib/api.js',
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
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/.cache/ts-loader',
              cacheIdentifier: '17645579'
            }
          },
          {
            loader: 'thread-loader'
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
              happyPackMode: true
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
              cacheDirectory: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/node_modules/.cache/ts-loader',
              cacheIdentifier: '17645579'
            }
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          BASE_URL: '"/widget://"'
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
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssnanoPlugin(
      {
        sourceMap: false,
        cssnanoOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false
            }
          ]
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    /* config.plugin('named-chunks') */
    new NamedChunksPlugin(
      function () { /* omitted long function */ }
    ),
    /* config.plugin('html-0') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '0'
        ],
        template: 'public/index.html',
        filename: 'pages/error/error.html'
      }
    ),
    /* config.plugin('html-1') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '1'
        ],
        template: 'public/index.html',
        filename: 'pages/login/index.html'
      }
    ),
    /* config.plugin('html-2') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '2'
        ],
        template: 'public/index.html',
        filename: 'pages/member/coupon.html'
      }
    ),
    /* config.plugin('html-3') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '3'
        ],
        template: 'public/index.html',
        filename: 'pages/member/index.html'
      }
    ),
    /* config.plugin('preload-0') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'pages/error/error.html'
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
          'pages/error/error.html'
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
          'pages/login/index.html'
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
          'pages/login/index.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            '1'
          ]
        }
      }
    ),
    /* config.plugin('preload-2') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'pages/member/coupon.html'
        ],
        include: {
          type: 'initial',
          entries: [
            '2'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-2') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'pages/member/coupon.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            '2'
          ]
        }
      }
    ),
    /* config.plugin('preload-3') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'pages/member/index.html'
        ],
        include: {
          type: 'initial',
          entries: [
            '3'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-3') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'pages/member/index.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            '3'
          ]
        }
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/public',
          to: '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            'public/index.html',
            'public/index.html',
            'public/index.html',
            'public/index.html'
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        vue: true,
        tslint: false,
        formatter: 'codeframe',
        checkSyntacticErrors: true
      }
    ),
    {
      apply: function () { /* omitted long function */ }
    }
  ],
  entry: {
    '0': [
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/src/pages/error/error/index.ts'
    ],
    '1': [
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/src/pages/login/index/index.ts'
    ],
    '2': [
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/src/pages/member/coupon/index.ts'
    ],
    '3': [
      '/Users/liujianrong/Desktop/my-projects/apicloud-staging/apicloud-staging/src/pages/member/index/index.ts'
    ]
  }
}
