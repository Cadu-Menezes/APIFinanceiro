const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/sequelize");

const categoira = (sequelize, DataTypes) => {

    const Categoria = sequelize.define('Categoria', {
        
        categoriadescricao:{
            type : DataTypes.STRING,
            unique: true
        },

        categoriaentrada:{
            type : DataTypes.BOOLEAN
        },
        
        categoriadata:{
            type : DataTypes.DATE
        },
        
    })

    return Categoria
}

module.exports = categoira