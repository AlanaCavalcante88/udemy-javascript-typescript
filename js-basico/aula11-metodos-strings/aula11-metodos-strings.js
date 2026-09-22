//               01234567
let umaString = 'Um texto'
console.log(umaString)

// Strings são indexadas -> tem como iterar sobre eles, cada caractere tem um índice
// Então tem como verificar um caractere que esteja em determinada posição

// Método charAt()
console.log(umaString[4]) // o resultado será "t" pq é o "t" que está no índice 4
console.log(umaString.charAt(6))// tem como usar também charAt

// Método concat()
console.log(umaString.concat(' em', ' um', ' dia', ' lindo'))
console.log(`${umaString} em um lindo dia`) // template string é a forma mais usual 

// Método indexOf()
console.log(umaString.indexOf('texto')) // pesquisa por um índice, por exemplo, em qual índice está a palavra texto

// Método lastIndexOf()
console.log(umaString.lastIndexOf('m')) // pesquisa por um índice de trás para frente

// Método match()
console.log(umaString.match(/[a-z]/g)) // Match retorna as correspondências encontradas. Nesse exemplo, está buscando as letras minúsculas da frase 'Um texto' -> referente a expressões regulares

// Método replace()
console.log(umaString.replace('Um', 'Outro')) // Substitui o padrão por outro texto. Precisa de dois argumentos (buscado, substituto). É o texto que está buscando e o texto pelo qual você vai substituir.

// Método split() 
console.log(umaString.split('')) // Divide a string em array de pedaços com base no separador informado. Nesse exemplo, está dividindo a string a cada caractere (separado por letras)
console.log(umaString.split(' ')) // Aqui está dividindo a string nos espaços em branco (separa por palavras)

// Método search()
console.log(umaString.search(/x/)) // Search procura por uma correspondência entre uma expressão regular (Regex) e a string onde é chamado. Ele retorna o índice da primeira ocorrência encontrada ou -1 caso não encontre nada.
// Ele é parecido com o indexOf, mas a diferença é que ele aceita expressões regulares.

// length 
console.log(umaString.length) // Serve para ver o tamanho de uma string

// Método slice()
console.log(umaString.slice(2, 6)) // Vai fatiar da posição x até a posição y 

// Método toUpperCase
console.log(umaString.toUpperCase()) // Vai deixar o texto todo com letras maiúsculas

// Método toLowerCase
console.log(umaString.toLowerCase()) // Vai deixar o texto todo com letras minúsculas

