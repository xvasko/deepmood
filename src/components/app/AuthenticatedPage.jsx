import * as React from 'react';
import { LogoutButton } from '../../containers-redux/app/LogoutButton'

export const AuthenticatedPage = () => (
    <div>
        <div>
            <span>This is header</span>
            <LogoutButton />
        </div>
    </div>
);