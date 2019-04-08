var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.redirect('https://www.assetcopier.com');
});

app.listen(80, function () {
  console.log('Server listening on port 80');
});

