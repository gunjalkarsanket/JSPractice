var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url).then(function(err,db) {
    if (err) throw err;
    var dbo = db.db("EmployeeDB3");
  
    dbo.createCollection("Employee3", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
     // db.close();
    });
    var myobj1 = [
        { name: 'pradip', address: 'mumbai'},
        { name: 'sanket', address: 'pune'},
        { name: 'vrat', address: 'pune'},
       
      ]
      dbo.collection("Employee3").insertMany(myobj1, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log("inserted");
       // db.close();
      })

    .then(function(db1) {
      db1.collection('Employee3').updateOne({
         name: "sanket"
    }, {
        $set: {
            name: "ajay"
        }

    });
    })
    
}.catch(
  {
    
  }
));
console.log("success");