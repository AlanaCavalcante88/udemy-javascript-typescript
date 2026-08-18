//Convenção de constantes
// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constantes com um número
// Não podem conter espaços ou traços
// Não pode modificar o valor de uma constante
// Não utilize VAR utilize CONST
// Utilizamos camelCase (a primeira palavra com letra minúscula e as próximas maiúscula)
const nomeCompletoDoCliente = 'Alana Cavalcante'
console.log(nomeCompletoDoCliente)

//Case-sensitive = Letra minúscula e maiúscula fazem diferença
const nomeCliente = 'Alana'
const nomecliente = 'Cristina'
console.log(nomeCliente, nomecliente)

//---------------------------------

// Sempre tem que inicializar a constante
// O valor não pode mudar (não pode fazer uma reatribuição para o valor que já existe)
// Pode pegar o valor e atribuir a uma outra variável ou a outra constante
// Ex:
const primeiroNumero = 5
const segundoNumero = '10'
// Pode usar os dois valores acima, fazendo:
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
console.log(resultadoDuplicado)

console.log(typeof primeiroNumero) //Para descobrir qual o tipo da variável, que nesse caso é um number
console.log(typeof segundoNumero) // Aqui é uma string
console.log(typeof (primeiroNumero + segundoNumero)) // O resultado de toda essa expressão é uma string