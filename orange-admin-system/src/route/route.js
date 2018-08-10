import React from 'react';
import { HashRoute, Route, Switch} from 'react-router-dom';
import NotFound from '../pages/notfound'

export default class Router extends React.Component{
    constructor(props) {
        super(props)
    } 
    
    render(){
        return(
            <HashRoute>
                <Switch>
                    <Route path="/" extact comppnent={Welcome}/>
                    <Route path="/" extact comppnent={Welcome}/>
                    <Route component={NotFound}/> 
                </Switch>
            </HashRoute>
        )
    }
}