import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Browse, Home, Signin, Signup} from './pages';

export function App() {
    return (
        <Router basename='/netflix-clone-react-scrimba'>
            <Switch>
                <Route path={ROUTES.SIGN_IN}>
                    <Signin />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <Signup />
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <Browse />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
