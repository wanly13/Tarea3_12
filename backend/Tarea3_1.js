var express=require('express');
var app=express();
var cors=require('cors');
app.use(cors());
var mysql=require('mysql');

app.get('/restaurants',function(req, res){
  // Step 0: Setup the connection

  var connection = mysql.createConnection({
    Host: "127.0.0.1",
    user: 'utec',
    password: '1234567890',
    database : 'restaurant'
  });
  
  // Step 1: Open the connection
  connection.connect();

  // Step 2: Send the query  
  var myQuery="SELECT Nombre_del_Plato, precio, create_date, modified_date FROM menu";
  connection.query(myQuery, function (error, results, fields) {    
    // Step 3: Process the result inside the callback
         
    res.send(results);
    // Step 4: Close the connection
    connection.end();
  });
});

app.listen(3000,function(){console.log("We are in the port 3000 ")})

