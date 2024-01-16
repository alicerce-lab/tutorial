console.log("ola mundo")

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




