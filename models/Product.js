//Define our table name and collumns that we need

// module.exports = function(sequelize, DataTypes) {
//     const Product = sequelize.define('Product', {
//         product_name: DataTypes.STRING,
//         department_name: DataTypes.STRING,
//         price: DataTypes.DECIMAL(10,2),
//         stock_quantity: DataTypes.INTEGER
//     });
//     return Product;
// }

module.exports = function (connection, Sequelize) {
    var Product = connection.define('Product', {
        product_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        department_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: Sequelize.REAL,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        stock_quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    
    return Product;
};