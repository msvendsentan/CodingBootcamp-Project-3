import React, { Component } from "react";
import RestaurantAdd from "./playgroundcomps/RestaurantAdd"
import RestaurantGet from "./playgroundcomps/RestaurantGet"
import RestaurantSelection from "./playgroundcomps/RestaurantSelection"
import API from "../utils/API";

class DBPlayground extends Component {

    state = {
        restaurant: {
            add: {
                name: "",
                description: "",
                address: "",
                imageSrc: ""
            },
            list: [],
            selected: {}
        }
    };

    componentDidMount() {
        this.loadRestaurants();
    };

    loadRestaurants = () => {
        API.populateRestaurants()
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
        API.getRestaurant(event.target.getAttribute("data-id"))
            .then( res => {
                console.log(res.data);
                this.setState(prevState => ({
                    restaurant: {
                        ...prevState.restaurant,
                        selected: res.data
                    }
                }));
            })
            .catch(err => console.log(err));
    };

    restaurantDelete = event => {
        event.preventDefault();
        API.deleteRestaurant(event.target.getAttribute("data-id"))
            .then(res => this.loadRestaurants())
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.createRestaurant(this.state.restaurant.add)
            .then(res => this.loadRestaurants())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            restaurant: {
                ...prevState.restaurant,
                add: {
                    ...prevState.restaurant.add,
                    [name]: value
                }
            }
        }));
    };

    tester = event => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <RestaurantAdd
                    restaurant={this.state.restaurant.add}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <RestaurantGet 
                    list={this.state.restaurant.list}
                    select={this.restaurantSelect}
                    delete={this.restaurantDelete}
                />
                <RestaurantSelection
                    restaurant={this.state.restaurant.selected}
                />
                <button onClick={this.tester}>Test button</button>
            </div>
        );
    }
}

/*
Render:
MenuAdd
MenuGet (see full menu, delete options) - WILL NEED SORT FUNCTIONALITY (array.filter -> array.map)
SeatingAdd (password generator necessary)
SeatingGet (regernate password included)

GuestSitAtTable (incl. first query (allergies))
GuestOrder
GuestQuery (update when "addressed")
GuestBill

ServerGetQueries ("address" options)


*/

export default DBPlayground;
