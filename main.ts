class Aluno {
    nome: string = "";
    sexo: string = '';
    idade: number = 0;

    constructor(nome: string, sexo: string, idade: number) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }

    fala() {console.log('Oi, meu nome é ' + this.nome + ', sou do sexo '+ this.sexo+' e tenho ' + this.idade +' anos.');
    }
}

var felip = new Aluno('Felip', 'masculino', 13);
felip.fala();