const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Product = require('./product')

const Description = sequelize.define(
    'Description',
    {
        productId:
        {
            type:      DataTypes.INTEGER,
            allowNull: false,
            required:  true,
        },
        title:
        {
            type:      DataTypes.STRING,
        },
        text:
        {
            type:      DataTypes.STRING,
            allowNull: false,
            required:  true,
        },
        doc:
        {
            type:      DataTypes.STRING,
            required:  false,
        },
        link:
        {
            type:      DataTypes.STRING,
            required:  false,
        },
    },
    {
    }
)
Product.hasMany(
    Description,
    {
        foreignKey:
        {
            name:      'productId',
            allowNull: false,
        },
    }
)

module.exports = Description
