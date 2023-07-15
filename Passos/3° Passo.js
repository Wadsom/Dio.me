/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
    calcule e imprima a sua média e sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;

// Main 
const nota1 = 8.3;
const nota3 = 20;
const nota2 = 8.3;
const Media = CalculoDemedia(nota1, nota2, nota3)
function CalculoDemedia(nota1, nota2, nota3) { 
  return (nota1 + nota2 + nota3) / 3;
}
function ClassificarRank(Media){
if (Media === 7) {
    return("Parebens, apruvado", Media.toFixed(2));
} else if ( Media < 7 && Media > 5 ) {
    return( " Vai estudar minha palmatoria, nota ", Media.toFixed(2));
} else if (Media < 9.6 && Media >= 8.3) {
    return('Sua Nota é ', Media.toFixed(2) , "e agora você está no top 10");
} else if (Media > 9.6){
    return( Media.toFixed(20) , "Você está entre o top 3");
} else {
    return(" REPROVADDDDDDDUUUUUUUUUUU!!!!!!!!!!!!!!!!!!!!", Media.toFixed(2));
}}
console.log(ClassificarRank(Media));

*/









/*
2) O IMC – Índice de Massa Corporal é um sugerido pela Organização Mundial de Saúde 
para dar uma indicação sobre a condição de peso de uma pessoa adulta.
Fórmula do IMC:
IMC = peso / (altura * altura)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
IMC em adultos Condição:
- Abaixo de 18,5 Abaixo do peso;
- Entre 18,5 e 25 Pesos normais;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;





class Pessoa {
 Nome;
 Pehso;
 Idade;
 alturaP;
 CalcIMC;

 constructor(Nome,Pehso,Idade,alturaP){
    
    this['Nome'] = Nome;
    this['Pehso'] = Pehso;
    this['Idade'] = Idade;
    this['alturaP'] = alturaP;
         }
   
 
 }  
 function CalcIMC (Pehso, alturaP) { return media = this.Pehso / (this.alturaP * this.alturaP);}  
    
     function ClassIMC (media){
        if (media < 18.5){
            console.log("Abaixo do peso");
        } else if (media > 18.5 && media < 25){
            console.log("peso normal");
        } else if (media > 25 && media < 30){
            console.log('Acima do peso');
        } else if (media > 30 && media < 40){
            console.log("Obeso I");
        } else if (media > 40){
            console.log('Obeso II');
        } else {
            console.log("algo deu errado");
        }
    
      }
  
 const ListaAvulsa =[ new Pessoa('Pedro', 85, 30, 1.79), new Pessoa('Wadson', 86, 20, 1.79)];
 const ListaNome = ListaAvulsa.map((Element)=> {return (` Meu nome é ${Element.Nome} e tenho ${Element.Pehso}kg com ${Element.Idade} de idade, medindo ${Element.alturaP}, classificado como ${Element.ClassIMC}`)})

 console.log(ListaNome);


*/
/*


function calcularIMC(peso1, altura1) {
    return peso1 / (altura1 * altura1); 
} 

function ClassificarIMC(IMC){
    if ( IMC < 18.5){
        return('Abaixo do peso');
    } else if (IMC >= 18.5 && IMC < 25) {
        return("Peso Normal: ");
    } else if (IMC >=25 && IMC < 30) {
        return("Acima do Peso: ");
    } else if (IMC >= 30 && IMC < 40) {
        return("Obeso : " ) ;
    } else if (IMC >= 40){
        return("Obeso Grave: ");
    } else {
        return(" valor invalido");
    }} 
// Main
(function (){
let peso1 = 83.7;
let altura1 = 1.79;
const IMC = calcularIMC(peso1, altura1);
console.log(ClassificarIMC(IMC));
})();


/*
const gato = {
    nome: 'Eva',

    descrever: function () {
        if (this.descrever === 1){
            console.log(`Seu nome não eh ${this.nome}`);
        } else{
        console.log(`O nome sera ${this['nome']}`);
    }}
};

gato.descrever(1);
console.log(gato['nome'] = "teste");













1) Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dê a quantidade de quilômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso. 


class Carro {
    Marca;
    Cor;
    GastoMedio;
    
    
 constructor(Marca, Cor, GastoMedio,){
    this['Marca'] = Marca;
    this['Cor'] = Cor;
    this['GastoMedio'] = GastoMedio;
 }
    descrever() {
 console.log( `O Carro é da ${this.Marca} da cor ${this.Cor} e seu GastoMédio é ${this.GastoMedio} por Litro`);
}
  }
  const MOBI = new Carro('Fiat', 'Preta',8);
  console.log(MOBI.descrever());

  class $Viagem {
    precoL;
    Distancia;
    GastoMedio;
    Lusado;
    ValorViagem;

    constructor(precoL, Distancia, GastoMedio){
        this.precoEt = precoL;
        this.Distancia = Distancia;
        this.GastoMedio = GastoMedio;
    } 
    CalculoDaViagem(precoLEt,Distancia, GastoMedio){
        var Lusado = Distancia / GastoMedio;
        var ValorViagem = Lusado * precoLEt;
        return console.log( `Com o preco ${precoLEt} sendo que a gente tem que percorrer ${Distancia} KM, O Valor da ${ValorViagem.toFixed(2)} Reias`);
    }
  } 
  const Paraiba = new $Viagem(5.2, 240, 8.8);
  console.log(Paraiba.CalculoDaViagem(5.2, 240, 8.8));
*/

















/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instacie uma pessoa chamando José que tem 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

class pessoaIMC{
    Nome;
    Peso;
    Altura;
    IMC;

    constructor(Nome, Peso, Altura) {
        this.Nome = Nome;
        this.Peso = Peso;
        this.Altura = Altura;
        
        
    }
     CalcularIMC(){
       return this.IMC = this.Peso / (this.Altura * this.Altura).toFixed(2)
       }
    ClassificarIMC(){
        const IMC = this.CalcularIMC().toFixed(2);
        if (IMC < 18.5){
            return('Abaixo do peso');
        } else if (IMC >= 18.5 && IMC < 25) {
            return("Peso Normal: ");
        } else if (IMC >=25 && IMC < 30) {
            return("Acima do Peso: ");
        } else if (IMC >= 30 && IMC < 40) {
            return("Obeso : " ) ;
        } else if (IMC >= 40){
            return("Obeso Grave: ");
        } else {
            return(" valor invalido");
        }
}
} const Jose = new pessoaIMC('José', 70, 1.75)
 console.log(Jose.ClassificarIMC()); 
/*

 class karate {
    nome;
    forca;
    Peso;
    AtritoAr

    constructor(nome, forca, Peso, AtritoAr){
        this.nome = nome;
        this.forca = forca;
        this.Peso = Peso;
        this.AtritoAr = AtritoAr;
    }
     VLPunho() {
        return this.Peso * this.forca - this.forca / this.AtritoAr;
    } 
    BPW (){
        const Poder = this.VLPunho().toFixed(0);
        if (Poder < 100){
            return ("Fraco");
        } else if (Poder > 100 && Poder < 300){
            return ("Mediano");
        } else if (Poder > 400){
            return ("Forte");
        } else {
            return ("Algo deu errado");
        }
    } 
 }

const Doppo = new karate("Doppo", 89, 100, 0.9);
console.log(Doppo.VLPunho());
console.log(Doppo.BPW());

//*/




