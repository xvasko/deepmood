import React from 'react';

export const LoginForm = (props) => {
    return (
        <form style={{minHeight: '250px'}}>
            <label>Username / Email</label>
            <input type='email'/>
            <br/>
            <button
                type='button'
                onClick={props.onSubmit}
            >
                Log in
            </button>
        </form>
    );
};