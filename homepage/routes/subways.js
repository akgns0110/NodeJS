var mongodb = require('mongodb'); 
  

var database;

exports.connectDB = function(){
	var databaseURL = 'mongodb://localhost:27017/subway';
	
	mongodb.connect(databaseURL,function(err,db){
		if(err) throw err;
		
		console.log('connected to database');
		
		database = db;
	
	});	
}
var authUser = function(database,Area,callback){
	console.log('테스트');
	
	var users = database.collection('users');
	
	users.find({"Area":"광주","work":"운행중"}).toArray(function(err,docs){
		if(err){
			callback(err,null);
			return;		
		}
		if(docs.length > 0){
			console.log('광주를 찾음');
			callback(null,docs);
		}else{
			console.log('광주를 못찾음');
			callback(null,docs);
		}
	})
} 
exports.findAll = function(req, res) { 
		
	if (database) {
		authUser(database, "광주", function(err, docs) {
			if (err) {throw err;}
			
			if (docs) {
				console.dir(docs);				
				
				res.send(docs);						
					
				
			
			} else {
				res.send("다시");
			}
		});
	} else {
		res.send("실패");
	}
}; 
  

