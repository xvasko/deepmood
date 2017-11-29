import * as React from 'react';
import { MessagesForm } from '../../containers-redux/messages/MessagesForm'

var style = {
    margin: '0px 0px 0px 240px',
    background: 'gray'
};

const MainContent = () => (
    <div style={style}>
        <div>
            <ul>
                <li>message 1</li>
                <li>message 2</li>
            </ul>
        </div>
        <div>
            <MessagesForm/>
        </div>
    </div>
)

export { MainContent };