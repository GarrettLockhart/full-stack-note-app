const User = require('./User.js');
const Post = require('./Post.js');

User.hasMany(Post, {
  foreignKey: 'user_posts'
});

Post.belongsTo(User, {
  foreignKey: 'post_creator'
});

module.exports = {
  User,
  Post
};
