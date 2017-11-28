import React from 'react';
import AdvancedLoader from 'react-loader-advanced';

export const Loader = ({children, isLoading}) => (
    <AdvancedLoader
        show={isLoading}
        message={'loading...'}
        backgroundStyle={{ borderRadius: '6px', backgroundColor: 'red' }}
        hideContentOnLoad
    >
        {children}
    </AdvancedLoader>
);