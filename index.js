var express = require('express')
var fs = require('fs');

var app = express()

app.get('/iblancasa', function (req, res) {
  fs.readFile("responses/iblancasa.html", "utf-8", function(err,data){
    res.set('Content-Type', 'text/html');
    res.send(data);
  });
})

app.listen(3000);
