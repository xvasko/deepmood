import React from 'react';

export class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            phone: this.props.phone,
            avatarId: this.props.avatarId
        };
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value})
    }

    handleSubmit() {
        this.props.onSubmit(this.props.email, this.state);
    }

    render() {
        return (
            <form style={{minHeight: '250px'}}>
                <label>Username / Email</label>
                <input value={this.props.email} disabled /><br/>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={(e) => this.handleNameChange(e)}/><br/>
                <label>Phone number</label>
                <input type='number' value={this.state.phone} onChange={(e) => this.handlePhoneChange(e)}/><br/>
                <button
                    type='button'
                    onClick={() => this.handleSubmit()}
                >
                    Update
                </button>
            </form>
        );
    }
};