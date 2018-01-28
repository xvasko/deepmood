import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './login/LoginPage';
import { AuthenticatedRoute } from './app/AuthenticatedRoute';
import { AuthenticatedPage } from './app/AuthenticatedPage'
import { RegisterPage } from './login/RegisterPage'

export const LayoutSelector = (props) => (
    <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <AuthenticatedRoute component={AuthenticatedPage} isAuthenticated={props.isAuthenticated} />
    </Switch>
);

