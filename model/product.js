const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Tu = require('./tu')

const Product = sequelize.define(
    'Product',
    {
        name:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            unique:       true,
            required:     true,
        },
        fullname:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            unique:       true,
            required:     true,
        },
        shortname:
        {
            type:         DataTypes.STRING,
            allowNull:    true,
            unique:       true,
        },
        summary:
        {
            type:         DataTypes.TEXT,
        },
        tuId:
        {
            type:         DataTypes.INTEGER,
            allowNull:    true,
            required:     true,
        },
        hide:
        {
            type:         DataTypes.BOOLEAN,
            allowNull:    false,
            required:     true,
            defaultValue: false,
        },
        hit:
        {
            type:         DataTypes.INTEGER,
            allowNull:    false,
            required:     true,
            defaultValue: 0,
        },
    },
    {
    }
)

Tu.hasMany(
    Product,
    {
        foreignKey:
        {
            name:      'tuId',
            allowNull: true,
        },
    }
)

module.exports = Product
// vim:foldmethod=marker
