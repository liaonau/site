const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Measure = require('./measure')
const Product = require('./product')

const Claim = sequelize.define(
    'Claim',
    {
        measureId:
        {
            type:      DataTypes.INTEGER,
            allowNull: false,
            required:  true,
        },
        productId:
        {
            type:      DataTypes.INTEGER,
            allowNull: false,
            required:  true,
        },
        demand:
        {
            type:    DataTypes.STRING,
        },
        min:
        {
            type:    DataTypes.FLOAT,
        },
        max:
        {
            type:    DataTypes.FLOAT,
        },
        text:
        {
            type:    DataTypes.STRING,
        },
        fmt:
        {
            type:     DataTypes.STRING,
        },
        avg:
        {
            type:     DataTypes.BOOLEAN,
        },
        opt:
        {
            type:     DataTypes.BOOLEAN,
        },
    },
    {
        indexes:
        [
            {
                unique: true,
                fields: ['measureId', 'productId', 'demand'],
            }
        ]
    }
)
Measure.hasMany(
    Claim,
    {
        foreignKey:
        {
            name:      'measureId',
            allowNull: false,
        },
    }
)
Product.hasMany(
    Claim,
    {
        foreignKey:
        {
            name:      'productId',
            allowNull: false,
        },
    }
)

module.exports = Claim
