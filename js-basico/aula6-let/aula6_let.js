let nome = 'José' // String

console.log(nome, 'nasceu em 1984.')
console.log('Em 2000', nome, 'conheceu Maria')
console.log(nome, 'casou-se com Maria em 2012.')
console.log('Maria teve 1 filho com', nome, 'em 2015.')
console.log('O filho de', nome, 'se chama Eduardo.')
console.log('----------------------------------------')
//-----------------------------------------------

let idade //Declarou a variável
idade = 30 // Inicializando a variável
console.log(idade)
console.log('----------------------------------------')

//-----------------------------------------------

let nomeTeste
nomeTeste = 'João'
console.log(nomeTeste)
nomeTeste = 'Otávio'
console.log(nomeTeste)
console.log('----------------------------------------')

//-----------------------------------------------

//Convenção de variáveis
// Não podemos criar variáveis com palavras reservadas. Ex., let, console, if...
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
/* Não podemos redeclarar variáveis com let. Sempre que utiliza a palavra let uma vez para criar a variável, não pode recriar, só pode atribuir um novo valor. 
Por exemplo:
*/
let nomeCliente = 'Luiz'
nomeCliente = 'Otávio'
console.log(nomeCliente)

/* Não utilize VAR utilize LET SEMPRE! Isso é para evitar comportamentos imprevisíveis ao declarar variáveis. var tem escopo de função global. 
Se você declarar um var dentro de um bloco de código a variável vai vazar para fora do bloco. Já let tem escopo de bloco. 
Ela existe apenas dentro das chaves onde foi declarada. 
Var também permite que você declare a mesma variável várias vezes no mesmo escopo sem dar erro, o que facilita sobrescrever valores sem querer.
*/

// Utilizamos camelCase (a primeira palavra com letra minúscula e as próximas maiúscula)Ex., nomeCompletoDoCliente
let nomeCompletoDoCliente = 'Alana Cavalcante'

//Case-sensitive = Letra minúscula e maiúscula fazem diferença
let nomeCliente = 'Alana'
let nomecliente = 'Farias'
console.log(nomeCliente, nomecliente)