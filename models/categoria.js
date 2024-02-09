const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const categoira = (sequelize, DataTypes) => {

    const Categoria = sequelize.define('Categoria', {
        
        categoriadescricao:{
            type : DataTypes.STRING
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