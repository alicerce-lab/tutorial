console.log("ola mundo")
function resolveEquacaoCubica(): number[] {
    const a = 1;
    const b = -3;
    const c = -4;
    const d = 12;

    // Encontrando raízes possíveis (números inteiros)
    const raizes: number[] = [];

    for (let x = -10; x <= 10; x++) {
        const resultado = a * x**3 + b * x**2 + c * x + d;

        // Verifica se o resultado é praticamente zero (levando em conta a precisão de ponto flutuante)
        if (Math.abs(resultado) < 1e-10) {
            raizes.push(x);
        }
    }

    return raizes;
}

function tabela(a: number, b: number, c: number, xi: number, xf: number) {
    for (let x = xi; x <= xf; x++) {
        const fx = a * (x*x) + b * x + c
        console.log(`x:${x} | f(x):${fx}`);
    }
}

// console.log(baskasra(1,2,3));
console.log(tabela(1,2,3,-5,5));

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
function fact(num:number) {
    if (num < 0) throw new Error("O fatorial é indefinido para números negativos.");
    let resultado = 1
    while(num > 0) {
        resultado = resultado * num
        num--
    }
    return resultado
}

function calcularfatorial(numero: number): number {
    if (numero < 0) {
        throw new Error("O fatorial é indefinido para números negativos.");
    }

    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularfatorial(numero - 1);
    }
}

const numeroparacalcular = 5;
const resultadofatorial = calcularfatorial(numeroparacalcular);

console.log(calcularfatorial(5))
console.log(fact(5))


// Exemplo de uso
const raizesEncontradas = resolveEquacaoCubica();
console.log(`As raízes inteiras da equação cúbica são: ${raizesEncontradas.join(', ')}`);
