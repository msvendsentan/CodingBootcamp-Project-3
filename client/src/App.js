import React, { Component } from "react";
import axios from "axios";
import PrivateRoute from "./components/playgroundcomps/PrivateRoute";

import './App.css';

import {
    Route,
    Switch
} from 'react-router-dom';

import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Customer from './components/Customer';
import Messages from './components/Messages';

class App extends Component {
    constructor() {
        super()
        this.state = {
            login: {
                account: {
                    loggedIn: false,
                    username: null
                }
            }
        }

        this.getUser = this.getUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount() {
        this.getUser();
        this.hello();
    }

    hello = () => {
        console.log("hello");
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    getUser() {
        axios.get('/find').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')
                this.setState({
                    login: {
                        account: {
                            loggedIn: true,
                            username: response.data.user.username
                        }
                    }
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    login: {
                        account: {
                            loggedIn: false,
                            username: null
                        }
                    }
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path='/Restaurant' render={(props) => <Restaurant {...props} loggedIn={this.state.login.account} />} />
                        <Route exact path="/Customer" component={Customer} />
                        <Route exact path="/Messages" component={Messages} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
