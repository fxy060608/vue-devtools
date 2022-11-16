### vue3 支持 Vue Developer Tools

- 小程序端
  > 已初步支持，目前还未支持 setup 下的数据
- app 端
  > 编译器已支持，通道已打通，需调整部分运行时代码，获取组件树列表
- web 端
  > 编译器已支持，通道已打通，需调整部分运行时代码，获取组件树列表
- HBuilderX 插件
  > TODO 开发一个 HBuilderX 插件，整合`shell-electron`的`app.html`+`app.js` 和 `shell-hbuilderx/dist/devtools`

### 仓库：

- 编译器：https://github.com/dcloudio/uni-app/tree/next/packages/uni-vue-devtools
- 运行时：https://github.com/fxy060608/vue-devtools/tree/uni-app

> 在运行时仓库 https://github.com/fxy060608/vue-devtools/tree/uni-app 执行 `yarn build`
> 将 `packages/shell-hbuilderx/build` 中的文件，同步至 `packages/uni-vue-devtools/lib` 下
> 将 `packages/shell-hbuilderx/dist/devtools` 中的`devtools.js`，同步至新增的 HBuilderX `Vue Developer Tools` 插件

### HBuilderX 工程
> 开发 HBuilderX 插件，接收环境变量
`__VUE_PROD_DEVTOOLS__`：是否启用Vue Developer Tools，值为字符串 `true`
`__VUE_DEVTOOLS_HOST__`：devtools 的 IP 地址，默认：`localhost`
`__VUE_DEVTOOLS_PORT__`：devtools 的 PORT，默认：`8098`

### cli 工程
1. 手动安装依赖 `@dcloudio/uni-vue-devtools`
2. 运行命令传入`--devtools`参数，如：`yarn dev:mp-weixin --devtools`
- 可选参数:
    + `--devtoolsHost` : 默认：localhost，自定义 devtools 的请求 host，如`--devtoolsHost=192.168.12.184`
    + `--devtoolsPort` : 默认：8098，自定义 devtools 的请求 port，如`--devtoolsPort=8098`
