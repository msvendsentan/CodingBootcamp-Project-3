import React from 'react';
import Logo from '../images/communicateLogo.png';


import './Customer.css';

const Customer = () => (
  <main>
    <img className="responsive-img" src={Logo} alt="CommunicAte Logo" />
    <div className="container customerBox">
      <div className="row">
        <div className="col s4 m4 l4">
          <div className="reqButton">
            <a className="waves-effect blue darken-4 btn-large">WATER</a>
          </div>
        </div>

        <div className="col s4 m4 l4">
          <div className="reqButton">
            <a className="waves-effect blue darken-4 btn-large">REFILLS</a>
          </div>
        </div>

        <div className="col s4 m4 l4">
          <div className="reqButton">
            <a className="waves-effect blue darken-4 btn-large">SERVER</a>
          </div>
        </div>

        <div className="col s12 m12 l12">
          <div className="memoText">
            <p>Request Bill</p>
          </div>
        </div>

        <div className="col s4 m4 l4">
          <div className="billButton">
            <a className="waves-effect pink darken-4 btn-large">CREDIT</a>
          </div>
        </div>
        <div className="col s4 m4 l4">
          <div className="billButton">
            <a className="waves-effect pink darken-4 btn-large">DEBIT</a>
          </div>
        </div>
        <div className="col s4 m4 l4">
          <div className="billButton">
            <a className="waves-effect pink darken-4 btn-large">CASH</a>
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
        <input type="text" id="autocomplete-input" className="autocomplete"></input>
        
        </div>
      </div>
      <div className="col s12 m12 l12">
        <div className="col s12 m12 l12">
          <button className="btn waves-effect blue darken-4" type="submit" name="action">
            <i className="restaurant">submit</i>
          </button>
        </div>
      </div>
    </div>
  </main>
);

export default Customer;