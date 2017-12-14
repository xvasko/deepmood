import * as React from 'react';
import { MessagesForm } from '../../containers-redux/messages/MessagesForm'
import { MainContentItem } from '../../containers-redux/layout/MainContentItem'
import { StyledMainContent } from './MainContent.styles'

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
                <StyledMainContent>
                    <ul>
                        {messages}
                    </ul>
                </StyledMainContent>
                <MessagesForm/>
            </div>
            : null

        return (
            <div style={style}>
                {content}
            </div>
        )
    }
}

export { MainContent };