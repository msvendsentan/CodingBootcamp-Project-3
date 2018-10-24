import React from "react";
import Container from "./basiccomps/Container";

const GuestQuery = props => (
    <Container title="Guest - Query a Server">
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input id="query" type="text" name="query" onChange={props.handleInputChange}></input>
                    <label htmlFor="query">What would you like?</label>
                </div>
            </div>
            <button 
                className={
                    props.queries.query ? 
                    "btn waves-effect waves-light" : 
                    "btn waves-effect waves-light disabled"
                } 
                type="submit" 
                onClick={props.handleFormSubmit}
            >Submit
                <i className="material-icons right">send</i>
            </button>
        </form>
    </Container>
);

export default GuestQuery;