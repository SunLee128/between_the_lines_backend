require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/reivew-api',{useNewUrlParser: true});
mongoose.Promise = Promise;

module.exports.Todo = require('./review');
