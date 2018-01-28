import React from 'react';
import { LogoutButton } from '../../containers-redux/app/LogoutButton'
import { CreateChannelButton } from '../../containers-redux/channels/CreateChannelButton'
import { Loader } from '../../containers-redux/shared/Loader'
import { SidebarItem } from '../../containers-redux/layout/SidebarItem'
import { getCurrentUser } from '../../utils/getCurrentUser'
import { StyledSidebar } from './Sidebar.styles'

class Sidebar extends React.Component {
    onOpenProfile(e) {
        e.preventDefault();
        this.props.onOpenProfile();
    }

    onOpenBrowse(e) {
        e.preventDefault();
        this.props.onOpenBrowse();
    }

    render() {
        let channels = this.props.channels.size > 0 ? this.props.channels.map(channel => <SidebarItem key={channel.id} channelId={channel.id} channelName={channel.name}/>) : <li>you have no channels</li>
        return (
            <StyledSidebar>
                <div style={{padding: '10px 20px'}}>
                    <span>
                    Logged as <a href='/' onClick={(e) => this.onOpenProfile(e)}>{getCurrentUser()}</a><br/>
                        <LogoutButton />
                    </span>
                    <br/>
                    <br/>
                    <a href='/' onClick={(e) => this.onOpenBrowse(e)}>Channels</a> <CreateChannelButton />
                </div>
                <Loader stateLoadingSelector={state => state.channels.isFetchingChannels}>
                    <ul style={{minHeight: '250px'}}>
                        {channels}
                    </ul>
                </Loader>
            </StyledSidebar>
        )
    }
}

export { Sidebar };