export default class Caixa<T> {
    private conteudo?: T
    private trava: boolean = false

    constructor(conteudo?: T) {
        this.conteudo = conteudo
    }

    guardar(conteudo: T) {
        if(this.trava) {
            console.log('Erro, caixa travada')
        } else {
            this.conteudo = conteudo
        }
    }

    retirar() {
        if(this.trava) {
            console.log('Erro, caixa travada');
        } else {
            return this.conteudo
        }
    }

    travar() {
        this.trava = true
    }

    destravar() {
        this.trava = false
    }
}