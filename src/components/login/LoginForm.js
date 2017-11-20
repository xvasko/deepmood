import React from 'react';

export const LoginForm = (props) => {
    return (
        <form>
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