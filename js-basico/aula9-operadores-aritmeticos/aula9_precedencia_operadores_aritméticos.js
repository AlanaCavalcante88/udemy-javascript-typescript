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

let contador = 1 // se fizer isso com const já acusar erro porque não pode
console.log(++contador) // aqui é pré, ele 1° faz a conta e retorna o valor pra gente

let contador = 1 // se fizer isso com const já acusar erro porque não pode
console.log(contador++) // aqui é pós, então 1° ele executa a ação que estamos pedindo para ser executada e depois faz o incremento do valor
console.log(contador++)


// Se fizer assim não vai fazer a mínima diferença de ser pré ou pós, pq ele já vai ter o resultado de 2
let contador = 1
contador++
console.log(contador) // resultado = 2

// -- é operador de decremento (pré e pós)