var express = require('express');
var router = express.Router();
var helpers = require('../helpers/reviews')

router.route('/')
.get(helpers.getReviews)
.post(helpers.createReview) 

router.route('/:reviewId')
.get(helpers.getReview)
.put(helpers.updateReview)
.delete(helpers.deleteReview)

module.exports = router;