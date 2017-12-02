import React from 'react';
import { RemoveChannelButton } from '../../containers-redux/channels/RemoveChannelButton'
import { Link } from 'react-router-dom'

export const SidebarItem = (props) => {
    return (
            <li>
                <Link to={`${props.channelName}`} onClick={() => props.onClick(props.channelId)}>{props.channelName}</Link>
                <RemoveChannelButton channelId={props.channelId} channelName={props.channelName} />
            </li>
    );
}