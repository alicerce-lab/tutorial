// somar todos os numeros ate 1000, que sejam multiplos de 3 ou 5
function euler1() {
    let contador = 0
    for (let numero = 0; numero < 1000; numero++) {
        console.log(`testando numero ${numero}`);
        
        if(numero % 5 === 0 || numero % 3 === 0) {
            console.log('Passou, somando');
            contador = contador + numero
        }
        console.log(`contador = ${contador}`);
        
    }
    return contador
}

function euler2() {
    let a = 1
    let b = 2
    let c = a + b
    let contador = 2
    while (c < 4000000) {
        if (c % 2 === 0) {
            contador = contador + c
        }
        a = b
        b = c
        c = a + b
    }
    return contador
}

console.log(euler2());
