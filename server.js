// Load dependencies
// Is dotenv required?
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const apiRoutes = require("./routes/apiRoutes");

// Server specifications
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Socket.io boilerplate

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('User Disconnected');
    });
    socket.on('example_message', function (msg) {
        
    });
});

io.listen(8000);

// Passport/auth boilerplate

app.use(session({
    secret: "desolate-garden",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to our database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/restaurantdb";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here
app.use(apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
