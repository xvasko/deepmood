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
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type='email'
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={(e) => this.handleEmailChange(e)}
                    /><br/>

                    <label htmlFor="name">Name</label>
                    <input
                        type='text'
                        className="form-control"
                        id="name"
                        aria-describedby="nameHelp"
                        placeholder="Enter name"
                        value={this.state.name}
                        onChange={(e) => this.handleNameChange(e)}
                    /><br/>

                    <label htmlFor="number">Phone number</label>
                    <input
                        type='number'
                        className="form-control"
                        id="number"
                        aria-describedby="numberHelp"
                        placeholder="Enter phone number"
                        value={this.state.phone}
                        onChange={(e) => this.handlePhoneChange(e)}
                    /><br/>
                </div>
                <input
                    type='submit'
                    value='Register'
                    class="btn btn-primary"
                />
            </form>
        );
    }
};