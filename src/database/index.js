var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest');

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));


mongoose.Promise = global.Promise;
module.exports = mongoose;