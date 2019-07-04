// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        // 浏览器配置在 .browserslistrc 那里编辑
        autoprefixer: {},
        'postcss-assets': {
            relative: true,
            loadPaths: ['./src/assets/images']
            // css里引用'/src/assets/images'里的图片：background-image: resolve("logo.png");
        },
        'postcss-plugin-px2rem': {
            rootValue: {
                rpx: 100
            }
        }
    }
}
