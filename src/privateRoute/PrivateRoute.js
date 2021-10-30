import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from '../hooks/useAuth';
import Spinner from '../spiner/Spinner';

const PrivateRoute = ({ children, ...rest }) => {
    let { allContext } = useAuth();
    const { user, isLoading } = allContext;
    if (isLoading) {
        return (
            <Spinner></Spinner>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
