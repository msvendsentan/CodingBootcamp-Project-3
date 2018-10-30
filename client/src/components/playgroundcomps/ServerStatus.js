import React from "react";
import Container from "./basiccomps/Container";

const style = {
    header: {
        display: "block"
    },
    aside: {
        position: "relative",
        bottom: "25px"
    }
}

const ServerStatus = props => (
    <Container title="Server View - Requests">
        <button 
                className={
                    props.selected.name ? 
                    "btn waves-effect waves-light" : 
                    "btn waves-effect waves-light disabled"
                } 
                type="submit" 
                onClick={props.handleFormSubmit}
            >Refresh
                <i className="material-icons right">refresh</i>
        </button>
        <ul className="collapsible">
            {props.queries.map( query => 
                <li key={query.query._id}>
                    <div className="collapsible-header teal lighten-3" style={style.header}>
                        <div>{query.table} - {query.guest}</div>
                        <div className="right" style={style.aside}>
                            <a href="#" data-id={query.query._id} data-gid={query.gid} onClick={props.delete}><i className="material-icons" data-id={query.query._id} data-gid={query.gid}>check</i></a>
                        </div>
                    </div>
                    <div className="collapsible-body">
                        <span>{query.query.query}</span>
                    </div>
                </li>
            )}
        </ul>
    </Container>
);

export default ServerStatus;