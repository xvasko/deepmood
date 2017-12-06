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

    render() {
        var channelName = this.props.channelName ?
            <div>
                <strong>#{this.props.channelName}</strong>
                <a href='#' onClick={(e) => this.handleInvite(e)}>Invite users</a>
            </div>
            : "no active channel"

        return (
            <div style={style}>
                {channelName}
            </div>
        )
    }
}