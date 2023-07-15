// function solucao(peso1, peso2){
      
//        const PesoLeve = 55;
//        const pesomeiomedio = 65; 
//        const pesomedio = 75;
//        const pesomeiopesado = 85;
//        const pesopesado = 85;

//     if(peso1 >= peso2){
//         if(PesoLeve > peso1 && PesoLeve > peso2) {
//             return "PODEM LUTAR"
//         }
//           else if(pesomeiomedio > peso1 && PesoLeve <= peso1 && pesomeiomedio > peso2 && PesoLeve <= peso2 ){
//               return "PODEM LUTAR"
//            }
//           else if(pesomedio > peso1 && pesomeiomedio <= peso1 && pesomedio > peso2 && pesomeiomedio <= peso2 ){
//               return "PODEM LUTAR"
//            }
//           else if(pesomeiopesado > peso1 && pesomedio <= peso1 && pesomeiopesado > peso2 && pesomedio <= peso2 ){
//               return "PODEM LUTAR"
//            }
//           else if(pesopesado <= peso1 && pesopesado <= peso2){
//               return "PODEM LUTAR"
           
//            }
//     } else if (peso2 > peso1){
//         if(PesoLeve > peso1 && PesoLeve > peso2) {
//             return "PODEM LUTAR"
//         }
//           else if(pesomeiomedio > peso1 && PesoLeve <= peso1 && pesomeiomedio > peso2 && PesoLeve <= peso2 ){
//               return "PODEM LUTAR"
//            }
//           else if(pesomedio > peso1 && pesomeiomedio <= peso1 && pesomedio > peso2 && pesomeiomedio <= peso2 ){
//               return "PODEM LUTAR"
//            }
//           else if(pesomeiopesado > peso1 && pesomedio <= peso1 && pesomeiopesado > peso2 && pesomedio <= peso2 ){
//               return "PODEM LUTAR"
//            }
//           else if(pesopesado <= peso1 && pesopesado <= peso2){
//               return "PODEM LUTAR"
//            }
//         }
//         return "NAO PODEM LUTAR"
//       }      

//       console.log(solucao(84,100));
   
      
// function calculototal(valorHamburguer, quantidadeHamburguer, valorBebida, quantidadeBebida, valorPago){
//     let VF = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida)
    
//      return  console.log(`O preço final do pedido é R$ ${VF}. Seu troco é R$ ${valorPago - VF}.`);
//   }
// // calculototal(10, 3 , 12 , 2 , 100);  
// let valorHamburguer = 100;
// let quantidadeHamburguer = 2;
// let valorBebida = 23;
// let quantidadeBebida = 2;
// let valorPago = 100;
// if(valorHamburguer, quantidadeHamburguer, valorBebida,quantidadeBebida){
//     let valor = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida)
    
//     console.log(`O preço final do pedido é R$ ${valor}. Seu troco é R$ ${valorPago - valor}.`);
// }
// valorPedido  = 100;
// if(valorPedido >= 50){
//     return console.log("Parabens, você ganhou uma sobremesa gratis!");
//   } { 
//     return console.log("Que pena, você nao ganhou nenhum brinde especial.");
//   }
const numPedidos = 2;

for (let i = 1; i <= numPedidos; i++) {
  const prato = "hamburguer";
  const calorias = 500;
 
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
//   let ehVegano = "s";
//   if (ehVegano === "s" ){
//     console.log(`Pedido ${i}: ${prato} (Vegano) - ${calorias} calorias`);
    
//   } else if (ehVegano === "n"){
//     console.log(`Pedido ${i}: ${prato} (Nao-Vegano) - ${calorias} calorias`);
//   }


//Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
//Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
const ehVegano = "s";
 if (ehVegano === "s" ){
  console.log(`Pedido ${i}: ${prato} (Vegano) - $calorias} calorias`);
  
} else if (ehVegano === "n"){
  console.log(`Pedido ${numPedidos}: ${prato} (Nao-Vegano) - ${calorias} calorias`);
}



}
