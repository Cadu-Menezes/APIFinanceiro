const Sequelize = require('sequelize')
const configDataBase = require('./database')

const sequelize = new Sequelize(configDataBase)

module.exports = sequelize