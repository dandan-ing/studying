# React-route
react-react基础
## 常见的Router
### * 页面Router（浏览器路由）
    window.location.href = "http://www.baidu.com";
    histroy.back();

### * Hash Router
    window.location = "#hash";
    window.onhashchange = function() {
        console.log('current hash:',window.location.hash);
    }

### * H5 Router
推进一个状态
    histroy.pushState('test', 'Title', '/user/index')
页面无刷新，histroy.pushState(名称, 标题（已废弃）, 跳转的地址)，只处理后退，不处理前进；
替换一个状态
    histroy.replaceState('test', 'Title', '/user/index')
    window.onpopState = function(){
        console.log(window.lcoation.href);
        console.log(window.lcoation.pathname);
        console.log(window.lcoation.hash);
        console.log(window.lcoation.search);
    }

## React-Router
版本： react-router-dom@v4.2.2，动态路由，纯react组件；
常见组件：
    <BrowerRouter>,<HashRouter>  路由方式
    <Router>  路由规则
    <Switch>  路由选项
    <Link>,<NavLink>  跳转导航
    <Redirect> 自动跳转


