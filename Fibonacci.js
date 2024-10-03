// Sucesion de Fibonacci.
// Línea para poder poner inputs.
const prompt = require('prompt-sync')();

// Función recursiva para calcular el n-ésimo número de Fibonacci.
function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Validación de la entrada del usuario para asegurarse de que sea un número.
let n;
while (true) {
    n = prompt('Ingrese un número: ');

    // Convertir la entrada a número y verificar si es válida.
    n = Number(n);

    // Valida que el número no sea NaN y que sea positivo.
    if (!Number.isNaN(n) && n >= 0) {  
        // Rompe el bucle si se ingreso un numero correctamente.
        break; 
    }
    console.log('Por favor ingrese un número mayor o igual a 0.');
}

// Guardar cada iteracion que tenga la funcion, para obtener la sucesion completa.
let fibonacciS = [];
for (let i = 0; i < n; i++) {
    fibonacciS.push(fibonacci(i));
}

// Mostrar la sucesión completa de Fibonacci hasta el número n.
console.log(`La sucesión de Fibonacci hasta el número ${n} es:\n`);
// Mostramos la lista con la sucesion separada por comas con join.
console.log(fibonacciS.join(", "))
