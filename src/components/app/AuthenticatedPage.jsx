import * as React from 'react';
import { LogoutButton } from '../../containers-redux/app/LogoutButton'
import { CreateChannelButton } from '../../containers-redux/channels/CreateChannelButton'

export const AuthenticatedPage = () => (
    <div>
        <div>
            <span>This is header</span>
            <LogoutButton />
        </div>
        <div>
            <span>this is body</span>
            <br/>
            <CreateChannelButton />
        </div>
    </div>
);