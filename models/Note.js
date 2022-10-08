const { Models, DataTypes, Sequelize } = require('sequelize');
const User = require('./User.js');
const sequelize = require('../config/connection.js');

class Note extends Models {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    model: 'Note'
  }
);

module.exports = Note;
