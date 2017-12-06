import React from 'react';

import ReactModal from 'react-modal';
import { ProfileForm } from '../../containers-redux/profile/ProfileForm'
import { Avatar } from '../../containers-redux/profile/Avatar'

ReactModal.setAppElement('#root');

export class InviteUsersModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            users: (props.users ? Array.from(props.users).map(user => user.email) : null),
            searchedUsers: null
        }
    }

    updateSearchedUsers() {
        this.setState({searchedUsers: this.state.users.filter(email => email.startsWith(this.state.term))})
    }

    handleChange(e) {
        this.setState({term: e.target.value}, this.updateSearchedUsers)
    }

    render() {
        var displayedUsers = this.state.searchedUsers ? this.state.searchedUsers.map(user => <li>{user}</li>) : this.state.users.map(user => <li>{user}</li>)
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={true}
            >
                {this.props.channelName} <br/>
                {this.props.channelId} <br/>
                <h2>Search users</h2>
                <input type="text" value={this.state.term} onChange={(e) => this.handleChange(e)} placeholder='search user'/>
                <ul>
                    {displayedUsers}
                </ul>
                <button onClick={() => this.props.onCloseInviteUsersModal()}>Close Modal</button>
                <button onClick={() =>console.log(this.state)}>getState</button>
            </ReactModal>
        );
    }
}