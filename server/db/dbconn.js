var creds=require('../db/default.js');
var MongoClient = require('mongodb').MongoClient;
var assert= require('assert');
// var mongoose=require(mongoose);

//module.exports.connect=function(callback){
var url=MongoClient.connect('mongodb://'+creds.host + '/', function(err, db){
  assert.equal(err,null);
  console.log('connected with mydb..');

var dbo = db.db("mydb");
   var myobj=[
     { id: 1, firstName: 'Steve', lastName: 'Jobs' },
     { id: 2, firstName: 'Bill',  lastName: 'Gates' },
     { id: 3, firstName: 'James', lastName: 'Bond' },
     ];

     dbo.collection("customers").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
     // db.close();

      /*dbo.collection("customers").find({}).toArray(function(err,docs){
        assert.equal(err,null);
        console.log('found');
        console.log(docs);
     });
*/

    dbo.collection("customers").count(function (err, count) {
      if (err) throw err;
      
      console.log('Total Rows: ' + count);
    });

});
   db.close();  
});
/*
if (err){
      return  callback(err);
}
console.log("Database created!");
// db.close();
  return callback(false,200);
})
};


/*var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/