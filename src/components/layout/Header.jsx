import * as React from 'react';
import { MessagesForm } from '../../containers-redux/messages/MessagesForm'
import { MainContentItem } from '../../containers-redux/layout/MainContentItem'

var style = {
    margin: '0px 0px 0px 240px',
    height: '50px',
    background: 'white',
    borderBottom: '1px solid gray'
};

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
        var channelName = this.props.channelName ?
            <div>
                <strong>#{this.props.channelName} </strong>
                <a href='#' onClick={(e) => this.handleInvite(e)}>Invite users</a>
                <a href='#' onClick={(e) => this.handleLeave(e)}>Leave channel</a>
            </div>
            : "no active channel"

        return (
            <div style={style}>
                {channelName}
            </div>
        )
    }
}