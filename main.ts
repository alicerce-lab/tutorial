console.log("ola mundo")

// f(x) = 2x
function f(x: number): number {
    return 2 * x
}

function baskasra(a: number, b: number, c: number) {
    // ax2 + bx + c
    const delta = (b * b) - 4 * a * c
    if (delta < 0) {
        return "Delta negativo"
    }
    const x1 = (-b + Math.sqrt(delta)) / 2 * a
    const x2 = (-b - Math.sqrt(delta)) / 2 * a
    return [x1, x2]
}

function tabela(a: number, b: number, c: number, xi: number, xf: number) {
    for (let x = xi; x <= xf; x++) {
        const fx = a * (x*x) + b * x + c
        console.log(`x:${x} | f(x):${fx}`);
    }
}

// console.log(baskasra(1,2,3));
console.log(tabela(1,2,3,-5,5));

