import React from 'react';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export class BrowseChannelsModal extends React.Component {

    render() {
        //var searchedUsers = this.state.searchedUsers ?
        //    this.decorateUsers(this.state.searchedUsers) :
        //    this.decorateUsers(this.state.users)
        return (
            <ReactModal
                isOpen={this.props.isOpen}
            >
                <h2>Browse channels</h2>
                <ul>
                </ul>
                <button onClick={() => this.props.onCloseBrowseModal()}>Close Modal</button>
            </ReactModal>
        );
    }
}