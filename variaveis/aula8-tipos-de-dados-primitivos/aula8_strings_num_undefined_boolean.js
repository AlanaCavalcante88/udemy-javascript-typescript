// Tipos de dados primitivos -> string, number, undefined, null, boolean, symbol

const nome1 = 'Alana' // string
const nome2 = "Alana" // string
const nome3 = `Alana` // string
const num1 = 10       // number
const num2 = 10.52    // number

let nomeAluno; // variável está inicializada e automaticamente recebe o valor de undefined (está indefinido) e não aponta para local nenhum na memória.
// Aqui você nunca vai settar uma variável com o valor undefined (não se declara).

let sobrenomeAluno = null // Nulo -> Também não aponta para lugar nenhum na memória, mas a diferença do null para undefined é que no null o programador
// quer desconfigurar uma variável, explicitamente declarando null.

const aprovado = false // Tipo boolean -> true or false (valor lógico). Sempre que for mudar alguma coisa dentro da aplicação, um desvio condicional, usa-se boolean.

// Para checar o tipo e o valor
console.log(typeof aprovado, aprovado)

// Para checar só o tipo
console.log(typeof sobrenomeAluno)