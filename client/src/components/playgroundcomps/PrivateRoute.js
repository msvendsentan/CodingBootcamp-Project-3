import React from "react";
import { Route, Redirect } from "react-router-dom";
import Restaurant from "../Restaurant";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
            props.loggedIn === true || props.location.loggedIn === true
            ? <Route path="/" component={Restaurant} />
            : <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />
);

export default PrivateRoute;
