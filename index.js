var express = require('express')
var fs = require('fs');

var app = express()


/**Testing users**********************************/
app.get('/iblancasa', function (req, res) {
  if(req.params.tab == "repositories"){
    fs.readFile("responses/users/iblancasarepositories.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }
  else{
    fs.readFile("responses/users/iblancasa.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }

})

app.get('/iblancasakfollowers', function (req, res) {
  if(req.params.tab == "repositories"){
    fs.readFile("responses/users/iblancasarepositories.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }
  else{
    fs.readFile("responses/users/iblancasakfollowers.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }
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
    fs.readFile("responses/users/iblancasa.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      requests++;
      res.status(429).send("");
    });
  else{
    fs.readFile("responses/users/iblancasa.html", "utf-8", function(err,data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data);
    });
  }
})

/*******Testing City*********/

app.get('/search/users', function (req, res) {
  //Test 1
  var q = encodeURIComponent(req.query.q.split(' ').join('+'));

  if(q.substring(0,56)===encodeURIComponent("sort:joined+type:user+location:\"Jaén\"")){
    fs.readFile("./responses/cities/jaen/jaen1.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Granada\"+created:2008-01-01..2015-12-18")){
    fs.readFile("responses/cities/granada/granada2.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      console.log("estoy entrando");
      res.status(200).send(data);
    })
  }/*
  else{
    res.send("error");
  }
  /*
  else if(req.params.q=="sort:joined+type:user+location:\"Barcelona\""){
    fs.readFile("responses/cities/barcelona.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(req.params.q=="sort:joined+type:user+location:\"Barcelona\"+created:2008-01-01..2012-02-09"){
    fs.readFile("./responses/cities/barcelona2008-01-01-2012-02-09.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(req.params.q=="sort:joined+type:user+location:\"Barcelona\"+created:2008-01-01..2016-03-20"){
    fs.readFile("./responses/cities/barcelona2008-01-01-2016-03-20.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      console.log("asdasd");
      res.status(200).send(data);
    })
  }
  else if(req.params.q=="sort:joined+type:user+location:\"Barcelona\"+created:2008-01-01..2010-01-20"){
    fs.readFile("./responses/cities/barcelona2008-01-01-2010-01-20.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
*/
})

app.listen(3000);
