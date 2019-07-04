# apicloud-ts

## TODO

-   [x] cli 新建组件/页面 文件
-   [ ] 启动开发服务、打包完成后，自动修改 config.xml 的入口配置
-   [ ] 提取公共方法
-   [ ] cli 提取热更新包（根据两个提交的 diff 生成）

## Preview

-   开发体验：与普通 vue 项目基本一致~
-   屏幕适配：使用 rpx，使用时与小程序的 rpx 一样

## Project setup

```
// 基于vue-cli，请先全局安装vue-cli：
yarn global add @vue/cli

// 安装apicloud-cli:
yarn global add apicloud-cli

// 安装本项目的依赖
yarn

// 开启apicloud-wifi
yarn start-wifi

// 同步文件（开发）
yarn sync / yarn sync-all

// 同步文件（打包后）
yarn sync-dist

// 开发服务
yarn dev

// 请自行修改 config.xml 里的入口。。（后面优化成配置项，启动开发服务后自动修改）
<content src="http://192.168.0.101:8080/pages/test/Demo.html"/>
```

## directory structure

```dir
├── README.md
├── babel.config.js
├── cli
│   ├── command
│   │   └── add.ts
│   ├── index.ts
│   ├── template
│   │   ├── component
│   │   │   ├── component.scss.txt
│   │   │   ├── component.ts.txt
│   │   │   ├── component.vue.txt
│   │   │   └── index.ts.txt
│   │   └── page
│   │       └── index.ts.txt
│   ├── tsconfig.json
│   └── util
│       └── getGitUser.ts
├── config.xml
├── dist    // 打包生成
│   ├── config.xml
│   ├── css
│   │   ├── 0.9dd719f2.css
│   │   ├── 1.9dd719f2.css
│   ├── index.html
│   ├── js
│   │   ├── 3.81061d83.js
│   │   ├── 3.81061d83.js.map
│   │   ├── chunk-vendors.7a32d01e.js
│   │   └── chunk-vendors.7a32d01e.js.map
│   └── pages
│       └── test
│           └── Demo.html
├── output.js
├── package.json
├── postcss.config.js
├── public
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── common   // 公共方法
│   │   └── util.ts
│   ├── components  // 存放公共组件
│   │   ├── Avatar
│   │   │   ├── Avatar.scss
│   │   │   ├── Avatar.ts
│   │   │   ├── Avatar.vue
│   │   │   └── index.ts
│   │   └── base.ts
│   ├── main.ts
│   ├── pages   // 存放页面，注意组件不要放进这个文件夹，组件请放 src/components
│   │   └── test
│   │       └── Demo
│   │           ├── components  // 存放页面相关组件
│   │           │   └── Avatar
│   │           │       ├── Avatar.scss
│   │           │       ├── Avatar.ts
│   │           │       ├── Avatar.vue
│   │           │       └── index.ts
│   │           ├── Demo.scss
│   │           ├── Demo.ts
│   │           ├── Demo.vue
│   │           └── main.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   └── style
│       └── base
│           └── base.scss
├── tsconfig.json
├── typings  // 存放typescript 声明文件
│   └── globals.d.ts
├── vue.config.js  // vue-cli配置文件，可自行根据实际情况修改
├── yarn-error.log
└── yarn.lock
```

### cli

```
// 新建页面
yarn cli gen src/pages/member/MemberDetail -p

// 新建组件
yarn cli gen src/components/member/Avatar
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
