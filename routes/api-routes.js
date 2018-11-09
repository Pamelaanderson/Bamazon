//Imports in our db models
const db = require('../models');

// Routing
//=======================

module.exports = function(app) {

// API requests for /api/products
//Below code controls what happens when a request is made to the path

    // GET the products and responds with the current products
    app.get('/api/products', function(req, res) {
    db.Product.findAll({}).then(function(rows) {
res.json(rows);
    }).catch(function(error) {
res.json({ error: error});
    });
});
//GET the products  with just the requested table at the referenced id
app.get('/api/products/:id', function(req, res) {
db.Product.find({ where: {id: req.params.id}})
.then(function(data) {
    res.json(data);
}).catch(function(error) {
    res.json({ error: error});
});
});
//Update the id list
//responds with success: true or false if successful
    app.put('/api/products/:id', function(req, res) {
        console.log(req.params.id, "we are in update");
        db.Product.update(
            req.body,
            { where: { id: req.params.id } }
        ).then(function(data) {
            res.json({ success: true, data: data})
        }).catch(function(error) {
            res.json({ success: false, error: error});
        });
    });
};