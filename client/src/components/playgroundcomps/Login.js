import React from "react";
import Container from "./basiccomps/Container";

const Signup = props => (
    <Container title="Login">
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input id="user" type="text" name="user" onChange={props.handleInputChange}></input>
                    <label htmlFor="user">Username:</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="password" type="text" name="password" onChange={props.handleInputChange}></input>
                    <label htmlFor="password">Password:</label>
                </div>
            </div>
            <button
                className={
                    props.account.user &&
                        props.account.password ?
                        "btn waves-effect waves-light" : (
                            "btn waves-effect waves-light disabled")
                }
                type="submit"
                onClick={props.handleFormSubmit}>
                Login
                <i className="material-icons right">send</i>
            </button>
            {<h5>{props.success}</h5>}
        </form>
    </Container>
);

export default Signup;