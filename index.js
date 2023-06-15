const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


  var port = 3525;
  
  // iniciando o processo do servidor
  app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
  });

app.post('/soma', function(req, res) {
    var body = req.body;

    var rSoma = soma(body.a, body.b);
    

res.send(`O resultado da soma de ${body.a} e ${body.b} é ${rSoma}`);
  });
  
app.post('/sub', function(req, res) {
    var body = req.body;
    var rSub = subtracao(body.a, body.b);
    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${rSub}`);
  });

  app.post('/multi', function(req, res) {
    var body = req.body;
    var rMult = multiplicacao(body.a, body.b);
    res.send(`O resultado da multiplicacao de ${body.a} e ${body.b} é ${rMult}`);
  });

  app.post('/div', function(req, res) {
    var body = req.body;
    var rDiv = divisao(body.a, body.b);
    res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${rDiv}`);
  });



function soma(a, b) {
    return a + b;
  }

function subtracao(a, b) {
    return a - b;
  }

function multiplicacao(a, b) {
    return a * b;
  }

function divisao(a, b) {
    return a / b;
  }