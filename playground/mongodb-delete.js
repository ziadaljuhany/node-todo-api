// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	// // deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// // deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// // findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Ziad Al Juhany'});

	// db.collection('Users').findOneAndDelete({
	// 	_id: new ObjectID('5c6789b92d8e0e705e9d85e6')}).then((results) => {
	// 	console.log(JSON.stringify(results, undefined, 2));
	// });

	// db.collection('Users').findOneAndDelete({
	// 	_id: ObjectID('5c6789b92d8e0e705e9d85e6')}).then((result) => {
	// 	console.log(result);
	// });	

	// client.close();
});