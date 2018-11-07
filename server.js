// Imports express into our app and set it up for use
const express = require('express');
const path = require('path');

const app = express();

// defines a port for the server to listen for requests
const PORT = process.env.PORT || 3000;

//syncs with seeds
const db = require('./models');


//sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, './public')));

// Routes
//-----------------------

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

//Syncs our db first
db.sequelize.sync().then(function() {
    
})

//Starts our server on the predefined Port
app.listen(PORT, function() {
    console.log(`App is now listening on PORT ${PORT}`)
});