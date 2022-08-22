import React from 'react';
import { Route, Navigate } from "react-router-dom";
import auth from './auth-helper';

//component nnot use currently bcos, when called
//in routes, it fails to recognize route component
//returned by this component
const PrivateRoute = (path, element) => (
    auth.isAuthenticated() ?
        (
            <Route path={path} element={element} />
        ) :
        (
            <Navigate to={{
                pathname: '/signin',
                state: { from: props.location }
            }}
            />
        )
)

export default PrivateRoute; 