/* 




class pessoa{
    constructor(name, genero){
        this.name = name;
        this.genero = genero
    }
}

const lista = [new pessoa("Wadson", 20), new pessoa("Jose", 49)];
console.log(lista);
 let cb1 = ((Element) =>{ return Element.name})
const listanome = lista.map(cb1)// pode ser assim nesse caso (Element) => Element.name);
console.log(listanome);



const listaNee = [1, 2,3,4, 5, 6,66]
const listaimpar = listaNee.filter((i) => {return i % 3 === 0});
const listapar = listaNee.filter((i) => {return i % 2 === 0});
console.log(listapar);
console.log(listaimpar);
let cbFE = ((value, i , listref) => { 
return console.log(` Este Valor: ${value} está na casa: ${i} da lista: ${listref}`)
})
const descreverlista = listaNee.forEach(cbFE);
console.log(descreverlista);


const conversaodenome = lista.map((Element)=> Element.name);
console.log(conversaodenome);

const Soma = listaNee.reduce((previous, current) => {return previous + current}, 0);
console.log(Soma); */

/*
Desafio 1





function solucao(altitude) {
    // seu codigo aqui
     if(altitude <= 20){
        return console.log(`TROPOSFERA`);
     } else if ( altitude > 20 && altitude <= 50){
         return console.log(`ESTRATOSFERA`);
     } else if( altitude > 50 && altitude <= 80 ){
         return console.log(`MESOSFERA`);
     } else if (altitude > 80 && altitude <= 450){
         return console.log(`TERMOSFERA`);
     } else if (altitude > 450 && altitude <= 900){
         return console.log(`EXOSFERA`)
     }
}
solucao(89);

function solucao(altitude) {
    // seu codigo aqui
     if(altitude <= 20){
        return "TROPOSFERA";
     } else if ( altitude > 20 && altitude <= 50){
         return "ESTRATOSFERA";
     } else if( altitude > 50 && altitude <= 80 ){
         return "MESOSFERA";
     } else if (altitude > 80 && altitude <= 450){
         return "TERMOSFERA";
     } else if (altitude > 450 && altitude <= 900){
         return "EXOSFERA";
     }
}
solucao(56); */


/* Desafio 2
function solucao(olhosNasLaterais) {
    // seu codigo aqui
if (olhosNasLaterais === true){
 return console.log("PRESA");
} 
return console.log("PREDADOR");
}

solucao(false);
*/ /*
let pesoLeve = 0;



function classificarpesoleve(peso1, peso2){
    
    if(peso1 === 55 && peso2 === 55){
        return true;
    } else if ( peso1 > 55 && peso1 <=65 && peso2 > 55 && peso2 <=65){
        return true;
    }
    
    
    return false;
}

function  solucao(peso1, operacao , peso2){
    if(classificarpesoleve === true){
      return  console.log("podem lutar");
    } return console.log("Vai da merda  ");
}

 solucao( 56 ,classificarpesoleve, 56);
*/



