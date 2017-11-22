import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './login/LoginPage';
import { AuthenticatedRoute } from './app/AuthenticatedRoute';
import { DummyComponent } from './app/DummyComponent';

export const LayoutSelector = (props) => (
    <Switch>
        <Route path='/login' component={LoginPage} />
        <AuthenticatedRoute path='/' component={DummyComponent} isAuthenticated={props.isAuthenticated} />
    </Switch>
);

