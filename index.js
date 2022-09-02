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
