import React from "react";

const style = {
    container: {
        marginTop: "30px",
        borderRadius: "5px",
        padding: "15px"
    }
}

const RestaurantAdd = props => (
    <div className="container blue-grey lighten-5" style={style.container}>
        <h4>Restaurant Selection</h4>
        <p>You have currently selected {props.restaurant.name ? props.restaurant.name : "no restaurant"}.</p>
    </div>
);

export default RestaurantAdd;