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

const TableGet = props => (
    <Container title="Restaurant Tables">
        <ul className="collapsible">
            {props.tables.map( table => 
                <li key={table._id}>
                    <div className="collapsible-header teal lighten-3" style={style.header}>
                        <div>Table {table.number} - {table.capacity} seats</div>
                        <div className="right" style={style.aside}>
                            <a href="#" data-id={table._id} onClick={props.delete}><i className="material-icons" data-id={table._id}>delete</i></a>
                        </div>
                    </div>
                    <div className="collapsible-body">
                        <span>Unique table password: {table.password}</span>
                    </div>
                </li>
            )}
        </ul>
    </Container>
);

export default TableGet;