import React from 'react';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'user@gmail.com'};
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        this.props.onSubmit(this.state.value)
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} style={{minHeight: '250px'}}>
                <label>Username / Email</label>
                <input type='email' value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <br/>
                <input
                    type='submit'
                    value='Log in'
                />
            </form>
        );
    }
};