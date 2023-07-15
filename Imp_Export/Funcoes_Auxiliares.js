const entrada = [12, 9, 12, 98, 78];
let i = 0;
 
function gets(){
   const valor = entrada[i];
   i++;
   return valor;
} 
function print(Texto){
  console.log(Texto);
}

module.exports = { print, gets };
