import React from 'react';

import { getCleanUsername } from '../../utils/layout/getCleanUsername'
import { getCleanTimeStamp } from '../../utils/layout/getCleanTimeStamp'
import { StyledListItem } from './MainContentItem.styles'
import { getCurrentUser } from '../../utils/getCurrentUser'

export class MainContentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editingMessage: this.props.value
        };
    }

    onRemoveMessage() {
        if (window.confirm('Are you sure you want to remove message: ' + this.props.value)) {
            this.props.onRemove(this.props.activeChannelId, this.props.messageId)
        }
    }

    onEditClick() {
        this.setState({isEditing: true})
    }

    onUpdateClick(e) {
        this.props.onUpdate(this.props.activeChannelId, this.props.messageId, this.state.editingMessage);
        this.setState({isEditing: false})
        e.preventDefault()
    }

    onCancelClick(e) {
        e.preventDefault()
        this.setState({isEditing: false})
    }

    handleChange(e) {
        this.setState({editingMessage: e.target.value});
    }

    render() {
        let buttons = null;
        if (getCurrentUser() == this.props.createdBy) {
            buttons =
                <span>
                    <button onClick={() => this.onEditClick()}     style={{float: 'right'}}>edit</button>
                    <button onClick={() => this.onRemoveMessage()} style={{float: 'right'}}>remove</button>
                </span>
        }

        let message;
        if (this.state.isEditing) {
            message =
                <div>
                    <textarea value={this.state.editingMessage} onChange={(e) => this.handleChange(e)} />
                    <a href={'#'} onClick={(e) => this.onUpdateClick(e)}>UPDATE</a>
                    <a href={'#'} onClick={(e) => this.onCancelClick(e)}>CANCEL</a>
                </div>
        } else {
            message = this.props.value;
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
                    {message}
                </div>
            </StyledListItem>
        );
    }
}