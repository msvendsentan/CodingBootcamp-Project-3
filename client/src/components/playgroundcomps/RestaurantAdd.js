import React from "react";
import Container from "./basiccomps/Container";

const RestaurantAdd = props => (
    <Container title="Add Restaurant">
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input id="name" type="text" name="name" onChange={props.handleInputChange}></input>
                    <label htmlFor="name">Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="description" type="text" name="description" onChange={props.handleInputChange}></input>
                    <label htmlFor="description">Description</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="address" type="text" name="address" onChange={props.handleInputChange}></input>
                    <label htmlFor="address">Address</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="imageSrc" type="text" name="imageSrc" onChange={props.handleInputChange}></input>
                    <label htmlFor="imageSrc">Image Source</label>
                </div>
            </div>
            <button 
                className={
                    props.restaurant.name && 
                    props.restaurant.description && 
                    props.restaurant.address && 
                    props.restaurant.imageSrc ? 
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

export default RestaurantAdd;