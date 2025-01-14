// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const copiaPointsList = [...pointsList];
console.log(copiaPointsList);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToy = {...toy};
console.log(copiaToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];

const unionPoints = [...pointsList2, ...pointsList3];
console.log(unionPoints);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const unionToys = {...toy2, ...toyUpdate};
console.log(unionToys);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const [pos0, pos1, , pos3, pos4] = colors;
const array = [pos0, pos1, pos3, pos4];
console.log(array);