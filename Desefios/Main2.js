/*2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1 */

const{ gets, print } = require('./funcoes-auxiliares-ex2');
 
const Numeros = gets();
let Nimpar = 1;
let Npar = 0;

for (let i = 0; i < Numeros; i++) {
    const NumeroSortido = gets();
    
 if(NumeroSortido % 2 === 0){
    if(NumeroSortido > Npar){
        Npar = NumeroSortido
    }
    } else {
        if(NumeroSortido < Nimpar){
            Nimpar = NumeroSortido
        }
    }
    
} print(Npar);
print(Nimpar);