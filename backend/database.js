const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('farmacia-app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
