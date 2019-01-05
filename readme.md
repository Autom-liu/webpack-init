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

## 对html编译

> npm i --save-dev html-webpack-plugin

- title

生成html文件的标题

- filename

就是html文件的文件名，默认是index.html

- template

指定你生成的文件所依赖哪一个html文件模板，模板类型可以是html、jade、ejs等。但是要注意的是，如果想使用自定义的模板文件的时候，你需要安装对应的loader哦。

- inject

	- true 默认值，script标签位于html文件的 body 底部
	- body script标签位于html文件的 body 底部
	- head script标签位于html文件的 head中
	- false 不插入生成的js文件，这个几乎不会用到的

- chunks

chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件

- favicon

给你生成的html文件生成一个 favicon ,值是一个路径

## 生成公共html文件

需要安装html-loader

> npm i html-loader --save-dev
