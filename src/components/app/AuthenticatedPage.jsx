import * as React from 'react';
import { SidebarRedux } from '../../containers-redux/layout/Sidebar'
import { MainContent } from '../../containers-redux/layout/MainContent'
import { ProfileModal } from '../../containers-redux/profile/ProfileModal'

export const AuthenticatedPage = () => (
    <div>
        <SidebarRedux />
        <MainContent />
        <ProfileModal />
    </div>
);