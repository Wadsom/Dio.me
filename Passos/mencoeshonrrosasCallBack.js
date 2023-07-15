function adicao ( x, y){
    return x + y;
}
function mencior (x, y ){
    return `esse daqui é o x: ${x} e este o y: ${y}`;
    }
    

function calcular(x, operacao, y){
    return console.log(operacao(x,y));
}
calcular(10,adicao, 20);
calcular(100, mencior, 200);



function sobraco(bpw){
    return bpw * (bpw*1.11) 
}

function perna(bpw){
    return bpw * (bpw * 1.12)
}
function manoahmano (bpw, sobraco, perna){
    return sobraco + perna *(bpw/bpw) * 10
}

function charyou (bpw, sobraco, perna) {
    return sobraco + perna * (bpw/bpw) * 11
}
function calculoDeBPW (bpw,operacao ){
    return console.log(`Este é o resultado: ${operacao(bpw)}`);
}
 


calculoDeBPW(10, sobraco);
calculoDeBPW(10, perna);
calculoDeBPW(10, manoahmano);