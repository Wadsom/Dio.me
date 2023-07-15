const http = require('http');
const DT = require('./datahora');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type' : 'text/html'});
    res.write(`Tá essa hora ${DT.datetime()} em algum lugar, não sei onde.`);
    res.end('Serve is running....');
}).listen(8000);    