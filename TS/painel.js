const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios');

// const Mulher = f => f.genero === 'M';
// const Pais = f => f.pais === 'China';
// const Salario = (func, funcAtual) =>{
//  return func.salario > funcAtual.salario ? func : funcAtual;
// }


// axios.get(url).then(response => {
//     const funcionarios = response.data
    
// const ID = funcionarios
//                        .filter((Mulher))
//                        .filter((Pais))
//                        .reduce((Salario))

// console.log(ID);



// })




// const PI = function criarProd(nome,idade,salario) {
//     return {
//        nome,
//        idade,
//        salario 
//     }
// }

// console.log(PI('Itala', 60, 0));

const app =  require('express')();
app.listen(3000, 
    ()=> {
        console.log("Serve in Running....");
    })
app.get('/skills', (request,Response)=>{
    res.send("JS e Node.js API in Running")
})




const A = require('./InstanciaUnica')
const B = require('./InstanciaUnica')

const C = require('./InstanciaNova')()
const D = require('./InstanciaNova')()
 


A.inc();
A.inc();
console.log(B. valor);

console.log(D.valor);
