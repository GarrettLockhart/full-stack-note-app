const { Model, DataTypes, Sequelize } = require('sequelize');
const User = require('./User.js');
const sequelize = require('../config/connection.js');

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    model: 'Note'
  }
);

module.exports = Note;
