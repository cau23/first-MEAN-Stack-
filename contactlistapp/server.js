var express = require('express');
var app = express();

//set up express command to tell server where to look for html, js, css file
//static basically tells server to look for static files html,css,js
app.use(express.static(__dirname + "/public"));

// req = request 
// res = response
// this tells server to listen for the GET request for the created contact list route
// when it receives the request it's going to print to console in command prompt
app.get('/contactlist', function (req, res) {
	console.log("I received a GET request")
});

app.listen(3000);
console.log("Server running on port 3000");
