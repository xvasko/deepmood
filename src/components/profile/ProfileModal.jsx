import React from 'react';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export class ProfileModal extends React.Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={true}
            >
                penis
                <button onClick={() => this.props.onCloseProfile()}>Close Modal</button>
            </ReactModal>
        );
    }
}