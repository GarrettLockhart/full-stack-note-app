const { Models, DataTypes } = require('sequelize');
const Note = require('./Note.js');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class User extends Models {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    note_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Note,
        key: 'id'
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }
    },

    sequelize,
    model: 'User'
  }
);

module.exports = User;
