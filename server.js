// Load dependencies
// Is dotenv required?
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
// const passport = require("passport")
//const Strategy = require("strategy-here").Strategy;
//const auth = link to database/auth file/etc
const apiRoutes = require("./routes/apiRoutes");

// Server specifications
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
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
        console.log('message: ' + msg);
    });
});

io.listen(8000);

// Passport/auth boilerplate

// app.use(require("express-session")({ secret: "placeholder", resave: false, saveUninitialized: false }));

// passport.use(new Strategy(
//     function (username, password, cb) {
//         auth.users.findByUsername(username, function (err, user) {
//             if (err) { return cb(err); }
//             if (!user) { return cb(null, false); }
//             if (user.password != password) { return cb(null, false); }
//             return cb(null, user);
//         });
//     }
// ));

// passport.serializeUser(function (user, cb) {
//     cb(null, user.id);
// });

// passport.deserializeUser(function (id, cb) {
//     auth.users.findById(id, function (err, user) {
//         if (err) { return cb(err); }
//         cb(null, user);
//     });
// });

// app.use(passport.initialize());
// app.use(passport.session());

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
//require("./routes/apiRoutes")(app, passport); Might need a special passport thing for certain routes - tbd

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
