// Usando la función anterior beneficiate de poder conocer el indice del array 
// para crear una función llamada removeItem que pasandole un array y un texto 
// como parametros (los mismos parametros que en el anterior ejercicio) llame a 
// la función anteriormente creada findArrayIndex y obten el indice para 
// posteriormente usar la función de javascript .splice() para eliminar el 
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
// correctamente.

function findArrayIndex(array, text) {
    try {
        return array.indexOf(text);
    } catch (error) {
        return `Error - Se ha producido el siguiente error al devolver la posición:\n${error}.\n\nRevise el formato de los parámetos pasados a la función.`;
    }
}

// Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function removeItem(array, texto) {
    const pos = findArrayIndex(array, texto)
    if(typeof pos === "number" && pos !== -1) {
        array.splice(pos, 1);
    }
    return array;
}

console.log(removeItem(mainCharacters, "Chewbacca"));