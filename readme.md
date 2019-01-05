# 基于webpack打包的电商系统前端项目

## 使用cssloader需要安装

> npm install css-loader style-loader --save-dev

## 为了实现css样式单独打包，还需要安装

> npm install extract-text-webpack-plugin@1.0.1 --save-dev

1.0.1版本就按本配置

2以上版本使用如下配置：

```js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
```

```shell
# for webpack 3 
npm install --save-dev extract-text-webpack-plugin
# for webpack 2 
npm install --save-dev extract-text-webpack-plugin@2.1.2
# for webpack 1 
npm install --save-dev extract-text-webpack-plugin@1.0.1
```
