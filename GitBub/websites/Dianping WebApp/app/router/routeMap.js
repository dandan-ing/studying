import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import App from 'Containers/App'
import Home from 'Containers/Home/home'
import City from 'Containers/City/city'
import Search from 'Containers/Search/search'
import Detail from 'Containers/Detail/detail'
import NotFound from 'Containers/404'
import Login from 'Containers/Login/login'
import User from 'Containers/User/user'

export default class RouteMap extends React.Component{

    render(){
        return(
            <HashRouter>
                <Switch>
                    <App>
                        <Route path="/" exact component={Home} />
                        <Route path="/city" component={City} />
                        <Route path="/search/:type/:keyword?" component={Search} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="/login/:redirectlink?" component={Login} />
                        <Route path="/user" component={User} />
                        <Route path="*" component={NotFound}/>
                    </App>
                </Switch>
            </HashRouter>
        )
    }
}