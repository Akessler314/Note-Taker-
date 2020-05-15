// DEPENDENCIES
var path = require('path'); 

// ROUTING
module.exports = function(app) {

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    
  // If no matching route is found default to home page 
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });


}; 