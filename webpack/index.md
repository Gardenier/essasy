https://blog.csdn.net/hsany330/article/details/53413427

https://cloud.tencent.com/developer/article/1356611

####Webpack


* 1、weback3 vs webpack4 
   * mode参数
   * 移除loaders，使用rules
   * 移除CommonsChunkPlugin，用optimization.splitChunks和optimization.runtimeChunk来代替
   * ExtractTextWebpackPlugin调整，使用mini-css-extract-plugin，production模式，增加 minimizer

* 2. loaders vs plugin     
   * loader加载解析非js文件；plugin扩展webpack功能
* 3. webpack 构建流程
   * 初始化参数，从配置文件和shell语句中读到的参数合并，得到最后的参数
   * 开始编译： 用合并的参数初始化complier对象，加载所有配置的插件，执行run方法开始编译
   * 确定入口，通过entry找到入口文件
   * 编译模块，从入口文件触发，调用所有配置的loader对模块解析，再找到该模块依赖的模块进行处理
   * 完成模块编译，得到每个模块编译完成之后的内容和依赖关系
   * 输出资源，根据入口和模块间的依赖关系，组装成一个个包含多个模块的chunk，再把每个chunk转换成一个单独的文件加载到输出列表
   * 输出完成，确定输出路径和文件名，把内容写到文件系统
   * ps： 以上过程中，webpack会在特定的时间点广播输出特定的事件，
* 4. 热加载执行原理 https://blog.csdn.net/sinat_17775997/article/details/83662133
   * 基本实现原理，是在构建bundle的时候，插入一段HMR runtime的js和一段和服务器沟通的js，文件修改会触发webpack的重新构建，服务器通过想浏览器发送更新消息，浏览器通过jsonp拉取更新的模块文件，jsonp的回调触发模块热更新替换逻辑。
   * 实现
      * 服务器构建，推送更新消息
      * 浏览器模块更新
      * 模块更新后页面渲染
    * 构建
       * 通过内置的 HotModuleReplacementPlugin 插件实现，构建过程中热加载相关逻辑都在这个插件中，主要两部分：
          * HRM runtime逻辑注入
          * 找到修改的模块，生成一个补丁js文件和更新描述json文件
       * HRM runtime主要是定义了jsonp callback方法，这个方法触发模块更新，并且对模块新增一个module.hot相关api，这个api可以让开发者自定义页面更新逻辑
* 5. 利用webpack优化前端性能
   * 压缩代码   
      * uglifyJsPlugin 压缩js
      * mini-css-extract-plugin 压缩css
   * 利用CDN加速，将引用的静态资源修改为CDN上对应的路径，可以利用webpack对于output参数和loader的publicpath参数来修改资源路径
   * 删除死代码（tree shaking），css需要使用Purify-CSS  https://segmentfault.com/a/1190000012794598 https://juejin.im/post/5a4dc842518825698e7279a9
   * 提取公共代码。webpack4移除了CommonsChunkPlugin (提取公共代码)，用optimization.splitChunks和optimization.runtimeChunk来代替
* webpack-dev-server和http服务器如nginx的区别
   * webpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务对开发更加简单高效。
* bundle:用webpack打包出来的文件；
* chunk：webpack在进行模块的依赖分析的时候，代码分割出来的代码块
* module:开发中的单个模块


