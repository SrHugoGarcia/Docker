const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Sequelize = require('sequelize')
const Cliente = sequelize.define('Clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      rfc: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique:true,
        validate:{len:[12,12]}
      },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    apellidoPaterno: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      apellidoMaterno: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      celular: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          len: [10, 10],
        },
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
   
    
  });
  
  module.exports = Cliente;