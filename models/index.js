module.exports = {
    Restaurant: require("./Restaurant"),
    Guest: require("./Guest"),
    Query: require("./Query"),
    //Auth: require("./auth"),
    Menu: require("./Menu"),
    Table: require("./Table")
}

// This is just a starter, definitely not finished scaffolding. It'll be tricky because we need collections within collections
// i.e. Restaurants is an overarching collection with the menu collection inside with individual fooditem documents inside that take name, description, price