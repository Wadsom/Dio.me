const http = require('http');
var url = require('url');

http.createServer(function(res,req){
    res.writeHead(200, {'content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var text = q.year + "" + q.mounth;
    res.end(text);
}).listen(8040);