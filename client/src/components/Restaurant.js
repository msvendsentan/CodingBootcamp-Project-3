import React, { Component } from 'react';
import GetRestaurants from "./supportcomps/GetRestaurants"
import API from "../utils/API";
import Logo from '../images/communicateLogo.png';
import tableViewLogo from '../images/tableView.png';
import alertViewLogo from '../images/alertView.png';


import './Restaurant.css';

class Restaurant extends Component {

    state = {
        restaurant: {
            list: [],
            selected: {}
        },
        tables: {
            list: []
        },
        queries: {
            list: []
        },
        /* Alpha--not sure if you need these
        signup: {
            account: {
                username: "",
                password: "",
                email: ""
            }
        },
        login: {
            account: {
                username: "",
                password: "",
                loggedIn: false,
                redirectTo: null
            }
        } */
    }

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
                // this.sendSocketIO(res);
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
                    this.loadQueries(res.data._id)
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

    loadQueries = (rid) => {
        API.queries.getAllByRestaurant({ rid: rid })
            .then(res => {
                let allQueries = [];
                res.data.tables.forEach(table => {
                    table.guests.forEach(guest => {
                        guest.queries.forEach(query => {
                            allQueries.push({
                                table: table.number,
                                guest: guest.name,
                                gid: guest._id,
                                query: query
                            });
                        });
                    });
                });
                this.setState(prevState => ({
                    queries: {
                        ...prevState.queries,
                        list: allQueries
                    }
                }));

            })
            .catch(err => console.log(err));
    };

    queryDelete = event => {
        event.preventDefault();
        API.queries.delete({
            id: event.target.getAttribute("data-id"),
            gid: event.target.getAttribute("data-gid")
        }).then(res => this.loadQueries(this.state.restaurant.selected._id))
            .catch(err => console.log(err));
    };

    handleServerRefresh = event => {
        event.preventDefault();
        this.loadQueries(this.state.restaurant.selected);
    }

    tester = event => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        console.log(this.props)
        
        return (
            <div>
                <header>
                    <img className="responsive-img Logo" src={Logo} />
                </header>
                    <main>
                        {this.state.restaurant.selected.name ? 
                            (
                                <div className="row">
                                    <div className="col s12 m9 l9">
                                        <div className="row tableDiv">

                                            <div className="top">
                                                <img className="responsive-img subLogo" src={tableViewLogo} />
                                                <div className="right">
                                                    <button className={"btn waves-effect waves-light"} onClick={this.handleServerRefresh}>
                                                        <i className="material-icons right">refresh</i>Refresh
                                                    </button>
                                                </div>
                                            </div>

                                            {this.state.tables.list.map( table => 
                                                <div className="col s12 m3 l3" key={table._id}>
                                                    <div className="card tableCard grey darken-3">
                                                        <div className="card-content white-text">
                                                            <span className="card-title">Table {table.number}</span>
                                                            {this.state.queries.list.filter( obj => obj.table === table.number)
                                                            .map( query => 
                                                                <p 
                                                                    onClick={this.queryDelete}
                                                                    data-id={query.query._id}
                                                                    data-gid={query.gid} 
                                                                    style={{cursor: "pointer"}}
                                                                >
                                                                {query.query.query}
                                                                </p>)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            )}

                                        </div>
                                    </div>
                                    <div className="col s12 m3 l3">
                                        <div className="row alertDiv">

                                            <div className="top">
                                                <img className="responsive-img subLogo" src={alertViewLogo} />
                                            </div>

                                            {this.state.queries.list.map( query =>
                                                <div className="col s12">
                                                    <div className="card alertCard red darken-4" key={query.query._id}>
                                                        <div className="card-content white-text">
                                                            <span className="card-title">Table {query.table}</span>
                                                            <p 
                                                                onClick={this.queryDelete}
                                                                data-id={query.query._id}
                                                                data-gid={query.gid} 
                                                                style={{cursor: "pointer"}}
                                                            >
                                                            {query.query.query}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            )}

                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <div>Which restaurant?</div>
                                    <GetRestaurants 
                                        restaurant={this.state.restaurant}
                                        restaurantSelect={this.restaurantSelect} 
                                    />
                                    
                                </div>
                            )                       
                        }
                        
                        <button onClick={this.tester}>Console.log state</button>
                    </main>
                </div>
        )
    }


}

export default Restaurant;