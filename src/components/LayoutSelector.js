import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './login/LoginPage';
import { AuthenticatedRoute } from './app/AuthenticatedRoute';
import { AuthenticatedPage } from './app/AuthenticatedPage';

export const LayoutSelector = (props) => (
    <Switch>
        <Route path='/login' component={LoginPage} />
        <AuthenticatedRoute component={AuthenticatedPage} isAuthenticated={props.isAuthenticated} />
    </Switch>
);

