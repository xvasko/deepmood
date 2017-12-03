import React from 'react';

import { getCleanUsername } from '../../utils/layout/getCleanUsername'
import { getCleanTimeStamp } from '../../utils/layout/getCleanTimeStamp'
import { StyledListItem } from './MainContentItem.styles'
import { getCurrentUser } from '../../utils/getCurrentUser'

export class MainContentItem extends React.Component {
    removeMessage() {
        if (window.confirm('Are you sure you want to remove message: ' + this.props.value)) {
            this.props.onRemove(this.props.activeChannelId, this.props.messageId)
        }
    }

    render() {
        let buttons = null;
        if (getCurrentUser() == this.props.createdBy) {
            buttons = <button onClick={() => this.removeMessage()} style={{float: 'right'}}>remove</button>
        }

        return (
            <StyledListItem>
                <div>
                    <strong>
                        {getCleanUsername(this.props.createdBy)}:
                    </strong>
                    <i>
                        {getCleanTimeStamp(this.props.createdAt)}
                    </i>
                    {buttons}
                </div>
                <div>
                    {this.props.value}
                </div>
            </StyledListItem>
        );
    }
}