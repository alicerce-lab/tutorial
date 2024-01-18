
var nome: string = "Maria";
var dataNascimento: Date = new Date("1997-12-10");
var peso: number = 65;

function calcularIdadeAtualizada(dataNascimento: Date): number {
    const hoje: Date = new Date();
    const anoNascimento: number = dataNascimento.getFullYear();
    const anoAtual: number = hoje.getFullYear();

    var idadeAtualizada: number = anoAtual - anoNascimento;
    return idadeAtualizada;
}

// Atualizando a idade
var idade: number = calcularIdadeAtualizada(dataNascimento);

console.log("Nome:", nome);
console.log("Peso:", peso);
console.log("Data de Nascimento:", dataNascimento.toDateString());
console.log("Idade Atualizada:", idade);
