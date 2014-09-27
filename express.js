//primeiro instale o express via npm (gerenciador de pacotes do node)
// depois rode esse arquivo "node express.js" e do seu browser acesse o localhost:8080 

var express = require('express');

var app = express();

app.get('/times/:name?',function(req,res,next){
  var name = req.params.name;
  console.log(name)
  //if - operador ternário- se houver uma váriavel name faz name.toLowerCase(), senão name = '';
  switch(name ? name.toLowerCase() : '' ){
    case 'palmeiras':
      res.send('<h1>'+name+'</h1><p><h3>primeiro campeão mundial</h3></p>');
      break;
    case 'santos':
      res.send('<h1>'+name+'</h1><p><h3>time do pelé</h3></p>');
      break;
    case 'corinthians':
      res.send('<h1>'+name+'</h1><p><h3>não é time!</h3></p>');
      break;
    default:
      next(); //manda a requisição para o próximo get
  }
});

app.get('/times/*?',function(req,res){
  res.send('Esse time não existe');
});

app.get('/',function(req,res){
  res.send('<h1>Hello World - Primeiro Exemplo em Express</h1> ');
})

var port = 8080;
app.listen(port);
console.log('Listening on port' + port);
