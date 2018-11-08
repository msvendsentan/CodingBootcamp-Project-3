import React from "react";
import Container from "./basiccomps/Container";

const Login = props => (
    <Container title="Login">
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input id="userlogin" type="text" name="username" onChange={props.handleInputChange} key={props.account.incorrect || '' }></input>
                    <label htmlFor="user">Username:</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="passwordlogin" type="password" name="password" onChange={props.handleInputChange} key={props.account.incorrect || '' }></input>
                    <label htmlFor="password">Password:</label>
                </div>
            </div>
            <button
                className={
                    props.account.username &&
                        props.account.password ?
                        "btn waves-effect waves-light" : (
                            "btn waves-effect waves-light disabled"
                        )}
                type="submit"
                onClick={props.handleFormSubmit}>
                Login
                <i className="material-icons right">send</i>
            </button>

        </form>
    </Container>
);

export default Login;