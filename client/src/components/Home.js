import React from 'react';
import Logo from '../images/communicateLogo.png';

import './Home.css';

const Home = () => (
  <main>
    <img className="responsive-img" src={Logo} alt="CommunicAte Logo" />
    <div className="container formBox">
      <div className="form-header">
        <ul className="tabs">
          <li className="tab col s6"><a href="#test1"><h6>Sign-In</h6></a></li>
          <li className="tab col s6"><a href="#test2"><h6>Existing User? Login</h6></a></li>
        </ul>
      </div>

      {/* The "form" css height is set to 450px in "Home.css". It's just temp setting, to see how things look. We'll set this back to "auto" when filled in with an actual form again. */}
      <div id="test1">
        <form>
          <div className="col s12 m6 l6">
            <div className="form-content">
              Form Content #1
          </div>
          </div>
        </form>
      </div>
      <div id="test2">
        <form>
          <div className="col s12 m6 l6">
            <div className="form-content">
              Form Content #2
          </div>
          </div>
        </form>
      </div>
    </div>
  </main>
);

export default Home;