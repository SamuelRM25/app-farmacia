const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_farmacia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre_us: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido_us: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono_us: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipous: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email_us: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  usuario_us: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password_us: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

module.exports = Usuario;