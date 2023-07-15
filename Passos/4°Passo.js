
/*
const nota = [];
nota.push[8];
nota.push[9];
nota.push[6];
let media = nota[0] + nota[1] + nota[2] / 3;
let soma = soma + nota



for (let i = 0; i < 3; i++) {
    const notas = nota[i];
    const media = notas;
    //console.log(notas);
    console.log(media);   
} 

*/


const carro = ['Corsa', 'Fiat', 'Renaut', 'Uno'];
for (let i = 0; i < carro.length; i++) {
    const Marca = carro[i];
    function Classificação(){
        if (Marca === 'C'){
            console.log("Corsinha Amarelo");
        } else if (Marca === 'F'){
            console.log("Fiat que só morre engasgado");
        } else if(Marca === "R"){
            console.log("Isto é uma merda toda");
        } else if(Marca === "U"){
            console.log("Fiat UNO ESTÀAAAAAAAAA MERRRDDDDDDDDDDDAAAAAAAAAAAAAAAA");
        }
    } console.log(Classificação());
    
}






/*
const cor = ['preto', 'branco', 'azul', 'verde'];
cor.push('Roxo');
console.log(cor);

for (let i = 0; i < cor.length; i++) {
    const Cores = cor[i];
    console.log(Cores);
}

const notas = [];
notas.push(10);
notas.push(8);
notas.push(7);
notas.push(6.5);

let soma = 0;


for (let i = 0; i < notas.length; i++) {
    const notasF = notas[i];
    soma = soma + notasF / notas.length;
   
}  console.log(soma); 
ines (8 sloc)  673 Bytes
 


//1) Crie um programa que dado um número imprima a sua //numero.

const numero = [];
numero.push(1);
//numero.push(2);
//numero.push(3);
//numero.push(10);
//numero.push(10);
////numero.push(10);
////numero.push(10);
let tabuada = 0;
for (let i = 1; i <= 100; i++) {
    
    console.log(i * 2);
}



//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = 0;
for (let i = 0; i < 11; i++) {
   const numbers = lista[i];
   if (numbers % 2 === 0){
    console.log(numbers);
   } 
   // console.log(numbers);    
}








//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const Names = ['Vihtor', 'Guilherme', 'Wadson','Vitoria'];
for (let i = 0; i < Names.length; i++) {
    const SohV = Names[i];
       if(SohV[0] === 'V'){
    console.log(SohV)   
    } 
}



/*
const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);
    
    const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);


*/




//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
const List = [];
for (let i = 10; i < 51; i = i + 2) {

    List.push(i);
} console.log(List)








/*
//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
// Ex de lista = [2, 7, 3, 8, 10, 4]

const { print, gets } = require('./Exercicios I');

const ListaNMedia = gets();
let NotaAluno = 0;

for (let i = 0; i < ListaNMedia; i++) {
  const NotaAluno = gets();

    if(NotaAluno < 5){
        console.log("reprovado");
    } 
    
   
}


print(NotaAluno);
print(NotaAluno);
print(NotaAluno);

*/

/*
//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
  //Ex de lista de notas = [2, 7, 3, 8, 10, 4] 

const {gets, print} = require('./Exercicios I');









const PainelNotas = gets();
let NotaMaior = 0;

for (let i = 0; i < PainelNotas; i++) {
    const ANota = gets();
    if (ANota > NotaMaior){
        NotaMaior = ANota;
    }
}
print(NotaMaior);

*/
















