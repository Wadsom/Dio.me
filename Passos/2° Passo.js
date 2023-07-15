/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
    calcule e imprima a sua média e sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
// Main 
const nota1 = 8.3;
const nota2 = 8.3;
const nota3 = 20;
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