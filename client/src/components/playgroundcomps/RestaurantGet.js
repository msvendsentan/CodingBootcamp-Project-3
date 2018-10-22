import React from "react";

const style = {
    container: {
        marginTop: "30px",
        borderRadius: "5px",
        padding: "15px"
    },
    header: {
        display: "block"
    },
    aside: {
        position: "relative",
        bottom: "25px"
    }
}

const RestaurantGet = props => (
    <div className="container blue-grey lighten-5" style={style.container}>
        <h4>Restaurants</h4>
        <ul className="collapsible">
            {props.list.map( restaurant => 
                <li key={restaurant._id}>
                    <div className="collapsible-header teal lighten-3" style={style.header}>
                        <div>{restaurant.name}</div>
                        <div className="right" style={style.aside}>
                            <a href="#" data-id={restaurant._id} onClick={props.select}><i className="material-icons" data-id={restaurant._id}>check_circle</i></a>
                            <a href="#" data-id={restaurant._id} onClick={props.delete}><i className="material-icons" data-id={restaurant._id}>delete</i></a>
                        </div>
                    </div>
                    <div className="collapsible-body">
                        <span>{restaurant.description}</span>
                    </div>
                </li>
            )}
        </ul>
    </div>
);

export default RestaurantGet;