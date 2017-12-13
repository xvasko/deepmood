import React from 'react';
import { Link } from 'react-router-dom'

export const SidebarItem = (props) => {
    return (
            <li>
                <Link to={`${props.channelName}`} onClick={() => props.onClick(props.channelId)}>{props.channelName}</Link>
            </li>
    );
}