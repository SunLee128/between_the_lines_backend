const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  user_name: {
    type: String
  },
  item: {
    type: String,
    required: 'Item cannot be blank'
  },
  review: {
    type: String,
    required: 'Review cannot be blank'
  }, 
  key_phrase: {
    type: Arrays
  },
  entities: {
    type: Arrays
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Review = mongoose.model('Review', reviewSchema)
module.exports = Review;