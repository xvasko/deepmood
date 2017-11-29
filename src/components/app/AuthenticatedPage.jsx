import * as React from 'react';
import { SidebarRedux } from '../../containers-redux/layout/Sidebar'
import { MainContent } from '../../containers-redux/layout/MainContent'

export const AuthenticatedPage = () => (
    <div>
        <SidebarRedux />
        <MainContent />
    </div>
);