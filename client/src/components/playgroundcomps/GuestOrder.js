import React from "react";
import Container from "./basiccomps/Container";

const GuestOrder = props => (
    <Container title={props.guest.name ? `Hi ${props.guest.name}, ready to order?` : "Sit down first!"}>
        <div>Menu to be populated here</div>
    </Container>
);

export default GuestOrder;