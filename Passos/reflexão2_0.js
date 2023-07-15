/* const regras = (peso1, peso2) => {
    if(peso1 / peso2 <= 1.2 || peso2 / peso1 <= 1.2){
        return true;
    } return false;
}

function solucao(peso1, peso2){
    if(peso1 / peso2 <= 1.2 || peso2 / peso1 <= 1.2){
        return console.log("Podem lutar");
    } else{ return console.log("não   pode lutar");
}}

solucao(52, 42);
/*
Saída
Você deve retornar:

PODEM LUTAR: se os lutadores forem da mesma categoria;

NAO PODEM LUTAR: se os lutadores forem de categorias diferentes.

Exemplo
Entrada 1
peso1 = 60

peso2 = 64

Saída 1
PODEM LUTAR

Explicação 1
Um dos lutadores pesa 60 kg e o outro pesa 64 kg. Como ambos são da categoria dos pesos meio-médios, eles podem lutar.

Entrada 2
peso1 = 55

peso2 = 54

Saída 1
NAO PODEM LUTAR

Explicação 1
Um dos lutadores pesa 55 kg e o outro pesa 5 kg. O primeiro lutador citado é da categoria dos pesos meio-médios, o outro é da categoria dos pesos leves. Como ambos são de categorias diferentes, eles não podem lutar

*//*if(peso1 / peso2 <= 1.2 || peso2 / peso1 <= 1.2){
        return onplay ;
    } else 
         { return offplay;
      }*/   
















//       const CTG1 = 55;
// const CTG2 = 65; 
// const CTG3 = 75;
// const CTG4 = 85;
// const CTG5 = 85;



// function solucao(peso1, peso2){
//     const onplay = () => console.log("PODEM LUTAR");
//     const offplay = () => console.log("NAO PODEM LUTAR");
//  if(CTG1 > peso1 && CTG1 > peso2)return onplay();
//    if(CTG2 > peso1 && CTG1 <= peso1 && CTG2 > peso2 && CTG1 <= peso2 )return onplay();
//    if(CTG3 > peso1 && CTG2 <= peso1 && CTG3 > peso2 && CTG2 <= peso2 )return onplay();
//    if(CTG4 > peso1 && CTG3 <= peso1 && CTG4 > peso2 && CTG3 <= peso2 )return onplay();
//    if(CTG5 < peso1 && CTG5 < peso2)return onplay();
// return offplay();
// }

// solucao(54, 55);

// const CTG1 = 55;
// const CTG2 = 65; 
// const CTG3 = 75;
// const CTG4 = 85;
// const CTG5 = 85;

// function solucao(peso1 = 0, peso2 = 0){
//     const onplay = () => console.log("PODEM LUTAR");
//     const offplay = () => console.log("NAO PODEM LUTAR");
    
//  if(CTG1 > peso1 && CTG1 > peso2) onplay();
//    else if(CTG2 > peso1 && CTG1 <= peso1 && CTG2 > peso2 && CTG1 <= peso2 ) onplay();
//    else if(CTG3 > peso1 && CTG2 <= peso1 && CTG3 > peso2 && CTG2 <= peso2 ) onplay();
//    else if(CTG4 > peso1 && CTG3 <= peso1 && CTG4 > peso2 && CTG3 <= peso2 ) onplay();
//    else if(CTG5 < peso1 && CTG5 < peso2) onplay();
// else  offplay();
// }
// solucao();
// const listagem = [];
// let i = 0;

// while( i < 5){
//     setTimeout(() => {
//             const roleta = new promisse((resolve, reject) => {
//              parseInt(math.random * 100)
//            resolve (roleta)
//            } )
//            roleta
//            .then((value) => {
//             listagem.push(value)
//           return ;
//            })
//            .finally(()=>{
//            return 0})
           


//     }, 1010);
//     i++;
// }
// console.log(listagem);



// const pesagem = [55, 90];
// let i = 0;
// pesagem[i];
// const onplay = () => console.log("PODEM LUTAR");

// const offplay = () => console.log("NAO PODEM LUTAR");
// function solucao (pesagem) { 
//     let diferenca = pesagem[0] - pesagem[1] || pesagem[1] - pesagem[0];
//     i++;
//     if(diferenca >= 5 ) {
//       return offplay; }
//     return onplay;
// }
// for(i = 0; i > pesagem.length; i++){
// const numero = pesagem[i];
// let diferenca = pesagem[0] - pesagem[1] || pesagem[1] - pesagem[0];
//  if(diferenca => 5){

