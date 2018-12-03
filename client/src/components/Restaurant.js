import React, { Component } from 'react';
import GetRestaurants from './supportcomps/GetRestaurants';
import MenuAdd from "./playgroundcomps/MenuAdd"
import MenuGet from "./playgroundcomps/MenuGet"
import TableAdd from "./playgroundcomps/TableAdd"
import TableGet from "./playgroundcomps/TableGet"
import API from '../utils/API';
import Logo from '../images/communicateLogo.png';
import tableViewLogo from '../images/tableView.png';
import alertViewLogo from '../images/alertView.png';
import refillSymbol from '../images/refillSymbol.png';
import serverSymbol from '../images/serverSymbol.png';
import waterSymbol from '../images/waterSymbol.png';


import './Restaurant.css';

class Restaurant extends Component {

    state = {
        restaurant: {
            list: [],
            selected: {}
        },
        menu: {
            add: {
                item: "",
                description: "",
                type: "",
                price: 0,
                imageSrc: ""
            },
            list: []
        },
        tables: {
            add: {
                number: "",
                capacity: 0
            },
            list: []
        },
        queries: {
            list: []
        }
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
                    this.loadMenu(res.data._id)                    
                });
            }).catch(err => console.log(err));
    };

    loadMenu = (rid) => {
        API.menu.populate({ rid: rid })
            .then(res => {
                this.setState(prevState => ({
                    menu: {
                        ...prevState.menu,
                        list: res.data.menu
                    }
                }));
            })
            .catch(err => console.log(err));
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

    menuItemDelete = event => {
        event.preventDefault();
        API.menu.delete({
            id: event.target.getAttribute("data-id"),
            rid: this.state.restaurant.selected._id
        })
            .then(res => this.loadMenu(this.state.restaurant.selected._id))
            .catch(err => console.log(err));
    };

    tableDelete = event => {
        event.preventDefault();
        API.tables.delete({
            id: event.target.getAttribute("data-id"),
            rid: this.state.restaurant.selected._id
        })
            .then(res => this.loadTables(this.state.restaurant.selected._id))
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

    handleCreateMenu = event => {
        event.preventDefault();
        API.menu.add({
            rid: this.state.restaurant.selected._id,
            item: this.state.menu.add
        }).then(res => this.loadMenu(this.state.restaurant.selected._id)).catch(err => console.log(err));
    };

    handleMenuInput = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            menu: {
                ...prevState.menu,
                add: {
                    ...prevState.menu.add,
                    [name]: value
                }
            }
        }));
    };

    handleCreateTable = event => {
        event.preventDefault();
        API.tables.add({
            rid: this.state.restaurant.selected._id,
            table: this.state.tables.add
        }).then(res => this.loadTables(this.state.restaurant.selected._id)).catch(err => console.log(err));
    };

    handleTableInput = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            tables: {
                ...prevState.tables,
                add: {
                    ...prevState.tables.add,
                    [name]: value
                }
            }
        }));
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
                <div className="selectedDiv">
                    <h4>{this.state.restaurant.selected.name}</h4>
                </div>
                    <main>
                        {this.state.restaurant.selected.name ? 
                            (
                                <div>
                                    <div className="row"> {/* <-- This whole thing someday needs to be made into a component */}
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
                                                    <div className="col s12 m12 l3" key={table._id}>
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
                                    <hr></hr>
                                    <div>
                                        <h4>Edit Restaurant Settings</h4>
                                        <MenuAdd
                                            menu={this.state.menu.add}
                                            handleFormSubmit={this.handleCreateMenu}
                                            handleInputChange={this.handleMenuInput}
                                        />
                                        <MenuGet
                                            menu={this.state.menu.list}
                                            delete={this.menuItemDelete}
                                        />
                                        <TableAdd
                                            table={this.state.tables.add}
                                            handleFormSubmit={this.handleCreateTable}
                                            handleInputChange={this.handleTableInput}
                                        />
                                        <TableGet
                                            tables={this.state.tables.list}
                                            delete={this.tableDelete}
                                        />
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
                    </main>
                </div>
        )
    }


}

export default Restaurant;