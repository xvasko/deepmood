import React from 'react';
import { LogoutButton } from '../../containers-redux/app/LogoutButton'
import { CreateChannelButton } from '../../containers-redux/channels/CreateChannelButton'
import { Loader } from '../../containers-redux/shared/Loader'
import { SidebarItem } from '../../containers-redux/layout/SidebarItem'
import { getCurrentUser } from '../../utils/getCurrentUser'

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
    onOpenProfile(e) {
        e.preventDefault();
        this.props.onOpenProfile();
    }

    render() {
        let channels = this.props.channels.map(channel => <SidebarItem key={channel.id} channelId={channel.id} channelName={channel.name}/>)
        return (
            <div style={style}>
                Logged as <a href={'#'} onClick={(e) => this.onOpenProfile(e)}>{getCurrentUser()}</a><br/>
                <LogoutButton /> <CreateChannelButton />
                <br/>
                <Loader stateLoadingSelector={state => state.channels.isFetchingChannels}>
                    <ul style={{minHeight: '250px'}}>
                        {channels}
                    </ul>
                </Loader>
            </div>
        )
    }
}

export { Sidebar };