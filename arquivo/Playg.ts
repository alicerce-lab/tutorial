import Caixa from "./Caixa"

let minhaCaixa = new Caixa<Caixa<number>>()
let minhaOutraCaixa = new Caixa<number>()

minhaOutraCaixa.guardar(2)
minhaOutraCaixa.travar()

minhaCaixa.guardar(minhaOutraCaixa)
minhaCaixa.travar()

