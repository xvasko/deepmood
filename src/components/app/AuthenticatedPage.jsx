import * as React from 'react';
import { MainContent } from '../layout/MainContent'
import { SidebarRedux } from '../../containers-redux/layout/Sidebar'

export const AuthenticatedPage = () => (
    <div>
        <SidebarRedux />
        <MainContent />
    </div>
);