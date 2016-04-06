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




  console.log("quiero tengo");
  console.log(q);

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
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"")){
    fs.readFile("responses/cities/barcelona/barcelona.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2008-01-01..2016-03-20")){
    fs.readFile("./responses/cities/barcelona/barcelona.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2008-01-01..2012-02-09")){
    fs.readFile("./responses/cities/barcelona/barcelona2008-01-01-2012-02-09.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2008-01-01..2010-01-20")){
    fs.readFile("./responses/cities/barcelona/barcelona2008-01-01-2010-01-20.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2010-01-20..2012-02-09")){
    fs.readFile("./responses/cities/barcelona/barcelona2010-01-20-2012-02-09.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2010-01-20..2011-01-30")){
    fs.readFile("./responses/cities/barcelona/barcelona2010-01-20-2011-01-30.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2011-01-30..2012-02-09")){
    fs.readFile("./responses/cities/barcelona/barcelona2011-01-30-2012-02-09.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2012-02-09..2016-03-20")){
    fs.readFile("./responses/cities/barcelona/barcelona2012-02-09-2016-03-20.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2012-02-09..2014-02-28")){
    fs.readFile("./responses/cities/barcelona/barcelona2012-02-09-2014-02-28.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2012-02-09..2013-02-18")){
    fs.readFile("./responses/cities/barcelona/barcelona2012-02-09-2013-02-18.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2012-02-09..2012-08-14")){
    fs.readFile("./responses/cities/barcelona/barcelona2012-02-09-2012-08-14.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2012-08-14..2013-02-18")){
    fs.readFile("./responses/cities/barcelona/barcelona2012-08-14-2013-02-18.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2013-02-18..2014-02-28")){
    fs.readFile("./responses/cities/barcelona/barcelona2013-02-18-2014-02-28.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2014-02-28..2016-03-20")){
    fs.readFile("./responses/cities/barcelona/barcelona2014-02-28-2016-03-20.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2014-02-28..2015-03-10")){
    fs.readFile("./responses/cities/barcelona/barcelona2014-02-28-2015-03-10.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2014-02-28..2014-09-03")){
    fs.readFile("./responses/cities/barcelona/barcelona2014-02-28-2014-09-03.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2014-09-03..2015-03-10")){
    fs.readFile("./responses/cities/barcelona/barcelona2014-09-03-2015-03-10.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Barcelona\"+created:2015-03-10..2016-03-20")){
    fs.readFile("./responses/cities/barcelona/barcelona2015-03-10-2016-03-20.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Ceuta\"")){
    fs.readFile("responses/cities/ceuta/ceuta.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }
  else if(q===encodeURIComponent("sort:joined+type:user+location:\"Ceuta\"+created:2008-01-01..2016-03-20")){
    fs.readFile("responses/cities/ceuta/ceuta.json", "utf-8", function(err,data){
      res.set('Content-Type', 'application/json');
      res.status(200).send(data);
    })
  }

})

app.listen(3000);
