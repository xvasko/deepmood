import React from 'react';
import { RemoveChannelButton } from '../../containers-redux/channels/RemoveChannelButton'

export const SidebarItem = (props) => {
    return (
            <li>
                {props.channelName}
                <RemoveChannelButton channelId={props.channelId} channelName={props.channelName} />
            </li>
    );
}