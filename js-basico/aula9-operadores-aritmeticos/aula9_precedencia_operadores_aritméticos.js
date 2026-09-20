// Precedência dos operadores aritméticos

/*
1º ( ) parênteses
2º  ** potenciação
3º * multiplicação | / divisão | % resto da divisão
4º + adição | - subtração
*/

const num1 = 5
const num2 = 2
const num3 = 10
console.log(num1 + num2 * num3)

// ++ é operador de incremento (pré e pós)

let contador1 = 1 // se fizer isso com const já acusa erro porque não pode
console.log(++contador1) // aqui é pré, ele 1° faz a conta e retorna o valor pra gente

let contador2 = 1 // se fizer isso com const já acusa erro porque não pode
console.log(contador2++) // aqui é pós, então 1° ele executa a ação que estamos pedindo para ser executada e depois faz o incremento do valor
console.log(contador2++)

// Se fizer assim não vai fazer a mínima diferença de ser pré ou pós, pq ele já vai ter o resultado de 2
let contador3 = 1
contador3++
console.log(contador3) // resultado = 2

// -- é operador de decremento (pré e pós)


// Operadores de atribuição
const passo = 50
let contador = 0
contador += passo // isso aqui significa: contador = contador + 50
console.log(contador)

// NaN = Not a Number
const num4 = 4
const num5 = 'Alana' // Se aqui tivesse, por exemplo, '10', o JS tentaria resolver
console.log(num4 * num5) // O resultado vai ser NaN
console.log(typeof num)

// ParseInt
const num10 = 10
const num11 = parseInt('11')
console.log(num10 + num11)
console.log(typeof num11)

// ParseFloat
const num12 = 12
const num13 = parseFloat('13.2')
console.log(num12 + num13)
console.log(typeof num13)

// Number (ele se vira e entende se é um número inteiro, se é flutuante)
const num14 = 14
const num15 = Number('13.2')
console.log(num14 + num15)
console.log(typeof num15)