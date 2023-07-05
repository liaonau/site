const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    {
        dialect:  'mysql',

        host:     process.env.DB_HOST,
        port:     process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,

        define:
        {
            freezeTableName: true,
            timestamps:      false,
        },
    },
)

try
{
    sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
}
catch (e)
{
    die('Невозможно выполнить подключение к БД: ', e)
}

module.exports = sequelize
// vim: foldmethod=marker
