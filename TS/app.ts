// interface perfil{ 
//   name:string,
//   idade:number,
//   altura:number,
//   apelido?:string
// }
// const pessoa:perfil ={
//  name:'Wadi',
//  idade:20,
//  altura:1.79,
// }

// console.log(pessoa);

// const a: number = 10;
// const b: number = 10;
// if(a < 9 && b < 8){
//     console.log("Tá errado");
// } console.log("COntinue!!");



// const TypeUser = {
//   admin :  "Acesso Master, olá administrador, seja bem vindo",
//   student: "Olá estudante, seja bem vindo!",
//   viewer: "Caro visitante, sejá bem vindo!"
// }

// function VerificarUser(user: string ){
// console.log(TypeUser[ user as keyof typeof TypeUser]); //O parametro "User" é uma chave para acessar objeto "TypeUser" e seus atributos
// }
// const USER: string = 'admin';
// VerificarUser(USER);






const level = {
   Facil: "Quer sua chupeta? bebezinho, vai te ajudar na dificuldade Fácil",
   Normal: "pode ir, criança!",
   Difícil: "te desejo boa sorte!!. Você vai precisar...",
   Infernal: "Boa sorte senhor, que deus esteja conosco, Amém"

}

function niveldedificuldade(DIF: string){
    console.log("Bem vindo Jogador, " + level[ DIF as keyof typeof level]);
}
niveldedificuldade("Infernal");

const list: Array<number> = [1 , 2  ,3  ,5 ,6 ,8 , 9]

list.forEach(number => {
    if(number > 2 && number % 2 === 0 ){
        console.log(number)
    }
})