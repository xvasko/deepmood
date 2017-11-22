import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const renderWithRedirect =
    (isAuthenticated) =>
        (SecuredComponent) => {
            return class AuthenticationRouteSwitch extends React.PureComponent {
                render() {
                    return (
                        isAuthenticated
                            ? <SecuredComponent />
                            : <Redirect to={{
                                pathname: '/login',
                            }} />
                    );
                }
            };
        };

const AuthenticatedRoute = ({ component, isAuthenticated }) => (
    <Route component={renderWithRedirect(isAuthenticated)(component)} />
);

export { AuthenticatedRoute };