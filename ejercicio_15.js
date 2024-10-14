// Crea una función llamada swap que reciba un array y dos parametros que sean 
// indices del array. La función deberá intercambiar la posición de los valores de 
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, param1, param2) {
    try {
        const elemento1 = array[param1];
        const elemento2 = array[param2];

        if(elemento1 !== null && elemento1 !== undefined && elemento2 !== null && elemento2 !== undefined) {
            array[param1] = elemento2;
            array[param2] = elemento1;
        } else {
            return "Alguno de los elementos no ha sido encontrado";
        }
            

        return array;
    } catch (error) {
        return `Error al procesar el cambio - ${error}`
    }
}

console.log(swap(fantasticFour, 1, 2));