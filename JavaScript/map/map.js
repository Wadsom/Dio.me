// richa com objeto


const ListaFruta = new Map;

ListaFruta.set(
    'Amarelo' , 'banana',
    'Vermelha', 'Morango'
);

setTimeout(() => {console.log(ListaFruta.get('Amarelo'))},2000);
ListaFruta.delete('Amarelo');

setTimeout(() =>{console.log(ListaFruta.get('vermelha'))}, 2500);

