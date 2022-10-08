const User = require('./User.js');
const Note = require('./Note.js');

Note.belongsTo(User);
User.hasMany(Note);

module.exports = {
  User,
  Note
};
