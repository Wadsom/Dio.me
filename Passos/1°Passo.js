// calcule quanto o carro vai gastar numa viagem
/* variavéis desejadas
--preço da gasolina 
--quantidade de litros/preço
--Distancia em Km
--Média do Litro/km */

var PrecoGaso = 5.5;
var deltaS = 245;
var ConsumoLitro = 1.4 * deltaS / PrecoGaso;
var name = "FiatUno";
// problema calcule quanto reais vão dar para ir pra JP/PB
const MediaDoCarro = ConsumoLitro * PrecoGaso / deltaS;
console.log(name);
console.log(ConsumoLitro);






//------------------------------------------------------------------------------------------

const NdedosHumano = 1561984879465165487465284871653;
const TesteHumano = (NdedosHumano % 5) === 0;
//const NotHuman = (NdedosHumano % 2) >> 0; 
//console.log(TesteHumano);
//console.log(NotHuman);
if (TesteHumano === 0) {
    console.log('Dá pra Trabalhar');

} else {
    console.log("IFOOOODDD?????????????????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}


const NuhDeAsas = 4;
const DaPahvua = (NuhDeAsas % 2) === 0;
if (NuhDeAsas === 0) {
    console.log("Dá pra Voar");
} else if (DaPahvua >> 2) {
    console.log("Saporra num é um pombo");
} else {
    console.log("Esse dai não vive muito");
}



const Cambio = 2;
const DahPraDirigir = (Cambio % 2) === 0;
if (DahPraDirigir === 0) {
    console.log("Dá pra dirigir")
} else if (Cambio) {
    console.log("Lata-Velha");
} else {
    console.log("sabe como eh neh, mais ou menos ..... mais ou menos.....");
}


const numero = 5;
const numeroDivisivelPorDois = (numero % 5) === 0;
if (numero === 0) {
    console.log('O numero é invalido');
} else if (numeroDivisivelPorDois) {
    console.log('Sim');
} else {
    console.log('Não');
}





/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */


const PrEta = 1 / 5.21;
const PrGaso = 1 / 6.7;
const DistanciaH = 244;
const CombusLataVelha = PrEta;
const GastoMedioEta = DistanciaH / PrEta;
const GastoMedioGaso = DistanciaH / PrGaso;
if (DistanciaH === 245) {
    console.log("Aqui o valor da viagem por Etanol: ", GastoMedioEta);
} else if (DistanciaH >= 300) {
    console.log("Melhor comprar outro carro");
} else {
    console.log("Aqui o valor da viagem Gasolina: ", GastoMedioGaso);
}