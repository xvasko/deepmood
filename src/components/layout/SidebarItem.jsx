import React from 'react';
import { Link } from 'react-router-dom'

export const SidebarItem = (props) => {
    let active = null;
    if (props.activeChannel === props.channelId) {
        active = 'active';
    }
    return (
        <li>
            <Link
                className={active}
                to={`${props.channelName}`}
                onClick={() => props.onClick(props.channelId)}
            >
                {props.channelName}
            </Link>
        </li>
    );
}