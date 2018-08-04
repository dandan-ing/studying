# 项目案例

## 描述
    看视频学习，模仿点评移动端网页，实现首页，切换城市，登录，用户中心页，产品详情页，涉及各页面跳转，状态扭转等相关操作。
    传送门：https://www.imooc.com/article/16082

## 使用技术栈
    React + Redux+ React-Router 4 + Webpack4 + axiso + mockjs

## 如何使用
    1. git clone 
    2. yarn install
    3. 运行 yarn run start

## 目录结构
|
|--app 
|   |--actions       //redux action
|   |--components    //抽象组件
|   |--config        //配置类相关，比如localStroge
|   |--constants     //redux中type常量
|   |--containers     //智能组件
|   |--helper         //系统工具库，http.js等
|   |--reducers      //redux reducers
|   |--router        //路由
|   |--static        //静态资源
|   |--store         //redux store
|--mock      //mock数据
|--package.json 
|--webpack.config.js       //打包等相关配置
|

## 技巧
1. 程序中所有的等于判断要用===，除了obj.c==null这种情况；
2. 加载更多功能（上拉）进行节流处理，节省性能；
3. 智能组件与抽象组件的理解与运用；
4. 路由相关知识点；


## 错误类型
1. 经常犯低级错误，比如编写格式不对导致报错，往往原因很难找，需要花费很长时间来定位
总结教训：在开发某块功能时，分功能点检查当前运行是否正常，打印日志，注释代码等分析。

2. route4 路由配置参数
<Route path="/search" exact={true} component={Search} />
版本3中：path="/search/:type/(:keyword)"
版本4中：path="/search/:type/:keyword?" 参数获取：this.props.match.params.type
版本带来的问题很多，因此在开始前，需要了解不同版本的差异及使用方法。

3. route4中页面跳转问题，跳转不再支持hashHistory.push()
解决办法：
（1）使用window.location.href进行跳转，不符合React单页面应用，会重新加载css等文件，执行后退等操作亦会加载文件。在与redux结合使用时，会导致状态清空，获取不到前一个state。不推荐！！
（2）使用withRuter
    import React from "react";
    import {withRouter} from "react-router-dom";

    class MyComponent extends React.Component {
    ...
    myFunction() {
        this.props.history.push("/some/Path");
    }
    ...
    }
    export default withRouter(MyComponent);
官方推荐使用！

（3）使用Context
    import React from "react";
    import PropTypes from "prop-types";

    class MyComponent extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
    }
    ...
    myFunction() {
        this.context.router.history.push("/some/Path");
    }
    ...
    }
    尽量不用，react不推荐使用contex，在未来版本中有可能被抛弃！！
（4）hack
因V4中BrowserRouter自己创建了histroy，且不让引用，因为自己创建history，在需要的地方调用自己创建的history。
a.创建history
    // src/history.js
    import createHistory from 'history/createBrowserHistory';

    export default createHistory();
b.使用Router组件
    // src/index.js
    import { Router, Link, Route } from 'react-router-dom';
    import history from './history';

    ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        ...
        </Router>
    </Provider>,
    document.getElementById('root'),
    );
c.在需要的地方调用
    import history from './history';

    export function addProduct(props) {
    return dispatch =>
        axios.post(`xxx`, props, config)
        .then(response => {
            history.push('/cart'); //这里
        });
    }
该方法还是运用的Router，并没有使用BrowserRouter；

4. 页面回退
解决办法：
（1）使用history，具体实现见3中（2）:this.props.history.goBack();
（2）window.location.back() 不推荐。

## 遗留问题
1. redux的使用待加强，状态管理；
2. 复杂组件的编写
