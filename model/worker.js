const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')

const phoneDefault = '+375214507017'

const Worker = sequelize.define(
    'Worker',
    {
        name:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            required:     true,
        },
        lastname:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            required:     true,
        },
        patronymic:
        {
            type:         DataTypes.STRING,
        },
        job:
        {
            type:         DataTypes.STRING,
            allowNull:    false,
            required:     true,
        },
        ask:
        {
            type:         DataTypes.STRING,
        },
        phone:
        {
            type:         DataTypes.STRING,
            required:     true,
            defaultValue: phoneDefault,
        },
        a1:
        {
            type:         DataTypes.STRING,
            validate:
            {
                is:       /^\+([0-9]){12}$/
            },
        },
        mts:
        {
            type:         DataTypes.STRING,
            validate:
            {
                is:       /^\+([0-9]){12}$/
            },
        },
        viber:
        {
            type:         DataTypes.STRING,
        },
        telegram:
        {
            type:         DataTypes.STRING,
        },
        whatsapp:
        {
            type:         DataTypes.STRING,
        },
        email:
        {
            type:         DataTypes.STRING,
            validate:
            {
                is:       /^\S+@\S+\.\S+$/
            },
        },
        show:
        {
            type:         DataTypes.BOOLEAN,
            required:     true,
            defaultValue: true,
        },
        fullname:
        {
            type: DataTypes.VIRTUAL,
            get() { return `${this.lastname} ${this.name} ${this.patronymic}` },
            set(value) { throw new Error('Do not try to set the `fullname` value!') },
        },
        hasData:
        {
            type: DataTypes.VIRTUAL,
            get()
            {
                return (
                    (this.a1       != null) ||
                    (this.mts      != null) ||
                    (this.telegram != null) ||
                    (this.whatsapp != null) ||
                    (this.viber    != null) ||
                    (this.email    != null)
                )
            },
            set(value) { throw new Error('Do not try to set the `hasData` value!') },
        },
    },
    {
        indexes:
        [
            {
                unique: true,
                fields: ['name', 'lastname', 'patronymic'],
            }
        ]
    }
)

module.exports = Worker
// vim:foldmethod=marker
