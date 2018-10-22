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

const MenuGet = props => (
    <Container title="Restaurant Menu">
        <ul className="collapsible">
            {props.menu.map( menuitem => 
                <li key={menuitem._id}>
                    <div className="collapsible-header teal lighten-3" style={style.header}>
                        <div>{menuitem.type}: {menuitem.item} - ${menuitem.price}</div>
                        <div className="right" style={style.aside}>
                            <a href="#" data-id={menuitem._id} onClick={props.delete}><i className="material-icons" data-id={menuitem._id}>delete</i></a>
                        </div>
                    </div>
                    <div className="collapsible-body">
                        <span>{menuitem.description}</span>
                    </div>
                </li>
            )}
        </ul>
    </Container>
);

export default MenuGet;