//  }

// }



// solucao();



// function balanca(peso1A, peso2A, peso1B , peso2B){
//     let ladoA = peso1A + peso2A;
//     let ladoB = peso1B + peso2B;
//     if( ladoA > ladoB){
//         console.log("inclina pro lado A");
//     } else if (ladoB > ladoA) {
//         console.log("Inclina pro lado B");
//     } {
//         console.log("Equilibro!")
//     }
// }


// balanca(20, 30 , 50 ,10);

// const pesos = [100, 400]

// // function solucao(pesos){
    
// //     for(let i = 0; i < pesos; i++){
// //         const peso = pesos(i);
   
// // }
// function solucao(pesos){
// let peso1 = pesos[0];
// let peso2 = pesos[1];

// if(peso1 - peso2 <= 5 || peso2 - peso1 <= 5){
//     return "PODEM LUTAR"
// } else if(peso1 - peso2 > 5 || peso2 - peso1 > 5){
//     return "NAO PODEM LUTAR"
// }
// }
// console.log(solucao(pesos));


// Entrada
// A entrada do seu programa será composta por quatro variáveis:

// itensColetados: array de strings em que cada posição indica um item coletado ao longo da fase;
// itemNecessario1: uma string que indica o primeiro item necessário para enfrentar o chefão;
// itemNecessario2: uma string que indica o segundo item necessário para enfrentar o chefão;
// itemNecessario3: uma string que indica o terceiro item necessário para enfrentar o chefão.
// Saída
// Você deve retornar:

// PODE ENFRENTAR: caso o jogador tenha os três itens necessários para enfrentar o chefão;
// NAO PODE ENFRENTAR: caso o jogador não tenha os três itens necessários para enfrentar o chefão.
// Exemplo
// Entrada
// itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

// itemNecessario1 = "machado"

// itemNecessario2 = "espada"

// itemNecessario3 = "sapato"

// Saída
// NAO PODE ENFRENTAR

// Explicação
// Apesar do jogador ter conseguido coletar dois dois itens necessários, o machado e o sapato, ele não conseguiu obter a espada.



// function solucao(peso1, peso2){
//     const PesoLeve = 55;
//   const pesomeiomedio = 65; 
//   const pesomedio = 75;
//   const pesomeiopesado = 85;
//   const pesopesado = 85;
//    if(PesoLeve > peso1 && PesoLeve > peso2) {
//        return "PODEM LUTAR"
//    }
//      else if(pesomeiomedio > peso1 && PesoLeve <= peso1 && pesomeiomedio > peso2 && PesoLeve <= peso2 ){
//          return "PODEM LUTAR"
//       }
//      else if(pesomedio > peso1 && pesomeiomedio <= peso1 && pesomedio > peso2 && pesomeiomedio <= peso2 ){
//          return "PODEM LUTAR"
//       }
//      else if(pesomeiopesado > peso1 && pesomedio <= peso1 && pesomeiopesado > peso2 && pesomedio <= peso2 ){
//          return "PODEM LUTAR"
//       }
//      else if(pesopesado <= peso1 && pesopesado <= peso2){
//          return "PODEM LUTAR"
//       }
//     else {
//       return "NAO PODEM LUTAR"
//     }
//   }

//   console.log(solucao(85,86));















 //function solucao(pesos){
//  let peso1 = pesos[0];
//  let peso2 = pesos[1];
// let balanco = peso1 - peso2 || peso2 - peso1;
//  if(balanco <= 5 || !balanco <= 5 ){
//      return "PODEM LUTAR"
// //  } 
// //      return "NAO PODEM LUTAR"

//  //}
//  // console.log(solucao(pesos));
// pesos = [20, 12]

//  function solucao(pesos){
//   let x = pesos[0];
//   let y = pesos[1];
// //  let peso1 = 0;
// //  let peso2 = 0;
  
// //  {
// //     if(x > y){
// //       peso1 = x
      
// //       return peso2 = y 
// //     } else if (y > x){
// //       peso1 = y
      
// //       return peso2 = x
// //     }
// //   }
// if(x > y){
//   let peso1 = x;
//   let peso2 = y;

//  if( peso1 - peso2 <= 5){
//      return "PODEM LUTAR"}
//  } else if (y > x){
//   let peso1 = y;
//   let peso2 = x;
//   if( peso1 - peso2 <= 5){
//     return "PODEM LUTAR"}
//  }
//  return "NAO PODEM LUTAR"
//  } 


