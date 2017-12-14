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
            avatarId: this.state.avatarId,
            channels: this.props.channels
        }
        this.props.onSubmit(this.props.email, customData);
    }

    render() {
        return (
            <form style={{minHeight: '250px'}}>
                <div className="form-group">
                    <label >Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={this.props.email} disabled /><br/>
                    <label htmlFor="name">Name</label>
                    <input
                        type='text'
                        id='name'
                        className="form-control"
                        value={this.state.newName}
                        onChange={(e) => this.handleNameChange(e)}
                    /><br/>
                    <label htmlFor="phone">Phone number</label>
                    <input
                        type='number'
                        id="phone"
                        className="form-control"
                        value={this.state.newPhone}
                        onChange={(e) => this.handlePhoneChange(e)}
                    /><br/>
                </div>
                <button
                    type='button'
                    onClick={() => this.handleSubmit()}
                    disabled={this.state.isUpdateDisabled}
                    className="btn btn-primary"
                >
                    Update
                </button>
            </form>
        );
    }
};