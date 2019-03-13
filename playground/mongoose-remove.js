const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndDelete('5c88aa13c0d9f013641f8b76').then((todo) => {
	console.log(todo);
});