### vue3 支持 Vue Developer Tools

- 小程序端
  > 已初步支持，目前还未支持 setup 下的数据
- app 端
  > TODO
- web 端
  > TODO
- HBuilderX 插件
  > 开发一个 HBuilderX 插件，整合`shell-electron`的`app.html`+`app.js` 和 `shell-hbuilderx/dist/devtools`

### 仓库：

- 编译器：https://github.com/dcloudio/uni-app/tree/next/packages/uni-vue-devtools
- 运行时：https://github.com/fxy060608/vue-devtools/tree/uni-app

> 在运行时仓库 https://github.com/fxy060608/vue-devtools/tree/uni-app 执行 `yarn build`
> 将 `packages/shell-hbuilderx/build` 中的文件，同步至 `packages/uni-vue-devtools/lib` 下
> 将 `packages/shell-hbuilderx/dist/devtools` 中的`devtools.js`，同步至新增的 HBuilderX `Vue Developer Tools` 插件
