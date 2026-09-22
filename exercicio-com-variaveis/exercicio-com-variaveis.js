let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

const varATemp = varA // variável temporária armazenando o valor de A
varA = varB
varB = varC
varC = varATemp

console.log(varA, varB, varC)

