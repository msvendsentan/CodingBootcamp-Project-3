import React from "react";
import Container from "./basiccomps/Container";

const RestaurantAdd = props => (
    <Container title="Restaurant Selection">
        <p>You have currently selected {props.restaurant.name ? props.restaurant.name : "no restaurant"}.</p>
    </Container>
);

export default RestaurantAdd;