var express = require("express");
var app = express();
app.set('port', (process.env.PORT || 3000));
app.get('/', function(request, response) {
	response.send("Wubu mommy!!!");
});

app.listen(app.get('port'), function() {
	console.log("Listening on port 3000");
});