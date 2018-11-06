import React from 'react';


import './Customer.css';

const Customer = props => (
    <div className="container customerBox">
        <div className="row">
            <div className="col s12 m12 l12">
                <div className="memoText">
                    <p>What's up, doc?</p>
                </div>
            </div>

            <div className="col s4 m4 l4">
                <div className="reqButton">
                    <a className="waves-effect blue darken-4 btn-large" data-query="default query: water" onClick={props.handleQueryButtonClick}>WATER</a>
                </div>
            </div>

            <div className="col s4 m4 l4">
                <div className="reqButton">
                    <a className="waves-effect blue darken-4 btn-large" data-query="default query: refills" onClick={props.handleQueryButtonClick}>REFILLS</a>
                </div>
            </div>

            <div className="col s4 m4 l4">
                <div className="reqButton">
                    <a className="waves-effect blue darken-4 btn-large" data-query="default query: server" onClick={props.handleQueryButtonClick}>SERVER</a>
                </div>
            </div>

            <div className="col s12 m12 l12">
                <div className="memoText">
                    <p>Request Bill</p>
                </div>
            </div>

            <div className="col s4 m4 l4">
                <div className="billButton">
                    <a className="waves-effect pink darken-4 btn-large" data-query="default query: credit" onClick={props.handleQueryButtonClick}>CREDIT</a>
                </div>
            </div>

            <div className="col s4 m4 l4">
                <div className="billButton">
                    <a className="waves-effect pink darken-4 btn-large" data-query="default query: debit" onClick={props.handleQueryButtonClick}>DEBIT</a>
                </div>
            </div>

            <div className="col s4 m4 l4">
                <div className="billButton">
                    <a className="waves-effect pink darken-4 btn-large" data-query="default query: cash" onClick={props.handleQueryButtonClick}>CASH</a>
                </div>
            </div>
        </div>

        <div className="col s12 m12 l12">
            <div className="memoText">
                <p>Send a Message to the Restaurant</p>
            </div>
        </div>
        <div className="input-field col s12">
            <div className="inputField">
                <input type="text" id="autocomplete-input" name="query" className="autocomplete" onChange={props.handleInputChange}></input>
            </div>
        </div>
        <div className="col s12 m12 l12">
            <div className="col s12 m12 l12">
                <button 
                    className={
                        props.query.query ? 
                        "btn waves-effect blue darken-4" : 
                        "btn waves-effect blue darken-4 disabled"
                    } 
                    type="submit" 
                    onClick={props.handleCustomQuerySubmit}
                >
                    <i className="restaurant">submit</i>
                </button>
            </div>
        </div>
    </div>
);

export default Customer;