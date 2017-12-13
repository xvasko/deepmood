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

        let content = this.props.activeChannel
            ? <div>
                <div>
                    <ul>
                        {messages}
                    </ul>
                </div>
                <div>
                    <MessagesForm/>
                </div>
            </div>
            : <div>
                <h3>Browse channels and join them! Or you can create your own.</h3>
            </div>

        return (
            <div style={style}>
                {content}
            </div>
        )
    }
}

export { MainContent };