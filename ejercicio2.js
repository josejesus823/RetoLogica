// Ejercicio 2 (Medio)
// Descripción
// Construye un programa que calcule una factura a partir de una lista de precios, un cupón y un costo de envío.

// Reglas:

// subtotal = suma(precios)
// Aplicar cupón:
// "DESC10": descuento del 10% sobre el subtotal
// "DESC20": descuento del 20% sobre el subtotal solo si subtotal >= 200000
// "FREESHIP": el envío queda en 0 (sin descuento al subtotal)
// "NONE": sin cambios
// base = subtotal - descuento
// iva = 19% de base (sin incluir envío)
// El iva debe redondearse al entero más cercano (0.5 hacia arriba)
// total = base + iva + envio
// Objetivo de aprendizaje
// Recorrer arreglos con ciclos (for / while) y controlar límites (0, n-1)
// Usar condicionales para comparar valores y construir lógica (detección de picos)
// Crear y usar funciones para separar responsabilidades (invertir, sumar, max/min, picos)
// Manipular arreglos: invertir, generar listas de resultados (índices)
// Realizar cálculos básicos con cuidado de tipos numéricos y redondeo del promedio
// Entrada
// Entero n
// n enteros (precios)
// String cupon
// Entero envio
// Salida
// Imprimir exactamente 4 líneas:

// SUBTOTAL X
// DESCUENTO Y
// IVA Z
// TOTAL T
// Restricciones
// 1 ≤ n ≤ 100000
// 0 ≤ precios[i], envio ≤ 10^9
// cupon ∈ {NONE, DESC10, DESC20, FREESHIP}

function calculateBill(listPrice, voucher, shippingCost){
    let subtotal = 0;
    for(const price of listPrice){
        subtotal += price;
    }

    let descuento = 0;
    let envio = shippingCost;

    if(voucher === 'DESC10'){
        descuento = subtotal * 0.10;
    } 
    else if(voucher === 'DESC20' && subtotal >= 200000){
        descuento = subtotal * 0.20;
    } 
    else if(voucher === 'FREESHIP'){
        envio = 0;
    }

    const base = subtotal - descuento;
    const iva = Math.round(base * 0.19);
    const total = base + iva + envio;

    console.log(`subtotal ${subtotal}`);
    console.log(`desc ${descuento}`);
    console.log(`iva ${iva}`);
    console.log(`total ${total}`);
}

calculateBill([100000, 200000], "DESC20", 15000);