/*
Ejercicio 1 (Básico)
Descripción
Dado un arreglo de enteros precios, encuentra los 3 precios más altos y muéstralos en orden descendente.

Si el arreglo tiene menos de 3 elementos, devuelve todos los elementos ordenados de mayor a menor.
No está permitido usar funciones de ordenamiento del lenguaje:
JavaScript: Array.sort()
Java: Arrays.sort() / Collections.sort()
Objetivo de aprendizaje
Recorrer arreglos
Comparar valores
Mantener el “Top 3” actualizado con lógica condicional
Modularizar en funciones (por ejemplo: insertar en top)
Restricciones
1 ≤ n ≤ 100000
0 ≤ precios[i] ≤ 10^9
 */

function pricesHigher(arr) {
    const result = [];
    const tempArr = [...arr];

    for (let i = 0; i < 3 && tempArr.length > 0; i++) {
        let maxIndex = 0;

        for (let j = 1; j < tempArr.length; j++) {
            if (tempArr[j] > tempArr[maxIndex]) {
                maxIndex = j;
            }
        }
        result.push(tempArr[maxIndex]);
        tempArr.splice(maxIndex, 1);
    }
    
    return result;
}

console.log(pricesHigher([20, 10]));
console.log(pricesHigher([50, 20, 30, 10, 40]));
console.log(pricesHigher([15])); 
console.log(pricesHigher([]));
