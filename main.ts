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

// Exemplo de uso
const raizesEncontradas = resolveEquacaoCubica();
console.log(`As raízes inteiras da equação cúbica são: ${raizesEncontradas.join(', ')}`);
