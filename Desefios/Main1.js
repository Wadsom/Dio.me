// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets , print } = require('./funcoes-auxiliares-ex1');
/*
const PlanilhaMedia = gets();
let Nota = 0;


for (let i = 0; i < PlanilhaMedia; i++) {
    const media = gets(i);
    if (media >= 7){
     return print('Aprovado');
    } else if(media >= 5 && media < 7){
         return print('Recuperação');
    } else{
       return  print("Reprovado");
    }
}
print(media(0));
print(media(1));
print(media(2));

let A = 10;
let B = 20;
function Igual(A, B){
    if (A === B){
      print("Sao iguais!");
    } else{
      print("Nao sao iguais!");
    }
  }
  Igual(A, B);

  let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
let valor = 75;
  //let valor = parseInt(gets());
  
  //TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

for (let i = 0; i < elementos.length; i++) {
    let numero = elementos[i];
    if(valor === numero){ if(valor){
    print("Achei " + valor + " na posicao " + i);}
    else {
        return 0;
    }
    break;
    } else {
     print("Numero " + valor + " nao encontrado! ");
    }
  }
  */

/*


  let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());


function buscar (valor)
for (let i = 0; i < elementos.length ; i++) {
    let numero = elementos[i];
    if(valor === numero){
  
    print("Achei " + valor + " na posicao " + i);
    } else {
     print("Numero " + valor + " nao encontrado! ");
    }
  }

while(val > 0){
    soma+=val;
    val--
} 
return soma


let a = 20;
let b = 120;
print(a+=b);
print(a/=b);
print(a-=b);
print(a%=b);
print(a*=b);
/*
 function Rolar (x, y){
const Valor = Math.random() * (y - x) + x; 
return Valor;
} 
Rolar(10, 200);
let Rdado = 0;
while(Rdado != -1){
  let Rdado = Rolar(1 ,10);
  console.log("Achei o Número"+ Rdado.toFixed(2));
} 
 console.log("Saiu do Laço" + Rdado.toFixed(2))
 
*/
/*
let opcao;
function EscolhaPokemon(opcao){
switch(opcao){
  case 0:
  return console.log("Pikachu");
  case 1:
  return console.log("Charmander");
  case 2 :
  return console.log("ToTodile");
default:
  return console.log("Escolhe entre 0 e 2");
}
 }
 EscolhaPokemon(19);
 */



 
 function buscar (valor){
  let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
    for ( let i = 0; i < elementos.length; i++){
  while (valor === elementos[i]){
  console.log(`Achei ${valor} na posicao ${i}`);
    
  } ;console.log(`Numero ${valor} nao encontrado!`);
    }  }
 buscar(75);
 


