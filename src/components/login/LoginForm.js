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
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={this.state.value}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We might share your email with someone else. But probably not.</small>
                </div>
                <br/>
                <input
                    type='submit'
                    value='Log in'
                    className="btn btn-primary red"
                />
            </form>
        );
    }
};