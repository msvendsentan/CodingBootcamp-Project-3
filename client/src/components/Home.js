import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GetRestaurants from "./supportcomps/GetRestaurants"
import GuestSit from "./supportcomps/GuestSit"
import Customer from "./supportcomps/Customer"
import Login from "./playgroundcomps/Login"
import API from "../utils/API";
import Logo from '../images/communicateLogo.png';

import './Home.css';

class Home extends Component {

  state = {
    restaurant: {
      list: [],
      selected: {}
    },
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
    queries: {
      add: {
        query: ""
      },
      list: []
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

  componentDidMount() {
    this.loadRestaurants();
  };

  loadRestaurants = () => {
    API.restaurants.populate()
      .then(res => {
        this.setState(prevState => ({
          restaurant: {
            ...prevState.restaurant,
            list: res.data
          }
        }));
      })
      .catch(err => console.log(err));
  };

  restaurantSelect = event => {
    event.preventDefault();
    API.restaurants.get(event.target.getAttribute("data-id"))
      .then(res => {
        this.setState(prevState => ({
          restaurant: {
            ...prevState.restaurant,
            selected: res.data
          },
        }), () => {
          this.loadTables(res.data._id)
          /*
          this.loadMenu(res.data._id)
          this.loadTables(res.data._id)
          this.loadQueries(res.data._id)
          */
        });
      }).catch(err => console.log(err));
  };

  loadTables = (rid) => {
    API.tables.populate({ rid: rid })
      .then(res => {
        this.setState(prevState => ({
          tables: {
            ...prevState.tables,
            list: res.data.tables
          }
        }))
      })
      .catch(err => console.log(err));
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

  handleQueryButtonClick = event => {
    event.preventDefault();
    API.queries.create({
      gid: this.state.guest.info.id,
      query: {
        query: event.target.getAttribute("data-query")
      }
    }).then(console.log("Query Submitted")).catch(err => console.log(err));
  };

  handleCustomQuerySubmit = event => {
    event.preventDefault();
    API.queries.create({
      gid: this.state.guest.info.id,
      query: {
        query: this.state.queries.add.query
      }
    }).then(console.log("Query Submitted")).catch(err => console.log(err));
  };

  handleGuestQueryInput = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      queries: {
        ...prevState.queries,
        add: {
          ...prevState.queries.add,
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
        this.setState(prevState => ({
          login: {
            account: {
              loggedIn: true
            }
          }
        }))
        console.log(this.state.login.account)
      })
      .catch(err => {
        this.setState({
          login: {
            account: {
              incorrect: true
            }
          }
        })
        console.log(err)
      });
  };

  tester = event => {
    event.preventDefault();
    console.log(this.state);
  }


  render() {
    if (this.state.login.account.loggedIn === true) {
      return <Redirect to={{
        pathname: '/Restaurant',
        loggedIn: true
      }} />
    }

    return (
      <main>
        <img className="responsive-img" src={Logo} alt="CommunicAte Logo" />

        {this.state.guest.info.id ?
          (
            <div>
              <Customer
                query={this.state.queries.add}
                handleQueryButtonClick={this.handleQueryButtonClick}
                handleCustomQuerySubmit={this.handleCustomQuerySubmit}
                handleInputChange={this.handleGuestQueryInput}
              />
            </div>
          )
          :
          (
            <div className="container formBox">
              <div className="form-header">
                <ul className="tabs">
                  <li className="tab col s6"><a href="#test1"><h6>I'm a Guest</h6></a></li>
                  <li className="tab col s6"><a href="#test2"><h6>I'm an Admin/Server</h6></a></li>
                </ul>
              </div>

              {/* The "form" css height is set to 450px in "Home.css". It's just temp setting, to see how things look. We'll set this back to "auto" when filled in with an actual form again. */}
              <div id="test1">
                {this.state.restaurant.selected.name ?
                  (
                    <div>
                      <div>Great, so you're dining at {this.state.restaurant.selected.name}!</div>
                      <div>Want to sit down?</div>
                      <GuestSit
                        guest={this.state.guest.add}
                        tables={this.state.tables.list}
                        handleFormSubmit={this.handleGuestSit}
                        handleInputChange={this.handleGuestSitInput}
                      />
                    </div>
                  )
                  :
                  (
                    <div>
                      <div>Where are you dining?</div>
                      <GetRestaurants
                        restaurant={this.state.restaurant}
                        restaurantSelect={this.restaurantSelect}
                      />

                    </div>
                  )
                }
              </div>
              <div id="test2">
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
          )
        }
        <button onClick={this.tester}>Console.log state</button>
      </main>
    )
  }
};

export default Home;