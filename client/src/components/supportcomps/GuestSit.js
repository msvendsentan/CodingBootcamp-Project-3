import React from "react";

const GuestSit = props => (
    <form>
        <div className="row">
            <div className="input-field col s12">
                <input id="guestSitName" type="text" name="name" onChange={props.handleInputChange}></input>
                <label htmlFor="name">First Name</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <select className="browser-default" name="table" onChange={props.handleInputChange}>
                    <option value="" disabled selected>Choose your table</option>
                    {props.tables.map( table => 
                        <option key={table._id} value={table.number}>Table {table.number}</option>
                    )}
                </select>
                <label></label>
            </div>
        </div>
        <button 
            className={
                props.guest.name && 
                props.guest.table ? 
                "btn waves-effect waves-light" : 
                "btn waves-effect waves-light disabled"
            } 
            type="submit" 
            onClick={props.handleFormSubmit}
        >Submit
            <i className="material-icons right">send</i>
        </button>
    </form>
);

export default GuestSit;