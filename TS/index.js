// const verificar = (a, b) =>{
//  if("a" === typeof(number) && "b" === typeof(number)){
//    return console.log(a + b); }
//    {
//     return console.log("Só aceito números!");
//    }
// } 
// verificar(1, 2);
// verificar("Wadson", "Pinheiro");
// const pessoa ={
//     name:"Wadi",
//     idade:20,
//     altura:1.79,
//    }

const { convertToObject } = require("typescript");

   
//    console.log(pessoa);


// const cupom = gets();

// const n = parseInt(gets());
// const pedidos = [];
// for (let i = 0; i < n; i++) {
//   c
//   pedidos.push(gets());
// }

// function calcularValorTotal(n, pedidos, cupom) {
//   let total = 0;

 
//   for (let i = 0; i < n; i++) {
//     //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
//     //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//     let [nome, valor] = pedidos[i].split(' ');
//     valor = parseFloat(valor);
//     total += valor;
//     const desconto = cupom === "10%" ? 0.1 : cupom === "20%"? 0.2 : 0;
//       const valorcomdesconto = valor - (valor * desconto);

//   }

  

//   //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
  
//   return valorcomdesconto.toFixed(2);
// }


//Recupera os valores de entrada, criando um array para os pedidos:


//TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.

//TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.


const array = function letras(palavra){
  palavra = palavra.trim();

  if(palavra === " "){
    return 0
  }
 var frase =  palavra.split(" ");
 console.log(frase.length);
 return frase.length;
} 

array("wadson pinheiro ");



















