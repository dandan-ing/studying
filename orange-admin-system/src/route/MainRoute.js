import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../pages/notfound';
import Admin from '../admin';
import Buttons from '../pages/admin/ui/buttons';
import Home from '../pages/home';
import Modals from '../pages/admin/ui/modals';
import Loadings from '../pages/admin/ui/loadings';
import Notice from '../pages/admin/ui/notice';
import Message from '../pages/admin/ui/message';
import Tab from '../pages/admin/nav/tabs';
import Gallery from '../pages/admin/ui/gallery';
import Carousels from '../pages/admin/ui/carousel';
import LoginForm from '../pages/admin/form/login';
import RegisterForm from '../pages/admin/form/register';
import Paginations from '../pages/admin/data/pagination';

import Tables from '../pages/admin/data/table';

export default class MainRoute extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" render = {()=>{
                        return (
                            <Admin>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/admin/ui/buttons" component={Buttons}/>
                                    <Route path="/admin/ui/modals" component={Modals}/>
                                    <Route path="/admin/ui/loadings" component={Loadings}/>
                                    <Route path="/admin/ui/notice" component={Notice}/>
                                    <Route path="/admin/ui/message" component={Message}/>
                                    <Route path="/admin/nav/tabs" component={Tab}/>
                                    <Route path="/admin/ui/gallery" component={Gallery}/>
                                    <Route path="/admin/ui/carousel" component={Carousels}/>

                                    <Route path="/admin/form/login" component={LoginForm}/>
                                    <Route path="/admin/form/register" component={RegisterForm}/>

                                    <Route path="/admin/data/table" component={Tables}/>
                                    <Route path="/admin/data/pagination" component={Paginations}/>

                                    <Route component={NotFound}/>
                                </Switch>
                            </Admin>
                        )
                    }}/>
                    <Route component={NotFound}/> 
                </Switch>
            </HashRouter>
        )
    }
}