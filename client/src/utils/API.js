import axios from "axios";

export default {
    populateRestaurants: function() {
        return axios.get("/restaurants");
    },
    createRestaurant: function(restaurant) {
        return axios.post("/restaurants", restaurant);
    },
    getRestaurant: function(id) {
        return axios.get("/restaurants/" + id);
    },
    deleteRestaurant: function(id) {
        return axios.delete("/restaurants/" + id);
    }
};