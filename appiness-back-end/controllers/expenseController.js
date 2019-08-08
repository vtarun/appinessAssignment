const mongoQuery = require('./../mongodb/mongoQuery');

exports.budgetOverview = function(req, res){
	mongoQuery.budgetOverview().then(data=>{
		res.status(200).json(data);
	})
}

exports.getAllExpenses = function(req, res){
	mongoQuery.getAllExpenses().then(data=>{
		res.status(200).json(data);
	})
}

exports.addExpense = function(req, res){
	let expense = {
		category: req.body.expense.category,
		item_name: req.body.expense.item_name,
		amount: req.body.expense.amount,
		expense_date: new Date(),
		deleted: false
	}
	mongoQuery.addExpense(expense).then(data=>{
		res.status(200).json(data);
	})
}

exports.editExpense = function(req, res){
	let updated_expense = {
		category: req.body.expense.category,
		item_name: req.body.expense.item_name,
		amount: req.body.expense.amount,
		expense_date: new Date(req.body.expense.date),
		deleted: !!req.body.expense.deleted 
	};

	mongoQuery.editExpense(req.body.id, updated_expense).then(data=>{
		res.status(200).json(data);
	})
	.catch(err=>{
		res.status(500).send(err);
	})
}

exports.deleteExpense = function(req, res){
	mongoQuery.deleteExpense(req.body.id, {deleted: true}).then(data=>{
		res.status(200).json(data);
	})
	.catch(err=>{
		res.status(500).send(err);
	})
}

