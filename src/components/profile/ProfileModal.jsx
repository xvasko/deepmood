import React from 'react';

import ReactModal from 'react-modal';
import { ProfileForm } from '../../containers-redux/profile/ProfileForm'
import { Avatar } from '../../containers-redux/profile/Avatar'

ReactModal.setAppElement('#root');

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : '20px 60px',
    }
};

export class ProfileModal extends React.Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={true}
                style={customStyles}
            >
                <div className="row">
                    <div className="col-12">
                        <h4 class="card-title">Profile</h4>
                        <Avatar height={'285px'}/>
                        <ProfileForm />
                        <br/>
                        <button className="btn btn-secondary" onClick={() => this.props.onCloseProfile()}>Close</button>
                    </div>
                </div>
            </ReactModal>
        );
    }
}