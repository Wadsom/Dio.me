
const {gerador} = require("./painel");

const entradas = [];
for (let i = 0; i < 3; i++) {
    entradas.push(gerador);
   
    }



console.log(entradas);



let i = 0;



setTimeout((
    function gets() {
       const valor = entradas[i];
       i++;
       return valor;
    } 
 )
,5000)

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };