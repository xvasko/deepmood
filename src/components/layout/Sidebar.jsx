import React from 'react';
import { LogoutButton } from '../../containers-redux/app/LogoutButton'
import { SidebarItem } from './SidebarItem'
import { CreateChannelButton } from '../../containers-redux/channels/CreateChannelButton'

var style = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    bottom: '0px',
    width: '200px',
    background: 'rgb(66, 165, 245)',
    padding: '10px 20px'
};

class Sidebar extends React.Component {
    componentWillMount() {
        this.props.onComponentWillMount();
        console.log('componentWillMount')
    }

    render() {
        let channels = this.props.channels ? this.props.channels.map(
            channel => <SidebarItem key={channel.id} channelName={channel.name}/>
        ) : <p>no channels...</p>
        return (
            <div style={style}>
                <LogoutButton /> <CreateChannelButton />
                <br/>
                <ul>
                    {channels}
                </ul>
            </div>
        )
    }
}

export { Sidebar };