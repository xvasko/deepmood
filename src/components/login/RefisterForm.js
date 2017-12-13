import React from 'react';

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            phone: '',
        };
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value})
    }

    handleSubmit(e) {
        this.props.onSubmit(this.state);
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} style={{minHeight: '250px'}}>
                <label>Username / Email</label>
                <input type='email' value={this.state.email} onChange={(e) => this.handleEmailChange(e)}/><br/>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={(e) => this.handleNameChange(e)}/><br/>
                <label>Phone number</label>
                <input type='number' value={this.state.phone} onChange={(e) => this.handlePhoneChange(e)}/><br/>
                <input
                    type='submit'
                    value='Register'
                />
            </form>
        );
    }
};