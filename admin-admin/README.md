#
描述：

## 基础知识储备
### 1. 工具使用
#### （1）yarn 
下载速度比npm快，版本锁定，缓存机制；
yarn init   (npm init)
yarn intall (npm install)
yarn global add xxx@xx.x    (npm install xxx@XX.X -g)
yarn add xx@xx.x    (npm install xx@xx.x --save)
yarn remove xx@xx.x (npm uninstall xx@xx.x)
yarn run start  (npm run install)

#### （2）webpack
html-》html-webpack-plugin
脚本-》babel+babel-preset-react
样式-》css-loader+sass-loader
图片/字体-》url-loader+file-loader

html-webpack-plugin   html单独打包成文件
extract-text-webpack-plugin 样式打包成单独文件
CommonsChunkPlugin  提出通用模块

webpack-dev-server为webpack提供web服务；更改代码自动刷新，路径转发；解决多版本共存问题。

### 2. 页面加载过程
浏览器加载html页面的理解；

### 3. ES6基础
#### （1）let和const
与var的区别

#### （2）箭头函数
参数=>表达式/语句块；
无独立的作用域，继承外部作用于；
不能用作构造函数；
没有prototype属性；

#### （3）字符串模板
反单引号；支持多行；支持变量，函数，表达式循环嵌套；

#### （4）Promise
解决了异步回调中的嵌套调用。
    new Promise((resolve, reject)=>{
        $.ajax({
            url: "xxx.com",
            type: 'get',
            success(res){
                resolve(res);
            },
            error(err){
                reject(err);
            }
        })
    }
    .then(res)=>{
        console.log("success");
    }
    .(err)=>{
        console.log("err");
    })

    链式调用（串式执行无需嵌套）
    propmiseFn1.then(()=>{
        console.log("propmiseFn1");
        return propmiseFn2;
    }).then(()=>{
        console.log("propmiseFn2");
    })

#### （5）面向对象
类；类的继承extends；构造函数；
变量名可以直接用作对象的属性名称（例如let name="ss";const obj={name}）；
对象里的方法可以简写（例如getName(){return this.name;}）；
表达式作为属性名或方法（例如['get'+'age'](){return this.age}）；
Object.assign(obj1,obj2,...):浅拷贝

#### （6）模块化
解决一个复杂问题时自顶向下逐层把系统划分成若干个模块得过程。export，import
与CommonJs，AMD，CMD的区别；
export defalut xx；导出的模块，在导入时可任意定义成其他名称；

#### （7）Others:
    <script type="module" src=""/>可以让浏览器识别es6

### 4. 本地存储
#### （1）cookie
在客户端存储用户请求信息；
分号分隔的多个key-value字段；
存储在本地的加密文件；
name：cooki名称；
domain：cookie生效的域名；
path：cookie生效的路径；
expires：cookie过期时间（不指定关闭窗口即失效）；
HttpOnly：标示为服务设置，用户不能更改（预防cookie被劫持），例如sessionId；
cookie的查看，添加，删除，修改；

#### （2）session
服务端保存请求信息的机制；
sessionId通常存储在cookie里；
会话由浏览器控制，会话结束，session失效；

#### （3）localStorage
有域名限制；key-value；没有过期时间；浏览器关闭不会消失；
添加：window.localStorage.setItem('name','Tom')
查看：window.localStorage.getItem('name')
删除：window.localStorage.removeItem('name','Tom')
查看所有的内容：window.localStorage
存对象：window.localStorage.setItem('name',JSON.stringfy({'name':Tom'}))

#### （4）sessionStorage
与localStorage类似，浏览器关闭，即失效；
添加：window.sessionStorage.setItem('name','Tom')
查看：window.sessionStorage.getItem('name')
删除：window.sessionStorage.removeItem('name','Tom')
查看所有的内容：window.sessionStorage

### 5. 环境安装配置
#### （1）webpack
安装：yarn add webpack@2.7
配置：webpack.config.js
##### 1. 配置入口，出口文件
##### 2. 安装配置html文件处理
插件htmlwebpackplugin yarn add html-webpack-plugin@3.2.0
##### 3. 安装配置脚本处理
babel相关，yarn add babel-core@6.26.0 babel-preset-env@1.6.1 babel-load@7.1.4 babel-preset-react@6.24.1
安装react yarn add react@16.3.2
##### 4. 安装配置css处理
yarn add style-loader@0.21.0 css-loader@0.28.11
##### 5. 安装extract-text-webpack-plugin  
yarn add extract-text-webpack-plugin@3.0.2
配置css
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:'css-loader'
        })
    }
##### 6. 安装配置sass 
yarn add sass-loader@6.0.6 --dev
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    }
    yarn add node-sass@4.7.2 --dev
Tip:安装node-sass时，报错gyp verb `which` failed  python2 { Error: not found: python2；
处理方法：
安装cnpm    npm install -g cnpm --registry=https://registry.npm.taobao.org
使用cnpm安装node-scss   cnpm install node-sass
##### 7. 图片处理
yarn add file-loader@1.1.6 url-loader@0.6.2 --dev
##### 8. 安装字体图标
    yarn add font-awesome 
    配置：
    {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit:8192
                }
            }
        ]
    }
##### 9. 引用webpack提出公共模块
    webpack.optimiza.CommmonsChunkPlugin
##### 10. 文件归类，js文件放于js文件夹等
##### 11. 开发环境热加载，安装webpack-dev-server
    yarn add webpack-dev-server@2.9.7 --dev
    可指定端口号
#### （2） 配置scripts
在package.json中添加配置scripts

### 6. Git操作
    git status 查看哪些文件有变化
    git diff 查看具体变化 按q退出
    git difftool 同时查看文件的两个版本，比较其变化，按:q退出
    git checkout -b admin-v2 切换分支至admin-v2
    git add .   添加所有文件
    git commit -am "commit" 添加提交备注信息
    git push origin master 提交至远程分支master
    git tag ""
    git pull request 在界面操作，可关闭git










