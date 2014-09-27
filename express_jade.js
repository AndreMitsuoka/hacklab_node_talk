/*
 * Instale o express e o jade via npm
 */
var express = require('express');

var app = express();

app.set('view engine','jade');
app.set('view options',{layout:true});
app.set('views',__dirname+'/views');

app.get('/times/:name?',function(req,res,next){
  var name = req.params.name;

  //if - operador ternário
  switch(name ? name.toLowerCase() : '' ){
    case 'palmeiras':
    case 'santos':
    case 'corinthians':
      res.render('times',{time:name});
      break;
    default:
      next();
  }
});

app.get('/times/*?',function(req,res){
  res.render('times',{time:null});
});

app.get('/',function(req,res){
  res.render('index');
})

var port = 8080;
app.listen(port);
console.log('Listening on port' + port);
