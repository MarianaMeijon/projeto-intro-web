//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

//ESTADOS REGIÃO SUDESTE

const nome1 = ("Espírito Santo")
const municipios1 = (78)
const temPraia1 = (true)

const nome2 = ("Minas Gerais")
const municipios2 = (853)
const temPraia2 = (false)

const nome3 = ("Rio de Janeiro")
const municipios3 = (92)
const temPraia3 = (true)

const nome4 = ("São Paulo")
const municipios4 = (645)
const temPraia4 = (true)

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediavalores=((municipios1+municipios2+municipios3+municipios4)/4)
console.log (mediavalores)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificaBoleanos = temPraia1&&temPraia2&&temPraia3&&temPraia4 
console.log (verificaBoleanos)

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const caracteristica1Array = ["Capixaba ", " Espirito-Santense"]
const caracteristica2Array = ["Mineiro ", " Montanhês", " Geralista"]
const caracteristica3Array = ["Carioca ", " Fluminense"]
const caracteristica4Array = ["Paulista ", " Bandeirante"]

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   6.1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

const nome1Maiusculo = nome1.toUpperCase()
const nome2Maiusculo = nome2.toUpperCase()
const nome3Maiusculo = nome3.toUpperCase()
const nome4Maiusculo = nome4.toUpperCase()

console.log (`Estado: ${nome1Maiusculo}
Quantos munícipios tem? ${municipios1}
Tem praia? ${temPraia1}
Adjetivo Pátrio: ${caracteristica1Array}

Estado: ${nome2Maiusculo}
Quantos munícipios tem? ${municipios2}
Tem praia? ${temPraia2}
Adjetivo Pátrio: ${caracteristica2Array}

Estado: ${nome3Maiusculo}
Quantos munícipios tem? ${municipios3}
Tem praia? ${temPraia3}
Adjetivo Pátrio: ${caracteristica3Array}

Estado: ${nome4Maiusculo}
Quantos munícipios tem? ${municipios4}
Tem praia? ${temPraia4}
Adjetivo Pátrio: ${caracteristica4Array}

`)
