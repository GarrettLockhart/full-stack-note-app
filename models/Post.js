const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_creator: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: true,
    model: 'Post'
  }
);

module.exports = Post;
