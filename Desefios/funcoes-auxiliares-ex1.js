const entradas = [3];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}
class AlunoMedia {
    nome;
    nota1;
    nota2;
    nota3;
    Media;

    constructor(nome, nota1, nota2, nota3){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
     CalculoMedia(){
        return this.Media = ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2)
     } 
    }
const Poliana = new AlunoMedia("Poliana", 10, 10, 10);
const OK = new AlunoMedia("Ok", 3, 8, 7);
const Eduard = new AlunoMedia("Eduard", 8, 4, 9);
print(Poliana.CalculoMedia());
entradas.push(OK.CalculoMedia());
entradas.push(Eduard.CalculoMedia());





module.exports = { gets, print };
