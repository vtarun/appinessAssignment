const mongoQuery = require('./../mongodb/mongoQuery');

exports.getBudget = function(req, res){
	mongoQuery.getBudget().then(data=>{
		res.status(200).json(data);
	})
	.catch(err=>{
		res.status(500).send(err);
	})
}

exports.updateBudget = function(req, res){
	mongoQuery.updateBudget(req.body.id, req.body.total_budget)
		.then(data=>{
			res.status(200).json(data);
		})
		.catch(err=>{
			res.status(500).send(err);
		})
}

exports.getAllCategories = function(req, res){
	mongoQuery.getAllCategories().then(data=>{
		res.status(200).json(data);
	})
	.catch(err=>{
		res.status(500).send(err);
	})
}

exports.addCategory = function(req, res){
	mongoQuery.addCategory(req.body.category).then(data=>{
		res.status(200).send(data);
	})
	.catch(err=>{
		res.status(500).send(err);
	})
}

exports.deleteCategory = function(req, res){
	mongoQuery.deleteCategory(req.query.id).then(data=>{
		res.status(200).json(data);
	})
	.catch(err=>{
		res.status(500).send(err);
	})
}