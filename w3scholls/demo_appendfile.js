var fs = require('fs');

// fs.appendFile('myfsappendfile.txt', 'Continue....', function(err){
//     if(err) throw err;
//     console.log('Okay,contine....');
// })



// fs.appendFile('demo_JS.js', 'var numero = 4', function(err){
//     if(err) throw err;
//     console.log('Sucesso...!!');
// })









// fs.open('fs_openTest.txt', 'w', function (err, file){
//     if (err) throw err;
//     console.log("Finalizado.")
// })


// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
  


// fs.appendFile('fs_writefile.txt', 'Atualização!!', function(err){
//     if(err) throw err;
//     console.log("Saved!")
// })


// fs.writeFile('fs_writefile.txt', 'wadson', function (err, file){
//     if(err) throw err;
//     console.log("finalizado!!")
// })

//Tá criando o arquivo aqui e o "w" é pra que arquivo sejá "escrito/criado"
//fs.oppendfile('TextDelet.txt', )
setTimeout((res,req)=> {
 fs.writeFile('TextDeletedRename.txt','w', function (err){
    if(err) throw err;
    console.log("Saved!!!");
});
},2000);




//.unlink('nomeDoArquivo.terminação(exemplo:.txt', function (err))
fs.unlink('TextDeletedRename.txt', function (err){
    if (err) throw err;
    console.log("Patched!!| Deleted!!!");
},1000);


setTimeout((req, res)=> {
    console.log("Rebootinng.....!!!");
}, 4000);




setTimeout((res, req)=>{
    fs.rename('TextDeletedRename.txt', 'TextDeletedRename.txt', function (err){
        if(err) throw err;
        console.log("Renomeado com Sucesso!!!");
    });
}, 3000);

















let http = require('http');

http.createServer( function (re, res){
    fs.readFile('IndexHTml.html', function (err, data){
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write('Saved!!');
        return res.end();
    });
}).listen(8070);


// //fs.open('fs_writefile.txt','w', function (err){
// if(err) throw err;
// console.log("Saved!!");
// });