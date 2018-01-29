import * as React from 'react';
import { SidebarRedux } from '../../containers-redux/layout/Sidebar'
import { MainContent } from '../../containers-redux/layout/MainContent'
import { ProfileModal } from '../../containers-redux/profile/ProfileModal'
import { Header } from '../../containers-redux/layout/Header'
import { InviteUsersModal } from '../../containers-redux/channels/InviteUsersModal'
import { BrowseChannelsModal } from '../../containers-redux/channels/BrowseChannelsModal'

export class AuthenticatedPage extends React.Component {

    componentWillMount() {
        this.props.initialFetch();
    }

    render() {
        return (
            <div>
                <SidebarRedux />
                <Header />
                <MainContent />
                <ProfileModal />
                <InviteUsersModal />
                <BrowseChannelsModal />
            </div>
        )
    }
}

