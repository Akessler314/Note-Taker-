// DEPENDENCIES
const express = require("express"); 

//Express configuration 
const app = express(); 
const PORT = process.env.PORT || 3000; 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//defualuts to home page
app.use(express.static('./public'));

//Listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  