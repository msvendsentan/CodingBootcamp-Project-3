import React from "react";
import Container from "./basiccomps/Container";

const TableAdd = props => (
    <Container title="Add Table">
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input id="number" type="text" name="number" onChange={props.handleInputChange}></input>
                    <label htmlFor="number">Table "Number" (Letters are Fine)</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="capacity" type="number" name="capacity" onChange={props.handleInputChange}></input>
                    <label htmlFor="capacity">Table Capacity</label>
                </div>
            </div>
            <button 
                className={
                    props.table.number && 
                    props.table.capacity ? 
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

export default TableAdd;