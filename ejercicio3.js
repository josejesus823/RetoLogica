// Ejercicio 3 (Avanzado)
// Descripción
// Tienes una lista de mediciones por minuto de un sistema (CPU, latencia, ventas por minuto… etc).
// El equipo de monitoreo quiere detectar picos y generar un reporte rápido.

// Reglas
// Dado un arreglo de enteros m[] (mediciones), debes:

// Construir un arreglo inv[] que sea m[] pero invertido.
// Calcular:
// total (suma)
// promedio (redondeado al entero más cercano, 0.5 hacia arriba)
// max y min
// Detectar los picos:
// Un índice i es pico si:
// 0 < i < n-1
// y m[i] > m[i-1] y m[i] > m[i+1]
// Imprimir:
// La cantidad de picos
// Los índices de picos (en orden ascendente)
// El “pico más fuerte”: el pico con mayor valor m[i]
// Si hay empate, el de menor índice
// Salida (en este orden)
// INV: seguido de inv[]
// TOTAL: X
// PROMEDIO: Y
// MAX: A
// MIN: B
// PICOS: k
// INDICES_PICOS: lista de índices (o NONE si no hay)
// PICO_MAS_FUERTE: índice del pico más fuerte (o -1 si no hay)
// Restricciones
// 1 ≤ n ≤ 100000
// -10^9 ≤ m[i] ≤ 10^9
function mediciones(arr) {
    let lArray = arr.length;
    
    let arrayReversed = [];
    for (let i = lArray - 1; i >= 0; i--) {
        arrayReversed.push(arr[i]);
    }
    
    
    let total = 0;
    for (let i = 0; i < lArray; i++) {
        total = total + arr[i];
    }
}