var express = require('express')
var fs = require('fs');

var app = express()


/**Testing users**********************************/
app.get('/iblancasa', function (req, res) {
  if(req.params.tab == "repositories"){
    fs.readFile("responses/iblancasarepositories.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }
  else{
    fs.readFile("responses/iblancasa.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }

})

app.get('/iblancasakfollowers', function (req, res) {
  fs.readFile("responses/iblancasakfollowers.html", "utf-8", function(err,data){
    res.set('Content-Type', 'text/html');
    res.status(200).send(data);
  });
})

app.get('/erroruser', function (req, res) {
  fs.readFile("responses/iblancasakfollowers.html", "utf-8", function(err,data){
    res.set('Content-Type', 'text/html');
    res.status(404).send("");
  });
})

var requests = 0;

app.get('/nomoreuser', function (req, res) {
  if(requests==0)
    fs.readFile("responses/iblancasa.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      requests++;
      res.status(429).send("");
    });
  else{
    fs.readFile("responses/iblancasa.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }
})




app.get('/search/users', function (req, res) {
  //Test 1
  if(req.params.q="sort:joined+type:user+location:\"Ja%C3%A9n\"+created:2015-12-24..2016-03-20")
  fs.readFile("responses/cities/1.json", "utf-8", function(err,data){
    res.set('Content-Type', 'application/json');
    res.status(200).send(data);
  })

})



app.listen(3000);
