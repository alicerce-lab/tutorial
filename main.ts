console.log("ola mundo")

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




