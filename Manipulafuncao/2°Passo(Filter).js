// const list = [ 1, 30, 50, 4, 210]
// const numeroParLista = list.filter((I) => {
//     return I % 2 === 0
// })
// console.log(numeroParLista);





var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

//TODO: Complete o laço de repetição:
// for (i <= array.length){
// //TODO: Agora crie uma condição que verifique o ARRAY e imprima APENAS os números pares.
// }

for(i = 0; i < array.length; i++){
  let numero = array[i];
  if(numero % 2 === 0){
    console.log(numero);
  }
   console.log(`numero fora ${numero}`);
}