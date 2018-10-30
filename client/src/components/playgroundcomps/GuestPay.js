import React from "react";
import Container from "./basiccomps/Container";

const GuestPay = props => (
    <Container title={props.guest.name ? `Hi ${props.guest.name}, pay & leave?` : "Sit down first!"}>
        <div>You'd see your bill here, as soon as you placed an order</div>
        <button 
            className={
                props.guest.id ? 
                "btn waves-effect waves-light" : 
                "btn waves-effect waves-light disabled"
            }  
            type="submit" 
            data-id={props.guest.id}
            onClick={props.handleFormSubmit}
        >Submit
            <i className="material-icons right" data-id={props.guest.id}>send</i>
        </button>
    </Container>
);

export default GuestPay;