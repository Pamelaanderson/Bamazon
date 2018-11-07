// Dependencies----------------
//Include the path package to get the correct file path for our html

const path = require('path');


// Routing
//-----------------
module.exports = function(app) {

    //HTML GET requests
    // Below code handles when users 'visit a page
    //In each of the below cases teh user is shown an HTML page of content
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
};