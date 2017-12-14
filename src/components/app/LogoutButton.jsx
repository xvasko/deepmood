import * as React from 'react';

const LogoutButton = ({ onClick }) => (
    <button style={{marginTop: '10px'}} className='btn btn-info btn-sm' onClick={onClick}>
        Log out
    </button>
)

export { LogoutButton };