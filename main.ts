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




// euler6

function euler6() {
    let somaDosQuadrados = 0;
    let soma = 0;

    // Calcula a soma dos quadrados e a soma dos números
    for (let numero = 1; numero <= 100; numero++) {
        somaDosQuadrados += numero * numero;
        soma += numero;
    }

    // Calcula o quadrado da soma
    const quadradoDaSoma = soma * soma;

    // Calcula a diferença
    const diferenca = quadradoDaSoma - somaDosQuadrados;

    console.log(`A diferença da Soma dos Quadrados para os primeiros 100 números naturais é: ${diferenca}`);
}

// Chama a função principal

console.log(euler6())


//Euler20

function calcularFatorial(numero: number): bigint {
    if (numero < 0) {
        throw new Error("O fatorial é indefinido para números negativos.");
    }

    if (numero === 0 || numero === 1) {
        return 1n; // Usamos bigint para lidar com números grandes
    } else {
        return BigInt(numero) * calcularFatorial(numero - 1);
    }
}

function calcularSomaDigitosFatorial(numero: number): number {
    const fatorial = calcularFatorial(numero);
    const digitos = fatorial.toString().split('').map(Number);
    const soma = digitos.reduce((acc, curr) => acc + curr, 0);
    return soma;
}

const numeroparacalcular20 = 100; // Substitua pelo número desejado
const resultadoSomaDigitos = calcularSomaDigitosFatorial(numeroparacalcular20);

console.log(`O fatorial de ${numeroparacalcular20} é: ${calcularFatorial(numeroparacalcular20)}`);
console.log(`A soma dos dígitos do fatorial é: ${resultadoSomaDigitos}`);