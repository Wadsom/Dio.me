/*
3) Elabore um algoritmo que calcule o que deve ser pago por um VPuto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição 
de pagamento escolhida e controlada pelo calculado adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function TipoPag(forma) {
    if (forma === 1) {
        return VP - (VP * 10 / 100)
    } else if (forma === 2) {
        return VP - (VP * 15 / 100)
    } else if (forma === 3) {
        return VP
    } else if (forma === 4) {
        return VP + (VP * 123 / 100)
    } else {
        return "algo deuh errado"
    }
}
const VP = 10000;
/*const Debito = VP - (VP * 10/100);
const Ahvista = VP - (VP * 15/100);
const DuasX = VP 
const TresOuMais = VP + ( VP * 123/100); 
function formaPagamentoF(OPN) {
    if (OPN === 1) {
        return console.log(" VF:", TipoPag(1));
    } else if (OPN === 2) {
        return console.log(' Vf: ', TipoPag(2));
    } else if (OPN === 3) {
        return console.log('vf:', TipoPag(3));
    } else if (OPN === 4) {
        return console.log('Vf:', TipoPag(4));
    } else {
        console.log("Escolha de 1 a 4");
    }
}

formaPagamentoF(2);


function MyName(nome){
    return console.log ("Meu nome eh:" + nome);
}
MyName("Wadson"); 

function CalculoDeIdade(idade){
if (idade === 18){
console.log('tá virando moçinha : ' + idade);
} else if (idade < 18 && idade >  10){
    console.log("Adolescente: " + idade);
} else if ( idade <= 10){
    console.log("Criança: " + idade)
} else {
    console.log("algo deu errado");
}
} 

CalculoDeIdade(17);/// Nota media alundo Nassau
function calcularMedia(n1, n2) {
    const media = n1 + n2 / 2;
    return media;
}


function ClassMedia(media) {
    if (media = 7) {
        console.log("você passou com", media);
    } else {
        console.log("Recuperação", media);
    }
}
console.log(calcularMedia(12, 45)); 











class Arma {
    nome;
    munição;
    AtritoAr;
    GrauAngulo;
    Sobrevivência;
    GrauDePerfuração;

     constructor(nome, munição, AtritoAr, GrauAngulo) {
        this.nome = nome;
        this.munição = munição;
        this.AtritoAr = AtritoAr;
        this.GrauAngulo = GrauAngulo
        
        }
          PequenoPorte() {
           return this.GrauDePerfuração = (this.munição * 10 ) * (this.AtritoAr / 10) / (this.GrauAngulo / 100);
         } 

         GrandePorte() {
           return this.GrauDePerfuração = (this.munição * 100 ) * (this.AtritoAr / 100) / (this.GrauAngulo / 100);
          }

           NívelDeMotalidade(){
            return this.Sobrevivência = this.GrauDePerfuração / 100;
           }

           Destruicao(GrauDePerfuração) {
            if (this.munição > 0.50 && this.munição < 0.90){
          console.log(`Aqui é pequeno porte com perfuração `, this.PequenoPorte() ,' com Sobrevivência de  ',this.NívelDeMotalidade(),' % ');
          TioDaEsqueni.push(Ak47)
          } else if (this.munição >= 0.90){
                console.log(`Aqui é Grande porte com perfuração ${this.GrandePorte} com Sobrevivência de ${this.NívelDeMotalidade()}% ` );
            TioDaEsqueni.push()
            }
           }

        }

        const Ak47 = new Arma("Ak47", 0.80, 0.9, 90 );
        const TioDaEsqueni = [];
       Ak47.Destruicao();
       console.log(TioDaEsqueni);
*/


const { print , gets1  } = require('./Exercicios I');

const ListDiaENoite = gets1();
let MaiorNovoDia = 0;
for (let i = 0; i < ListDiaENoite; i++) {
    const NovoDia = gets1();
    if ( NovoDia > MaiorNovoDia){
        MaiorNovoDia = NovoDia;
        
    }
    }

print(MaiorNovoDia);




class Perfil {
Nome;
Idade;
Sexo;
Altura;
Peso;
PorcetagemDeGordura;
bpw;

 
constructor(Nome, Idade, Sexo, Altura, Peso){
    this.Nome = Nome;
    this.Idade = Idade;
    this.Sexo = Sexo;
    this.Altura = Altura;
    this.Peso = Peso;
    
  }
 NivelDeTesto (PorcetagemDeGordura, bpw){
    return bpw = PorcetagemDeGordura  / this.Altura * this.Peso;
  }
}

const Wadson = new Perfil(" Wadson", 20, "Masculino", 1.79, 86.9);
console.log(Wadson.NivelDeTesto( 86.9));








const TabelaNumero = [1, 4, 5, 7, 0 ,39, 58, 69 , 37];

 let MaiorNumeroPar = 0;
 let MaiorNumeroImpar = 1;

for (let i = 1; i < 10; i++) {
    let NumeroSortido = TabelaNumero[i];
    if ( NumeroSortido % 2 === 0){ 
        if(NumeroSortido > MaiorNumeroPar){
            NumeroSortido = MaiorNumeroPar; 
            TabelaNumero.push(MaiorNumeroPar);
        }
    } else {
         if(NumeroSortido > MaiorNumeroImpar){
            NumeroSortido = MaiorNumeroPar;
            TabelaNumero.push(MaiorNumeroPar);
         }
    }
} print(TabelaNumero);






























