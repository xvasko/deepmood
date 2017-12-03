import React from 'react';
import { RemoveChannelButton } from '../../containers-redux/channels/RemoveChannelButton'
import { Link } from 'react-router-dom'
import { getCleanUsername } from '../../utils/layout/getCleanUsername'
import { getCleanTimeStamp } from '../../utils/layout/getCleanTimeStamp'

export const MainContentItem = (props) => {
    return (
        <li>
            <strong>{getCleanUsername(props.createdBy)}: </strong><i>{getCleanTimeStamp(props.createdAt)}</i>
            <br/>
            {props.value}
        </li>
    );
}