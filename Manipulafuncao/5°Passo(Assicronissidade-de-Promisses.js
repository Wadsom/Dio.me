/*
const rolagemdedados = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rolagem = parseInt(Math.random() * 10);
    resolve (rolagem)
    }, 100);
})
rolagemdedados
        .then((value)=> {
            numeroRolados.push(value);
         return console.log(value);
        })
        .catch((error) => console.error("Error"))     
        .finally(()=> console.log("Está finalizado"))
   rolagemdedados
    .then((value)=> {
        numeroRolados.push(value);
     return console.log(value);
    })
    .catch((error) => console.error("Error"))     
    .finally(()=> console.log("Está finalizado"))

*/


const numeroRolados = [];



setTimeout(() => {
let i = 0;

    while ( i < 5 ){
        const giraDados = new Promise ((resolve, reject) => {
             let roleta = parseInt(Math.random() * 120);
            resolve (roleta)
        
        })
i++;
        giraDados
                .then((value) =>{
                     numeroRolados.push(value);
                     return //console.log(value)
                 } )
                .catch((error) =>{
                    console.log("Error")
                })
              
                
                
                
                
                                 
    }




}, 1010)
setTimeout(()=>{
console.log(numeroRolados);
},11010)


const troposfera = console.log("TROPOSFERA");



function solucao(altitude) {
    // seu codigo aqui
     if(altitude <= 20){
        return troposfera;
     } else if ( altitude > 20 && altitude <= 50){
         return ["ESTRATOSFERA"];
       } else if( altitude > 50 && altitude <= 80 ){
         return "MESOSFERA";
         } else if (altitude > 80 && altitude <= 450){
         return "TERMOSFERA";
           } else if (altitude > 450 && altitude <= 900){
         return "EXOSFERA";
             }
}
solucao(20);









