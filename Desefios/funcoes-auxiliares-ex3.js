const entradas = [ 2 , 2000, 250];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };



class funcionário {
    name;
    salariobruto;
    beneficios;
    ImpostoINSS;
    SalarioFinal;

constructor(name, salariobruto, beneficios){
    this.name = name;
    this.salariobruto = salariobruto;
    this.beneficios = beneficios;
    }
    CalcuINSS(){
        if(this.salariobruto > 0 && this.salariobruto <= 1100){
            return this.ImpostoINSS =  0.05;
        } else if(this.salariobruto >= 1100.1 && this.salariobruto <= 2500){
            return this.ImpostoINSS = 10/100;
        }else if(this.salariobruto > 2500){
            return this.ImpostoINSS = 15/100;
        }
    }
    CalculodeSalario(){
    return this.SalarioFinal = this.salariobruto - (this.salariobruto * this.ImpostoINSS) + this.beneficios;
    }
}

const wadson = new funcionário('Wadson', 2000, 250);
console.log(wadson.CalcuINSS());

console.log(wadson.CalculodeSalario());







