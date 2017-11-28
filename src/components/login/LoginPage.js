import React from 'react';
import { LoginForm } from '../../containers-redux/login/LoginForm';
import { Loader } from '../../containers-redux/shared/Loader'

export const LoginPage = () => {
    return (
        <div>
            <h1>Login page</h1>
            <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
                <LoginForm />
            </Loader>
        </div>
    );
};