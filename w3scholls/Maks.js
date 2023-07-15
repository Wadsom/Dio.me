const http = require('http');

http.createServer(function(req,res){
res.writeHead(300,{'content-Type': 'text/html'});
res.write("Aqui tá meu nome: Daniel Finizola");
res.end();
}).listen(8060);