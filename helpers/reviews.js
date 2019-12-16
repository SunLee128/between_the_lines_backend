var db = require('../models');

exports.getReviews = function(req, res) {
	db.Review
		.find()
		.then(function(todos) {
			res.json(todos);
		})
		.catch(function(err) {
			res.send(err);
		});
};

exports.createReview = function(req, res) {
	db.Review
		.create(req.body)
		.then(function(newTodo) {
			res.status(201).json(newTodo);
		})
		.catch(function(err) {
			res.send(err);
		});
};

exports.getReview = function(req, res) {
	db.Review
		.find({ _id: req.params.todoId })
		.then(function(foundTodo) {
			res.json(foundTodo);
		})
		.catch(function(err) {
			res.send(err);
		});
};

exports.updateReview = function(req, res) {
	db.Review
		.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
		.then(function(todo) {
			res.json(todo);
		})
		.catch(function(err) {
			res.send(err);
		});
};

exports.deleteReview = function(req, res) {
	db.Review
		.remove({ _id: req.params.todoId })
		.then(function() {
			res.json({ message: 'Deleted' });
		})
		.catch(function(err) {
			res.send(err);
		});
};

module.exports = exports;
