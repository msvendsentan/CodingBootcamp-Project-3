import React, { Component } from 'react';
import Logo from '../images/communicateLogo.png';
import GuestSit from '../components/playgroundcomps/GuestSit';
import Login from '../components/playgroundcomps/Login';
import API from '../utils/API';

import './Home.css';

class Home extends Component {
  state = {
    tables: {
      add: {
        number: "",
        capacity: 0
      },
      list: []
    },
    guest: {
      add: {
        name: "",
        table: ""
      },
      info: {
        id: "",
        name: "",
        tid: ""
      },
      order: [],
      bill: 0
    },
    login: {
      account: {
        username: "",
        password: "",
        loggedIn: false,
        incorrect: false
      }
    }
  };

  handleGuestSit = event => {
    event.preventDefault();
    let tid = this.state.tables.list.filter(table => {
      return table.number === this.state.guest.add.table
    });
    API.guest.sit({
      tid: tid[0]._id,
      name: {
        name: this.state.guest.add.name
      }
    }).then(res => {
      this.setState(prevState => ({
        guest: {
          ...prevState.guest,
          info: {
            ...prevState.guest.info,
            id: res.data._id,
            name: res.data.name,
            tid: tid[0]._id
          }
        }
      }))
    }).catch(err => console.log(err));
  };

  handleGuestSitInput = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      guest: {
        ...prevState.guest,
        add: {
          ...prevState.guest.add,
          [name]: value
        }
      }
    }));
  };

  handleLoginInput = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        account: {
          ...prevState.login.account,
          [name]: value,
          incorrect: false
        }
      }
    }));
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    API.authenticate.login(this.state.login.account)
      .then(res => {
        this.setState({
          loggedIn: true
        })
      }).catch(err => {
        this.setState({
          incorrect: true
        })
        console.log(err)
      });
  };

  render() {
    return (
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
                  <GuestSit
                    guest={this.state.guest.add}
                    tables={this.state.tables.list}
                    handleFormSubmit={this.handleGuestSit}
                    handleInputChange={this.handleGuestSitInput}
                  />
                </div>
              </div>
            </form>
          </div>
          <div id="test2">
            <form>
              <div className="col s12 m6 l6">
                <div className="form-content">
                  <Login
                    account={this.state.login.account}
                    handleFormSubmit={this.handleLoginSubmit}
                    handleInputChange={this.handleLoginInput}
                  />
                  <div>
                    {this.state.login.account.incorrect ? <h5>Username and/or Password is incorrect</h5> : (<p></p>)}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  };
};

export default Home;
