import React from 'react';

export class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldName: this.props.name,
            oldPhone: this.props.phone,
            newName: this.props.name,
            newPhone: this.props.phone,
            avatarId: this.props.avatarId,
            isUpdateDisabled: true
        };
    }

    toggleUploadButton() {
        if (this.state.oldName !== this.state.newName || this.state.oldPhone !== this.state.newPhone) {
            this.setState({isUpdateDisabled: false})
        } else {
            this.setState({isUpdateDisabled: true})
        }
    }

    handleNameChange(e) {
        this.setState({newName: e.target.value}, this.toggleUploadButton)
    }

    handlePhoneChange(e) {
        this.setState({newPhone: e.target.value}, this.toggleUploadButton)
    }

    handleSubmit() {
        var customData = {
            name: this.state.newName,
            phone: this.state.newPhone,
            avatarId: this.state.avatarId
        }
        this.props.onSubmit(this.props.email, customData);
    }

    render() {
        return (
            <form style={{minHeight: '250px'}}>
                <label>Username / Email</label>
                <input value={this.props.email} disabled /><br/>
                <label>Name</label>
                <input type='text' value={this.state.newName} onChange={(e) => this.handleNameChange(e)}/><br/>
                <label>Phone number</label>
                <input type='number' value={this.state.newPhone} onChange={(e) => this.handlePhoneChange(e)}/><br/>
                <button
                    type='button'
                    onClick={() => this.handleSubmit()}
                    disabled={this.state.isUpdateDisabled}
                >
                    Update
                </button>
            </form>
        );
    }
};