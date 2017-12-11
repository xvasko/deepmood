import * as React from 'react';
import { MessagesForm } from '../../containers-redux/messages/MessagesForm'
import { MainContentItem } from '../../containers-redux/layout/MainContentItem'

var style = {
    margin: '0px 0px 0px 240px',
    background: 'gray'
};

class MainContent extends React.Component {
    render() {
        let messages = this.props.messages
            ? this.props.messages.map(message => <MainContentItem key={message.id} messageId={message.id} createdBy={message.createdBy} createdAt={message.createdAt} value={message.value} customData={message.customData}/>)
            : <li>no messages</li>
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