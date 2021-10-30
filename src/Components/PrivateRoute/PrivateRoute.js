import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/userlogin",
                            state: { from: location }
                        }}
                    >

                    </Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;
