// Watch and compile LESS via gulp
require("./gulpfile");

// Start up an app with mongresto
// (and thus Express and mongoose)
var app = require("mongresto")({
  dbName: "marta",
  staticFolder: './www',
  permissionToAsk: function(modelName, method, query, req){
  	return (modelName == "Customer" && (method == "GET") || modelName == "Customer" && method == "POST") ||
  			method == "GET";
  }
});
 
// app is a standard Express app that
// could use middleware, like this:
// app.use( require("cookie-parser")() );
 
// Start up the Express app 
var port = 8080;
app.listen(port);
console.log('Express server listening on port',port);