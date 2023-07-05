const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const Sphere  = require('./sphere')
const Product = require('./product')

const Sphere_Product = sequelize.define('Sphere_Product', {})
Sphere.belongsToMany(Product, { through: Sphere_Product })
Product.belongsToMany(Sphere, { through: Sphere_Product })

module.exports = Sphere_Product
// vim:foldmethod=marker
