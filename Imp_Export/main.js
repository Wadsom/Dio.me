const { gets, print} = require('./Funcoes_Auxiliares');


const NumerosSorteados = gets();
let MaiorValor = 0;

for (let i = 0; i < NumerosSorteados; i++) {
    const NumeroSorteado = gets();
   if(NumeroSorteado > MaiorValor ){
    MaiorValor = NumeroSorteado;
   }
}    

print(MaiorValor);







