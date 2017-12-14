import React from 'react';

import { getCleanTimeStamp } from '../../utils/layout/getCleanTimeStamp'
import { StyledListItem } from './MainContentItem.styles'
import { getCurrentUser } from '../../utils/getCurrentUser'
import { AvatarMessage } from '../profile/Avatar.styles'

export class MainContentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editingMessage: this.props.value,
            displayedName: this.props.createdBy
        };
    }

    componentWillMount() {
        this.props.users.forEach(usr => {
            if (usr.email === this.props.createdBy) {
                this.setState({displayedName: JSON.parse(usr.customData).name})
            }
        })
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
        this.props.onUpdate(this.props.activeChannelId, this.props.messageId, this.state.editingMessage, this.props.customData);
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

    onUpVote() {
        let newCustomData = JSON.parse(this.props.customData)
        newCustomData.upVotes.push(this.props.currentUserEmail)
        newCustomData.downVotes = newCustomData.downVotes.filter(email => email !== this.props.currentUserEmail)
        this.props.onUpdate(this.props.activeChannelId, this.props.messageId, this.props.value, JSON.stringify(newCustomData))
    }

    onDownVote() {
        let newCustomData = JSON.parse(this.props.customData)
        newCustomData.upVotes = newCustomData.upVotes.filter(email => email !== this.props.currentUserEmail)
        newCustomData.downVotes.push(this.props.currentUserEmail)
        this.props.onUpdate(this.props.activeChannelId, this.props.messageId, this.props.value, JSON.stringify(newCustomData))
    }

    getCustomData() {
        return JSON.parse(this.props.customData);
    }

    getAvatarUri() {
        return this.props.usersById.get(this.props.createdBy).avatarUri
    }

    render() {
        let buttons = null;
        let voteButtons =
            <span>
                <button className="btn btn-success btn-sm" onClick={() => this.onUpVote()}   disabled={JSON.parse(this.props.customData).upVotes.includes(this.props.currentUserEmail)}   style={{float: 'right'}}>+</button>{' '}
                <button className="btn btn-danger  btn-sm" onClick={() => this.onDownVote()} disabled={JSON.parse(this.props.customData).downVotes.includes(this.props.currentUserEmail)} style={{float: 'right'}}>-</button>
            </span>
        if (getCurrentUser() === this.props.createdBy) {
            buttons =
                <span>
                    {voteButtons}
                    <button className='btn btn-secondary btn-sm separator' onClick={() => this.onEditClick()}     style={{float: 'right'}}>edit</button>
                    <button className='btn btn-secondary btn-sm' onClick={() => this.onRemoveMessage()} style={{float: 'right'}}>remove</button>
                </span>
        } else {
            buttons = voteButtons
        }
        let message;
        if (this.state.isEditing) {
            message =
                <div>
                    <textarea value={this.state.editingMessage} onChange={(e) => this.handleChange(e)} />
                    <a href={'#'} className='update' onClick={(e) => this.onUpdateClick(e)}>UPDATE</a>
                    <a href={'#'} className='cancel' onClick={(e) => this.onCancelClick(e)}>CANCEL</a>
                </div>
        } else {
            message = this.props.value;
        }
        let thumbs = null;
        if (this.getCustomData().upVotes.length > 0 || this.getCustomData().downVotes.length > 0) {
            thumbs = <span>&#128077; {this.getCustomData().upVotes.length} &#128078; {this.getCustomData().downVotes.length}</span>
        }
        return (
            <StyledListItem>
                <div style={{minHeight: '70px'}}>
                    <AvatarMessage
                        alt='Profile picture'
                        src={this.getAvatarUri()}
                    />
                    <div>
                        <strong>
                            {this.state.displayedName}
                        </strong>
                        ({this.props.createdBy})<b>:</b>
                        <i>
                            {getCleanTimeStamp(this.props.createdAt)}
                        </i>
                        {buttons}
                    </div>
                    <div>
                        {message}
                        <br/>
                        {thumbs}
                    </div>
                </div>
            </StyledListItem>
        );
    }
}