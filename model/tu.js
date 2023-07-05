const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Tu = sequelize.define(
    'Tu',
    {
        number:
        {
            type:         DataTypes.INTEGER.UNSIGNED,
            allowNull:    false,
            unique:       true,
            required:     true,
            min:          1,
        },
        name:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            unique:       true,
            required:     true,
        },
        year:
        {
            type:         DataTypes.INTEGER.UNSIGNED,
            allowNull:    false,
            required:     true,
            min:          1992,
        },
        active:
        {
            type:         DataTypes.BOOLEAN,
            allowNull:    false,
            required:     true,
            defaultValue: true,
        },
    },
    {
    }
)

module.exports = Tu
// vim:foldmethod=marker
