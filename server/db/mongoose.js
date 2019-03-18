var mongoose = require('mongoose');

mongoose.Promise =  global.Promise;

// Connect to Heroku App
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// Connect to Local App
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false });

module.exports = {mongoose};