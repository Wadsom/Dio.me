var http = require('http');
var dt = require('./datahora');
let mostrarHora = console.log(dt.datetime());
mostrarHora;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + mostrarHora);
  res.end();
}).listen(8070);