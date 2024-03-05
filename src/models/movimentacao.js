const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/sequelize");

const movimentacao = (sequelize, DataTypes) => {

    const Movimentacao = sequelize.define('Movimentacao', {
       
        movimentacaoid:{
            type : DataTypes.INTEGER
        },

        movimentacaovalor:{
            type : DataTypes.INTEGER
        },

        movimentacaoentrada:{
            type : DataTypes.BOOLEAN
        },
        
        movimentacaodata:{
            type : DataTypes.DATE
        },

        movimentacaofixa:{
            type : DataTypes.BOOLEAN
        },

        idcategoria:{
            type : DataTypes.INTEGER
        },
    })

    return Movimentacao
}

module.exports = movimentacao