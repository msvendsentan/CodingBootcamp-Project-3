module.exports = {
    Restaurants: require("./restaurants"),
    Auth: require("./auth"),
    Menu: require("./menu"),
    Tables: require("./tables")
}

// This is just a starter, definitely not finished scaffolding. It'll be tricky because we need collections within collections
// i.e. Restaurants is an overarching collection with the menu collection inside with individual fooditem documents inside that take name, description, price