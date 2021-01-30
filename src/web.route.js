import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/Home/Home';
import Signin from './components/SignIn/Signin';

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/signin"
                        component={Signin}
                    />
                </Switch>
            </Router>
        )
    }
}

export default Routing;