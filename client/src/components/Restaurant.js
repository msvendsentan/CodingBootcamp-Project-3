import React from 'react';
import Logo from '../images/communicateLogo.png';
import subLogo from '../images/tableView.png';

import './Restaurant.css';

const Restaurant = () => (
  <div>
    <header>
      <img className="responsive-img Logo" src={Logo} />
      <img className="responsive-img subLogo" src={subLogo} />
    </header>
    <main>
      <div className="row">
        <div className="col s10">
          <div classNam="row tableDiv">
            TABLES DIV
          </div>
        </div>
        <div className="col s2">
          <div className="row alertDiv">
            ALERT DIV
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Restaurant;