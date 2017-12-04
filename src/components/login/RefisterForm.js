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

    handleSubmit() {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form style={{minHeight: '250px'}}>
                <label>Username / Email</label>
                <input type='email' onChange={(e) => this.handleEmailChange(e)}/><br/>
                <label>Name</label>
                <input type='text' onChange={(e) => this.handleNameChange(e)}/><br/>
                <label>Phone number</label>
                <input type='number' onChange={(e) => this.handlePhoneChange(e)}/><br/>
                <button
                    type='button'
                    onClick={() => this.handleSubmit()}
                >
                    Register
                </button>
            </form>
        );
    }
};