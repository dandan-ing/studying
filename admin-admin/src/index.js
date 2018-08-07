import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from 'page/home';
import Layout from 'component/layout';

class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Layout>
            </HashRouter>
        )
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
