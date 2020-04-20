# init

> Vue2.x  初始化项目，项目功能：屏幕自适应（非响应式），axios二次封装，开发与生产环境接口自动切换，快速切换页面取消未完成接口请求等。





### 自适应插件配置


##### 1.配置px2rem-loader

  修改build/utils.js  

```javascript
 const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  // pxrem转换
  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
        remUnit: 192, //pcrem单元 浏览器设计图页面宽度1920     
        // remUnit: 75, //移动端单元  ui设计图宽度750   
    },
};

  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS
    ? [cssLoader, px2remLoader]
    : [cssLoader ];

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath:'../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }
```
##### 6.修改flexible.js

```javascript
//找到node_modules文件夹中的flexible.js文件
//找到refreshRem函数
function refreshRem(){
      var width = docEl.getBoundingClientRect().width;
      if (width / dpr > 540) {
          width = width * dpr; //pc端不做限制
          //width = 540 * dpr; 手机自适应方案 大于540的设置成540
      }
      var rem = width / 10;
      docEl.style.fontSize = rem + 'px';
      flexible.rem = win.rem = rem;
  }
```

##### 7.px2rem-loader使用

```javascript
//直接写px，编译后会直接转化成rem ---- 除开下面两种情况，其他长度用这个
//在px后面添加/*no*/，不会转化px，会原样输出。 --- 一般border需用这个
//在px后面添加/*px*/,会根据dpr的不同，生成三套代码。---- 一般字体需用这个
```






