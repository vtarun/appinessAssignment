const connectDB = require("./connectionFactory");
var ObjectId = require('mongodb').ObjectID;

exports.budgetOverview = function(){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").find({"total_budget": {$exists:true}}).toArray((err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.getAllExpenses = function(){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").find({category: {$exists: true}}).toArray((err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.addExpense = function(expense){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").insertOne(expense).toArray((err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.editExpense = function(id, updatedExpense){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").updateOne({_id: ObjectId(id)}, {$set: updatedExpense}, (err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.deleteExpense = function(id, deleteExpense){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").updateOne({_id: ObjectId(id)},{$set: deleteExpense}, (err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.getBudget = function(){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").find({"total_budget": {$exists:true}}).toArray((err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.updateBudget = function(id, total_budget){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").findOneAndReplace({_id : ObjectId(id)}, { total_budge: total_budget }, {upsert: true}, (err, data)=>{
				if(err){
					console.log(err);
					reject(err);
				}
				resolve(data);
			})		
		})	
	})
}

exports.getAllCategories = function(){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").find({category: 1}).toArray((err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.addCategory = function(category){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").insertOne({category :{name: category}}, (err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}

exports.deleteCategory = function(id){	
	return new Promise((resolve, reject)=>{
		connectDB.getConnection().then(accessCollection => {			
			accessCollection.collection("productDetails").deleteOne({_id: ObjectId(id)}, (err, data)=>{
				if(err){
					reject(err);
				}
				resolve(data);
			});
		})
	})	
}
