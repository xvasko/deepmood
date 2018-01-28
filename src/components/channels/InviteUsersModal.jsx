import React from 'react';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

let style= {
    padding: '20px'
}

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

    decorateUsers(users) {
        let channelUsers = this.getChannelUsers();
        return users.map(user => {
            if(channelUsers.includes(user)) {
                return <li key={user}><b>{user}</b> <i>(already in channel)</i></li>
            } else {
                return <li key={user}><b>{user}</b> <a href='/' onClick={(e) => this.inviteUser(e, user)}>invite</a></li>
            }
        })
    }

    getChannelUsers() {
        return this.props.channel ? JSON.parse(this.props.channel.customData).users : ''
    }

    inviteUser(e, user) {
        e.preventDefault()
        let users = this.getChannelUsers()
        users.push(user)
        this.props.onUserInvite(this.props.activeChannel, this.props.channel.name, JSON.stringify(users))
    }

    render() {
        let searchedUsers = this.state.searchedUsers ?
            this.decorateUsers(this.state.searchedUsers) :
            this.decorateUsers(this.state.users)
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={true}
                shouldReturnFocusAfterClose={false}
            >
                <h2>Search users</h2>
                <input type="text" value={this.state.term} onChange={(e) => this.handleChange(e)} placeholder='search user'/>
                <ul style={style}>
                    {searchedUsers}
                </ul>
                <button onClick={() => this.props.onCloseInviteUsersModal()}>Close Modal</button>
            </ReactModal>
        );
    }
}