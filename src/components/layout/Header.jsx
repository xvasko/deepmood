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

    render() {
        var actionLink = this.getChannelCustomData().owner === this.props.userEmail
            ? <DeleteChannelLink channelId={this.props.channelId} channelName={this.props.channelName} />
            : <a href='#' onClick={(e) => this.handleLeave(e)}>Leave channel</a>

        var channelName = this.props.channelName ?
            <div>
                <strong>#{this.props.channelName} </strong> <br/>
                <a href='#' onClick={(e) => this.handleInvite(e)}>Invite users</a> {' | '}
                {actionLink} <br/>
            </div>
            : "no active channel"

        return (
            <StyledHeader>
                {channelName}
            </StyledHeader>
        )
    }
}