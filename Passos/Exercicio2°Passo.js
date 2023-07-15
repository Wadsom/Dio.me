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
const nota2 = 8.3;
const nota3 = 20;
CalculoDemedia(5, 3 , 5);




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
//console.log(ClassificarRank(Media));
function CalculoDemedia(nota1, nota2, nota3) { 
  return console.log( (nota1 + nota2 + nota3) / 3);
}
const Media = CalculoDemedia(nota1, nota2, nota3)

CalculoDemedia(8, 4, 12);











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

function CalculoIMC( Peso, altura ){
 return Peso / (altura * altura)
} 
const IMC = CalculoIMC( Peso, altura );
const Peso = 84;
const altura = 1.79;
if (IMC < 18.5) {
    return("seu IMC é ", IMC.toFixed(2), " e esta abaixo do peso");
} else if (IMC > 18.5 && IMC < 25){
    return("seu IMC é ", IMC.toFixed(2), " e está com base peso");
} else if (IMC > 25 && IMC < 30) {
    return("Seu IMC é", IMC.toFixed(2), "e está acima do peso");
} else if (IMC > 30 && IMC < 40){
    return(" seu IMC é ", IMC.toFixed(2), " tá obeso");
} else if ( IMC > 40) {
    return("seu IMC é", IMC.toFixed(2), "Criança inglesa");
} else {
    return("alguma coisa deu errado");
}
return(IMC); */











/*

function calcularImc(peso1, altura1) {
    return peso1 / (altura1 * altura1); 
} 

function ClassificarImc(imc){
    if ( imc < 18.5){
        return('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return("Peso Normal: ");
    } else if (imc >=25 && imc < 30) {
        return("Acima do Peso: ");
    } else if (imc >= 30 && imc < 40) {
        return("Obeso : " ) ;
    } else if (imc >= 40){
        return("Obeso Grave: ");
    } else {
        return(" valor invalido");
    }} 
// Main
(function (){
let peso1 = 83.7;
let altura1 = 1.79;
const imc = calcularImc(peso1, altura1);
console.log(ClassificarImc(imc));
})();


*/
/*
1) Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dê a quantidade de quilômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
class car ;
    Marca;
    Cor;
    GSMC;

    constructor(Marca, Cor, GSMC){
        this.Marca = Marca;
        this.Cor = Cor;
        this.GSMC = GSMC;
 }

 CLML(distancia,PR) {
    return distancia * this.GSMC * PR
 }


}
const Porsche = new car('Porsche', 'Preta', 9.8 );
console.log("Este é o valor destá viagem: ", Porsche.CLML(240, 5.20)); 

//Herança de JS
const altura = {
altura: 1.78,
}

const Pessoa = {
    nome: "Eva",
    Idade: 18,
    _proto_: altura,
}


function falar(){
    console.log(`Aqui esta meu perfil: ${Pessoa._proto_.altura}`);
    }

falar();

// Funcao Constrtutora
function Perfil(nome, Idade){
    this.nome = nome;
    this.Idade = Idade;
    }
    Perfil.prototype.hablar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }

    const Eva = new Perfil('eva', 18);
     Eva._proto_ = {
        cor: "BrancoEPreto",
    }
    console.log(Eva);
    Eva.hablar();
   


    function Iteminv(name, peso, funcao){
        this.name = name;
        this.peso = peso;
        this.funcao = funcao;
    }
const garrafa = {
    cor: "verde"
}
    Iteminv.prototype.checklist = function(){
        console.log(`Este é o resultado: ${this.name, this.peso, this.funcao}`);
    }
//const garrafa = {};
Iteminv.call(garrafa,"garrafa" , 10, 'Agua');
console.log(garrafa.checklist);
//garrafa.checklist();

function Chatura(name, peso, atuacao, raca){
    this.name = name;
    this.peso = peso;
    this.atuacao = atuacao;
    this.raca = raca;
}
const holhos = {
    olhos: "Amarelos"
}
const Gato = {
    cor: "Preto e Branco",
    Sobrenome: this.name + "Pinherio",
    _proto_: holhos,
}    

Chatura.prototype.Miado = function(){
    console.log(`Aqui está o resultado: ${this.name,this.peso,this.atuacao,this.raca}`)
}
const Eva = new Chatura ("Eva", 2.78, "Afiação de Garras no Sofá", "gato", Gato);
 Eva.Miado();

*/
/*

class Pessoa{
nome;
Peso;
altura;

constructor(nome,Peso, altura){
    this.nome = nome;
    this.Peso = Peso;
    this.altura = altura;

}

CalculoIMC(){
 return this.Peso / (this.altura * this.altura)
} 

ClassifIMC(){
    const IMC = this.CalculoIMC();
if (IMC < 18.5) {
    return("seu IMC é ", IMC.toFixed(2), " e esta abaixo do peso");
} else if (IMC > 18.5 && IMC < 25){
    return("seu IMC é ", IMC.toFixed(2), " e está com base peso");
} else if (IMC > 25 && IMC < 30) {
    return("Seu IMC é", IMC.toFixed(2), "e está acima do peso");
} else if (IMC > 30 && IMC < 40){
    return(" seu IMC é ", IMC.toFixed(2), " tá obeso");
} else if ( IMC > 40) {
    return("seu IMC é", IMC.toFixed(2), "Criança inglesa");
} else {
    return("alguma coisa deu errado");
}
} 
}
 const Pedro = new Pessoa('Pedro', 80, 1.79);
 console.log(Pedro.ClassifIMC());*/

/*


 const i = 10;
 if (i > 10){
 i
 } else {

 };
 console.log(!i)
 


    if (true) {
        var passouPorAqui = 'SIM';
    }

    console.log(passouPorAqui);

    calcular();

    function calcular() {
        console.log('Calculando...');
    }
    const total = "10" - 15 + 5;

    console.log(total);*/







// Diferença de function e Arrow function
 /*
function perfil(){
    console.log(this);
}

const perfilExemploArrowFuntcion = () => {
    console.log(this);
}
const porta = {
    cor: "prata",
    tammanho: "20 M",
     perfil, 
 perfilExemploArrowFuntcion
}


porta.perfil();
porta.perfilExemploArrowFuntcion();

*/

function levanumero(X){
 return function (y){
    return X * y;
 }
}
console.log(levanumero(1)(2));


function levanume2 (x){
    return (y) =>{
        return y * x;
    }
}
console.log(levanume2(10)(2));

const eleva100 = levanume2(10)(10);

const {gets, print} = require('./Exercicios I')
eleva100;
function numeroa100(Z){
    return Z * eleva100;
} 
console.log(numeroa100(10));
let dobraNumero = levanumero(2);
console.log(dobraNumero(420));