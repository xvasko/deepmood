import React from 'react';
import { StyledMessagesForm } from './MessagesForm.styles'

export class MessagesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.activeChannel, this.state.value);
        this.setState({value: ''})
    }

    render() {
        return (
            <StyledMessagesForm>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder='Enter your message...'
                    />
                    <input id='submitButton' type="submit" value="Submit" />
                </form>
            </StyledMessagesForm>
        );
    }
}
