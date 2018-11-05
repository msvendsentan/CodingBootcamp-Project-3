import React from 'react';
import Logo from '../images/communicateLogo.png';

import './Messages.css';

const Messages = () => (
  <main>
    <img className="responsive-img" src={Logo} alt="CommunicAte Logo" />
    <div className="container customerBox">
      <div className="row">
        <div class="col s4 m12 l12">
          <h5>
            Welcome! Your table has been entered into our system!
            Please use our system to let us know when you're in need!
          </h5>
          <h5>
          On the following page, simply press a button to alert us to
          your needs, as they come up, and our server will be happy to assist.
          </h5>
        </div>
        <div class="col s12 m12 l12">
        <div className="col s12 m12 l12">
          <button class="btn waves-effect blue darken-4" type="submit" name="action">
            <i class="restaurant">Continue</i>
          </button>
        </div>
      </div>
      </div>
    </div>
  </main>
);

export default Messages;