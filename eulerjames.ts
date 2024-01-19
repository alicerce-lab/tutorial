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
console.log(`A soma dos dígitos do fatorial é: ${resultadoSomaDigitos}`);git checkout -b