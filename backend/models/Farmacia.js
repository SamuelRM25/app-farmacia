const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Farmacia = sequelize.define('Farmacia', {
  id_farmacia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_farmacia: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nombre_farmacia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion_farmacia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefono_farmacia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email_farmacia: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'farmacias',
  timestamps: false
});

module.exports = Farmacia;
