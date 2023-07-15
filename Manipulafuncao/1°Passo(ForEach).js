//ForEach é uma versão reduzidado do For convencional, Vejá
//fazendo a interação entre array e uma function 

const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];
//ForEach parameters (value, index, listref), PS. esse ListRef não precisa ser tanto especificado
// por que ele já vai ser mencionado no "Array.ForEach" ListRef seria o Array
// ForEach tem seus parameters parecidos com uma function então dá pra jogar na Function 


const cb = (value, i, listref) => console.log(` Este é o valor : ${value} que está nesta casa : ${i}, deste Array/lista: ${listref}`)


//list.forEach((value, i, listref) => console.log(` Este é o valor : ${value} que está nesta casa : ${i}, deste Array/lista: ${listref}`) )
list.forEach(cb);
//assim o ForEach vai possuir um parametro Function

for (let i = 0; i < 10; i++) {
    const Element = [i];
    
}


