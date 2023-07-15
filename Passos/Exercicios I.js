/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
    calcule e imprima a sua média e sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;

const nota1 = 8.3;
const nota2 = 8.3;
const nota3 = 20;
const Media = (nota1 + nota2 + nota3) / 3;

if (Media === 7) {
    console.log("Parebens, apruvado", Media.toFixed(2));
} else if (Media < 7) {
    console.log(" Vai estudar minha palmatoria, nota ", Media.toFixed(2));
} else if (Media < 9.6 && Media >= 8.3) {
    console.log('Sua Nota é ', Media.toFixed(2), "e agora você está no top 10");
} else if (Media > 9.6) {
    console.log(" Sua nota é ", Media.toFixed(2), "Você está entre o top 3");
} else {
    console.log(" REPROVADDDDDDDUUUUUUUUUUU!!!!!!!!!!!!!!!!!!!!", Media.toFixed(2));
}
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

const peso = 77;
const altura = 1.79;
const IMC = peso / (altura * altura);
if (IMC === 18.5) {
    console.log("seu IMC é ", IMC.toFixed(2), " e esta abaixo do peso");
} else if (IMC > 18.5 && IMC < 25) {
    console.log("seu IMC é ", IMC.toFixed(2), " e está com base peso");
} else if (IMC > 25 && IMC < 30) {
    console.log("Seu IMC é", IMC.toFixed(2), "e está acima do peso");
} else if (IMC > 30 && IMC < 40) {
    console.log(" seu IMC é ", IMC.toFixed(2), " tá obeso");
} else if (IMC > 40) {
    console.log("seu IMC é", IMC.toFixed(2), "Criança inglesa");
} else {
    console.log("alguma coisa deu errado");
}


3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição 
de pagamento escolhida e controlada pelo calculado adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;


const prod1 = 100;
const formaPagamento = 0;

if (formaPagamento === 1) {
    console.log("Valor de Débito :", prod1 - (prod1 * 10 / 100));
} else if (formaPagamento === 2) {
    console.log("Valor de $ouPix:", prod1 - (prod1 * 15 / 100));
} else if (formaPagamento === 3) {
    console.log('Valor de 2x:', prod1);
} else if (formaPagamento === 4) {
    console.log("Valor acima 2x :", prod1 + (prod1 * 10 / 100));
} else {
    console.log(" valor invalido");
}



const NotaAlunos = [6, 2, 7, 3, 8, 10, 4];
let i = 0;
function gets(){
     const nota = NotaAlunos[i];
      i++;
      return nota;
}
function print(Texto){
    console.log(Texto);
}

module.exports = { print,  gets };
*/


module.exports = { print , gets1 };

const entrada1 = [12, 9, 1298, 78];
let i = 0;
 
function gets1(){
   const valor = entrada1[i];
   i++;
   return valor;
} 
function print(Texto){
  console.log(Texto);
}









/*

const MegaSena = [6, 2, 7, 3, 8, 10, 4];
let i = 0;

function gets(){
     const NumeroPremiado = MegaSena[i];
     i++;
     return NumeroPremiado;
}
function print(Texto){
  console.log(Texto);
}

module.exports = { print , gets };





*/



