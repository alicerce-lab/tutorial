console.log("ola mundo")
function fibonacciSequence(n: number): void {
    if (n <= 0) {
        console.log("N deve ser um número positivo.");
        return;
    }

    let fibArray: number[] = [];

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            fibArray.push(i);
        } else {
            const nextFib = fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(nextFib);
        }
    }

    console.log(`Sequência de Fibonacci até o ${n}-ésimo número: ${fibArray.join(', ')}`);
}

// Exemplo de uso: imprimir sequência até o 10º número
fibonacciSequence(10);