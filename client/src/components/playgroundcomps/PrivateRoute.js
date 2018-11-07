import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        props.loggedIn === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />
);

export default PrivateRoute;