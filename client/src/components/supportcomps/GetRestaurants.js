import React from "react";

const GetRestaurants = props => (
    <div>
        {props.restaurant.list.map( restaurant =>
            <li key={restaurant._id}>
                <div className="teal lighten-3">
                    <div data-id={restaurant._id} onClick={props.restaurantSelect} style={{cursor: "pointer"}}>{restaurant.name}</div>
                </div>
                <div className="grey darken-3">
                    <span>{restaurant.description}</span>
                </div>
            </li>
        )}
    </div>
);

export default GetRestaurants;