import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from 'page/home';
import Login from 'page/login';
import Layout from 'component/layout';

class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render= { props => (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Layout>
                    )}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
