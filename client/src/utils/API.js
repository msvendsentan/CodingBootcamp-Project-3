import axios from "axios";

export default {
    restaurants: {
        populate: function() {
            return axios.get("/restaurants");
        },
        create: function(restaurant) {
            return axios.post("/restaurants", restaurant);
        },
        get: function(id) {
            return axios.get("/restaurants/" + id);
        },
        delete: function(id) {
            return axios.delete("/restaurants/" + id);
        }
    },
    admin: {
        menu: {
            populate: function(rid) {
                return axios.post("/menu", rid);
            },
            add: function(item) {
                return axios.post("/menu/add", item);
            },
            delete: function(ids) {
                return axios.delete("/menu", { data: ids });
            }
            
        },
        tables: {
            populate: function(rid) {
                return axios.post("/tables", rid);
            },
            add: function(table) {
                return axios.post("/tables/add", table);
            },
            delete: function(ids) {
                return axios.delete("/tables", { data: ids });
            }
        }
    }

};