const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
let connectionPool;

exports.createConnection = function(){
	return new Promise((resolve, reject)=>{		
		mongoClient.connect(url,{ useNewUrlParser: true }, (err, db)=>{
			if(err){
				reject(err);
			}
			connectionPool= db.db('product');
			resolve("connection established...");
		});
	});
}

exports.getConnection = function(){
	return new Promise((resolve, reject)=>{
		if(connectionPool){
			resolve(connectionPool);
		}
		reject("no connection found.");
	});		
}
