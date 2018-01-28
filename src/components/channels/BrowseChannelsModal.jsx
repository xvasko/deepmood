import React from 'react';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export class BrowseChannelsModal extends React.Component {

    joinChannel(e, channel) {
        e.preventDefault();
        let newUsers = JSON.parse(channel.customData).users
        newUsers.push(this.props.userEmail)
        this.props.onJoinChannel(channel.id, channel.name, JSON.stringify(newUsers))
    }

    decorateChannel(channel) {
        let userChannels = this.props.userChannels;
        if(userChannels.includes(channel.id)) {
            return <li key={channel.id}><b>{channel.name}</b> <i>(already in channel)</i></li>
        } else {
            return <li key={channel.id}><b>{channel.name}</b> <a href='/' onClick={(e) =>this.joinChannel(e, channel)}>join channel</a></li>
        }
    }

    render() {
        let channels = this.props.channels.map(channel => this.decorateChannel(channel))

        return (
            <ReactModal
                isOpen={this.props.isOpen}
            >
                <h2>Browse channels</h2>
                <ul>
                    {channels}
                </ul>
                <button className='btn btn-secondary' onClick={() => this.props.onCloseBrowseModal()}>Close Modal</button>
            </ReactModal>
        );
    }
}