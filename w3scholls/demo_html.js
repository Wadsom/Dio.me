// var fs = require('fs');
// var http = require('http');

// http.createServer(function (req, res){
//     fs.readFile('gym.html', function(err,data){
//         res.writeHead(200,{'content-Type':'text/html'});
//          res.write(data);
//          return res.end();
//     })
// }).listen(1010);
























    const fs = require('fs');
    const http = require('http');
    


    http.createServer(function (req, res){
        fs.readFile('gym.html', function (err, data){
            res.writeHead(200, {'content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }).listen(8090);








