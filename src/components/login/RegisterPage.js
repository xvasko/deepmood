import React from 'react';
import { RegisterForm } from '../../containers-redux/login/RegisterForm'
import Link from 'react-router-dom/es/Link'

export const RegisterPage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <h1>Register page</h1>
                    <RegisterForm/>
                    Already have an account? <Link to={'/login'}>Login here!</Link>
                </div>
            </div>
        </div>
    );
};