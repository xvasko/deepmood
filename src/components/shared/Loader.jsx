import React from 'react';
import AdvancedLoader from 'react-loader-advanced';
import { SavingSpinner } from './SavingSpinner'

const LoadingMessage = ({ message }) => (
    <div>
        <SavingSpinner />
        <div>
            { message || 'Loading' }
        </div>
    </div>
);

export const Loader = ({children, isLoading, message}) => (
    <AdvancedLoader
        show={isLoading}
        message={<LoadingMessage message={message} />}
        backgroundStyle={{ borderRadius: '6px'}}
        contentBlur={1}
        //hideContentOnLoad
    >
        {children}
    </AdvancedLoader>
);