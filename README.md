# Webpack multiple entry

基于 webpack 实现的脚手架。

主要使用 `extract-text-webpack-plugin` 实现 `js` 、`css` 公共代码提取，`html-webpack-plugin` 实现 `html` 多入口，`sass-loader` 实现 `sass` 编译，`postcss-loader` 配置 `autoprefixer` 实现自动添加浏览器兼容前缀，删除~~`html-withimg-loader` 实现 `html` 内引入图片版本号添加和模板功能，~~`art-template`实现`html`模板功能，具有 layout 母模板(布局模板)功能更加强大、同时通过修改解析规则界定符支持浏览器端使用 `art-template-web.js`，babel-loader` 实现 `ES6` 转码功能，`imagemin` 实现图片优化压缩， `happypack` 多线程加速构建速度。

## 使用

### 安装

```
npm install
```

### 开发

```
npm start
```


### 构建

| 命令              | 说明           |
| --------------- | ------------ |
| `npm run dev`   | 开发环境构建，不压缩代码 |
| `npm run build` | 生产环境构建，压缩代码  |



```



## License

[ISC](./LICENSE) © 2017 [givebest](https://github.com/givebest)



