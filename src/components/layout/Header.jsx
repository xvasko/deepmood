import * as React from 'react';
import { MessagesForm } from '../../containers-redux/messages/MessagesForm'
import { MainContentItem } from '../../containers-redux/layout/MainContentItem'
import { DeleteChannelLink } from '../../containers-redux/channels/DeleteChannelLink'
import { StyledHeader } from './Header.styles'

export class Header extends React.Component {

    handleInvite(e) {
        e.preventDefault();
        this.props.onOpenInviteUsersModal();
    }

    handleLeave(e) {
        e.preventDefault();
        var customData = this.getChannelCustomData()
        if (this.props.userEmail === customData.owner) {
            alert('Can\'t leave channel. You are the owner.');
            return;
        } else {
            this.props.onLeaveChannel(this.props.channelId, JSON.stringify(customData.users.filter(usr => usr !== this.props.userEmail)))
        }
    }

    getChannelCustomData() {
        return this.props.channel ? JSON.parse(this.props.channel.customData) : ''
    }

    handleChannelNameChange(e) {
        e.preventDefault()
        var newChannelName = window.prompt('Rename channel ' + this.props.channelName, '');

        if (newChannelName == null) {
            return;
        } else if (newChannelName == '') {
            window.alert('Invalid channel name')
        } else {
            this.props.onChannelChangeName(newChannelName);
        }
    }

    render() {
        let actionLink = this.getChannelCustomData().owner === this.props.userEmail
            ? <DeleteChannelLink channelId={this.props.channelId} channelName={this.props.channelName} />
            : <a href='#' onClick={(e) => this.handleLeave(e)}>Leave channel</a>

        let editButton = this.getChannelCustomData().owner === this.props.userEmail
            ? <a href='#' onClick={(e) => this.handleChannelNameChange(e)}>&#9998;</a>
            : null

        let channelName = this.props.channelName ?
            <div>
                <strong>#{this.props.channelName} </strong> {' '} {editButton} <br/>
                <a href='#' onClick={(e) => this.handleInvite(e)}>Invite users</a> {' | '}
                {actionLink} <br/>
            </div>
            : <h4 style={{margin: '10px'}}>select a channel</h4>

        return (
            <StyledHeader>
                {channelName}
            </StyledHeader>
        )
    }
}