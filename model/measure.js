const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Measure = sequelize.define(
    'Measure',
    {
        name:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            unique:       true,
            required:     true,
        },
        text:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            unique:       true,
            required:     true,
        },
        unit:
        {
            type:         DataTypes.STRING,
            allowNull:    true,
            required:     false,
        },
        fmt:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            defaultValue: 'd',
        },
        avg:
        {
            type:         DataTypes.BOOLEAN,
            allowNull:    true,
        },
    },
    {
    }
)

module.exports = Measure
// vim:foldmethod=marker
