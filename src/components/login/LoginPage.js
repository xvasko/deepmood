import React from 'react';
import { LoginForm } from '../../containers-redux/login/LoginForm';
import { Loader } from '../../containers-redux/shared/Loader'
import Link from 'react-router-dom/es/Link'
import { Errors } from '../../containers-redux/shared/Errors'

export const LoginPage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 offset-4'>
                <h1>Login page</h1>
                <Loader stateLoadingSelector={state => state.authentication.isAuthenticating}>
                    <LoginForm />
                </Loader>
                Don't have an account? <Link to={'/register'}>Register here!</Link>
                <Errors />
                </div>
            </div>
        </div>
    );
};