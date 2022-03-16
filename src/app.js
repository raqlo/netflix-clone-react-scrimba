import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Browse, Home, Signin, Signup} from './pages';
import {useAuthListener} from "./hooks";
import { RedirectIfLoggedIn, ProtectedRoute } from './helpers/routes';


export function App() {
    const { user } = useAuthListener();

    return (
        <Router basename='/netflix-clone-react-scrimba'>
            <Switch>
                <RedirectIfLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <Signin />
                </RedirectIfLoggedIn>
                <RedirectIfLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <Signup />
                </RedirectIfLoggedIn>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
                <RedirectIfLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} >
                    <Home />
                </RedirectIfLoggedIn>
            </Switch>
        </Router>
    );
}
