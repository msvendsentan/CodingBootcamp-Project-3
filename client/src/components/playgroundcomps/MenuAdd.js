import React from "react";
import Container from "./basiccomps/Container";

const MenuAdd = props => (
    <Container title="Add Menu Item">
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input id="item" type="text" name="item" onChange={props.handleInputChange}></input>
                    <label htmlFor="item">Menu Item</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="menuAddDescription" type="text" name="description" onChange={props.handleInputChange}></input>
                    <label htmlFor="description">Description</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="type" type="text" name="type" onChange={props.handleInputChange}></input>
                    <label htmlFor="type">Type (Appetizer, Main, Specials, etc.)</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="price" type="number" name="price" onChange={props.handleInputChange}></input>
                    <label htmlFor="price">Price</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="menuAddImageSrc" type="text" name="imageSrc" onChange={props.handleInputChange}></input>
                    <label htmlFor="imageSrc">Image Source</label>
                </div>
            </div>
            <button 
                className={
                    props.menu.item && 
                    props.menu.description && 
                    props.menu.type && 
                    props.menu.price &&
                    props.menu.imageSrc ? 
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

export default MenuAdd;