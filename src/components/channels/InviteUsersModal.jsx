import React from 'react';

import ReactModal from 'react-modal';
import { ProfileForm } from '../../containers-redux/profile/ProfileForm'
import { Avatar } from '../../containers-redux/profile/Avatar'

ReactModal.setAppElement('#root');

export class InviteUsersModal extends React.Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={true}
            >
                {this.props.channelName} <br/>
                {this.props.channelId} <br/>
                <button onClick={() => this.props.onCloseInviteUsersModal()}>Close Modal</button>
            </ReactModal>
        );
    }
}