//  console.log(solucao(pesos));




//else if( balanco && peso1 - peso2 > 5 ){
 //    return "NAO PODEM LUTAR"
 //}














// Entrada
// A entrada do seu programa será composta por quatro variáveis:

// itensColetados: array de strings em que cada posição indica um item coletado ao longo da fase;
   // itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]
// itemNecessario1: uma string que indica o primeiro item necessário para enfrentar o chefão;
  // itemNecessario1 = "machado"
// itemNecessario2: uma string que indica o segundo item necessário para enfrentar o chefão;
  // itemNecessario2 = "espada"
// itemNecessario3: uma string que indica o terceiro item necessário para enfrentar o chefão.
  // itemNecessario3 = "sapato"
// Saída

// Você deve retornar:

// PODE ENFRENTAR: caso o jogador tenha os três itens necessários para enfrentar o chefão;
// NAO PODE ENFRENTAR: caso o jogador não tenha os três itens necessários para enfrentar o chefão.
// Exemplo
// Entrada
// itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

// itemNecessario1 = "machado"

// itemNecessario2 = "espada"

// itemNecessario3 = "sapato"

// Saída
// NAO PODE ENFRENTAR

// Explicação
// Apesar do jogador ter conseguido coletar dois dois itens necessários, o machado e o sapato, ele não conseguiu obter a espada.

// const itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete","espada"]
// const itemNecessario1 = "machado"
// const itemNecessario2 = "espada"
// const itemNecessario3 = "sapato"


// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3){
//    // for (let i = 0; i < itensColetados.length; i++) {}
//       const equip = [itemNecessario1, itemNecessario2, itemNecessario3]
// let i = 0;
// let contagem = 0;
//     while(i < itensColetados.length){
//     const item = itensColetados[i];
//        i++
//             if(item === equip[0] || item === equip[1] || item === equip[2]){
//               contagem++
//               if(contagem === 3){
                
//                 return "PODEM LUTAR"
//             }
//     } 
// } return "NAO PODE LUTAR"} 

// console.log(solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3));










// function solucao(peso1, peso2){
//   const PesoLeve = 55;
// const pesomeiomedio = 65; 
// const pesomedio = 75;
// const pesomeiopesado = 85;
// const pesopesado = 85;
//  if(PesoLeve > peso1 && PesoLeve > peso2) {
//      return "PODEM LUTAR"
//  }
//    else if(pesomeiomedio > peso1 && PesoLeve <= peso1 && pesomeiomedio > peso2 && PesoLeve <= peso2 ){
//        return "PODEM LUTAR"
//     }
//    else if(pesomedio > peso1 && pesomeiomedio <= peso1 && pesomedio > peso2 && pesomeiomedio <= peso2 ){
//        return "PODEM LUTAR"
//     }
//    else if(pesomeiopesado > peso1 && pesomedio <= peso1 && pesomeiopesado > peso2 && pesomedio <= peso2 ){
//        return "PODEM LUTAR"
//     }
//    else if(pesopesado <= peso1 && pesopesado <= peso2){
//        return "PODEM LUTAR"
//     }
//   else {
//     return "NAO PODEM LUTAR"
//   }
// }

// console.log(solucao(10000,100002));
function solucao(peso1, peso2){
  const x = peso1;
  const y = peso2;

  const PesoLeve = 55;
const pesomeiomedio = 65; 
const pesomedio = 75;
const pesomeiopesado = 85;
const pesopesado = 85;

 if(PesoLeve > x && PesoLeve > y) {
     return "PODEM LUTAR"
 }
   else if(pesomeiomedio > peso1 && PesoLeve <= peso1 && pesomeiomedio > peso2 && PesoLeve <= peso2 ){
       return "PODEM LUTAR"
    }
   else if(pesomedio > peso1 && pesomeiomedio <= peso1 && pesomedio > peso2 && pesomeiomedio <= peso2 ){
       return "PODEM LUTAR"
    }
   else if(pesomeiopesado > peso1 && pesomedio <= peso1 && pesomeiopesado > peso2 && pesomedio <= peso2 ){
       return "PODEM LUTAR"
    }
   else if(pesopesado <= peso1 && pesopesado <= peso2){
       return "PODEM LUTAR"
    }
  
    return "NAO PODEM LUTAR"
  
}

