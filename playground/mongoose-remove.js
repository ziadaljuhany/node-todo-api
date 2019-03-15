const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
// 	console.log(result);
// });

Todo.findByIdAndRemove('5c8b475f194af90d9c64b027').then((todo) => {
	console.log(todo);
});