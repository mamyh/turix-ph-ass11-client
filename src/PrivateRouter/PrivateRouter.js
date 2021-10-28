import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { allUser } = useAuth();
    const { user } = allUser;
    return (
        <Route
            {...rest}
            render={({ location }) => use.email ? children : <Redirect to={
                {
                    pathname: '/login',
                    state={ from: location }
                }
            }></Redirect>}
        >

        </Route>
    )
}

export default PrivateRouter
