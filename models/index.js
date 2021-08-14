const Comment = require('./comment');
const Follower=require('./Follower');
const Interest=require('./interest');
const Likes=require('./likes');
const Post=require('./Post');
const UserInterest=require('./user-interest');
const User = require('./User');

/*==============================================*/
/*================User Relations================*/
/*==============================================*/

/*User can create many posts (one to many )*/
User.hasMany(Post, {
    foreignKey: 'user_id'
});

/*creates an association between the post and the user. 
The foreign key is added on the post.*/
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

/*User can comment on many posts (one to many )*/
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

/*creates an association between the comment and the user. 
The foreign key is added on the comment.*/
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

/*User can like many posts (one to many )*/
User.hasMany(Likes, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

/*creates an association between the likes and the user. 
The foreign key is added on the likes.*/
Likes.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});


/*User can like many posts (one to many )*/
User.hasMany(Follower, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

/*creates an association between the follower and the user. 
The foreign key is added on the follower.*/
Follower.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

/*==============================================*/
/*================Post Relations================*/
/*==============================================*/



/*==============================================*/
/*================Comments Relations================*/
/*==============================================*/


Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});



Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})
module.exports = { User, Post, Comment };