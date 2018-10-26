import axios from "axios";

export default {
    restaurants: {
        populate: function() {
            return axios.get("/restaurants");
        },
        create: function(restaurant) {
            return axios.post("/restaurants", restaurant); //should prompt creation of admin acc?
        },
        get: function(id) {
            return axios.get("/restaurants/" + id); //open to everyone; this is used to "select" a restaurant
        },
        delete: function(id) {
            return axios.delete("/restaurants/" + id); //should be admin-only
        }
    },
    menu: {
        populate: function(rid) {
            return axios.post("/menu", rid);
        },
        add: function(item) {
            return axios.post("/menu/add", item); //should be admin-only
        },
        delete: function(ids) {
            return axios.delete("/menu", { data: ids }); //should be admin-only
        }
        
    },
    tables: {
        populate: function(rid) {
            return axios.post("/tables", rid);
        },
        add: function(table) {
            return axios.post("/tables/add", table); //should be admin-only
        },
        delete: function(ids) {
            return axios.delete("/tables", { data: ids }); //should be admin-only
        }
    },
    guest: {
        sit: function(info) {
            return axios.post("/guest", info);
        },
        order: function(order) {
            return axios.post("/guest/order", order); //needs guestid
        },
        //"Pay" is to be shown after the bill has been tallied. The "pay" button will simply delete the order
        pay: function(guest) {
            return console.log("");
        },
        //Triggers after paying or asking server for bill--deletes guest
        stand: function(guest) {
            return axios.delete("/guest", { data: guest });
        }
    },
    queries: {
        create: function(query) {
            return axios.post("/queries", query);
        },
        getAllByRestaurant: function(rid) {
            return axios.post("/queries/restaurant", rid);
        },
        delete: function(ids) {
            return axios.delete("/queries", { data: ids });
        }
    },
    authenticate: {
        create: function(signup) {
            return axios.post("/signup", signup);
        },
        login: function(login) {
            return axios.post("/login", login);
        }
    }
};
