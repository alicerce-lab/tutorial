
// // Condicionais
// if(true) {
//     //isso
// } else {
//     //aquilo
// }

// let var1 = true

// let var2 = (var1 ? 'Sim' : 'Nao')

// let var4

// let var3 = var4 || 'ola'

// loops

for(let c = 0; c < 10; c++) {
    console.log(c);
}

// while(true) {
//     // algo
// }

do {

} while(true)

let v2 = [2,4,6,8]

for(let numero of v2) {
    console.log(numero);
}

for (let numero in v2) {
    console.log(numero);
}

// funcoes
function nominal(param:number) {
    return param
}

let variavel = function(param: number) {
    return param
}

let lamb = (param: number) => param

let array = [1,2,3,4,5,6]

array.map(n => n*2).reduce((a,b) => a + b)

class exemplo {
    valor: number

    constructor(num?: number) {
        this.valor = num || 1
    }

    sum(num: number): exemplo {
        let ret = new exemplo()
        ret.valor = this.valor + num
        return ret
    }
}

new exemplo(2).sum(2).sum(2).sum(3).valor


