
class Cachorro {
    nome: string = ''
    raca: string = ''
    peso: number = 0
    nascimento: Date = new Date()

    constructor(nome: string, raca: string, peso: number) {
        this.nome = nome
        this.raca = raca
        this.peso = peso
    }

    late() {
        console.log('Woff', this.nascimento);
    }

    come(quantidadeEmGramas: number) {
        this.peso += quantidadeEmGramas
    }
}

var rex = new Cachorro('Rex', 'Caramelo', 4000)

rex.late()
rex.come(300)

console.log(rex.peso);



