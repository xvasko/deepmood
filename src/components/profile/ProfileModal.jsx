import React from 'react';

import ReactModal from 'react-modal';
import { ProfileForm } from '../../containers-redux/profile/ProfileForm'

ReactModal.setAppElement('#root');

export class ProfileModal extends React.Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={true}
            >
                <ProfileForm />

                <br/><br/><br/>
                <button onClick={() => this.props.onCloseProfile()}>Close Modal</button>
            </ReactModal>
        );
    }
}