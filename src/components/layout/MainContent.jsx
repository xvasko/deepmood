import * as React from 'react';
import { MessagesForm } from '../../containers-redux/messages/MessagesForm'

var style = {
    margin: '0px 0px 0px 240px',
    background: 'gray'
};

class MainContent extends React.Component {
    render() {
        let messages = this.props.messages? this.props.messages.map(message => <li key={message.id}>message.value</li> ) : <li>no message</li>
        return (
            <div style={style}>
                <div>
                    <ul>
                        {messages}
                    </ul>
                </div>
                <div>
                    <MessagesForm/>
                </div>
            </div>
        )
    }
}

export { MainContent };