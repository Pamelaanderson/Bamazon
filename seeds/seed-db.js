//Import Database Models
const db = require('../models');

//Syncing our sequelize models
db.sequelize.sync().then(function () {
    db.Product.bulkCreate([{

    product_name: "Monopoly",
    department_name: "Board Games",
    price: 25.50,
    stock_quantity: 45
},
{
    product_name: "Grand Theft Auto",
    department_name: "Video Games",
    price: 45.50,
    stock_quantity: 75
},
{
    product_name: "Fire TV Stick",
    department_name: "Technology",
    price: 39.99,
    stock_quantity: 145
},
{
    product_name: "Instant Pot",
    department_name: "Kitchen Appliances",
    price: 139.95,
    stock_quantity: 45
},
{
    product_name: "LifeStraw",
    department_name: "Ourdoors",
    price: 24.95,
    stock_quantity: 245
},
{
    product_name: "iRobot Roomba",
    department_name: "Home",
    price: 349.99,
    stock_quantity: 25
},
{
    product_name: "Echo Dot",
    department_name: "Home",
    price: 49.99,
    stock_quantity: 85
},
{
    product_name: "Noise-Canceling Headphones",
    department_name: "Technology",
    price: 198.50,
    stock_quantity: 45
},
{
    product_name: "External Batteries",
    department_name: "Technology",
    price: 29.50,
    stock_quantity: 245
},
{
    product_name: "Amazon Security Camera",
    department_name: "Technology",
    price: 125.50,
    stock_quantity: 45
},
{
    product_name: "Kindle",
    department_name: "Technology",
    price: 125.50,
    stock_quantity: 25
},
{
    product_name: "Electric Toothbrush",
    department_name: "Electronics",
    price: 25.50,
    stock_quantity: 45
}
]).then(function (data) {
    console.log('Data successfully added!');
}).catch(function (error) {
    console.log('Error', error)
});
});