import * as React from 'react';
import { SidebarRedux } from '../../containers-redux/layout/Sidebar'
import { MainContent } from '../../containers-redux/layout/MainContent'
import { ProfileModal } from '../../containers-redux/profile/ProfileModal'
import { Header } from '../../containers-redux/layout/Header'
import { InviteUsersModal } from '../../containers-redux/channels/InviteUsersModal'

export const AuthenticatedPage = () => (
    <div>
        <SidebarRedux />
        <Header />
        <MainContent />
        <ProfileModal />
        <InviteUsersModal />
    </div>
);