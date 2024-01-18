class Vaca {
    nome: string = ""
    raca: string = ""
    leite: number = 0

    constructor (nome: string, raca: string, leite: number){
        this.nome = nome
        this.raca = raca
        this.leite = leite
    }

    muge() {
        console.log ("Muuuuuu!");

    }

    leitelitro(racaoKg: number) {
        this.leite += racaoKg * 3
    }

}

var mimosa = new Vaca("mimosa", "malhada", 0)

mimosa.muge()
mimosa.leitelitro(20)

console.log (mimosa.leite);