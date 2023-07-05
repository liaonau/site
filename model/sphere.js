const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Sphere = sequelize.define(
    'Sphere',
    {
        link:
        {
            type:   DataTypes.STRING,
            unique: true,
        },
        name:
        {
            type:   DataTypes.STRING,
            unique: true,
        },
        description:
        {
            type:     DataTypes.STRING,
            required: true,
        },
    },
    {
    }
)

module.exports = Sphere
// vim:foldmethod=marker
