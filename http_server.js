var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.redirect("https://www.assetcopier.com");
  res.end(); //end the response
}).listen(80); //the server object listens on port 8080 