// alert('Com a nossa mensagem.') // abre no navegador uma caixinha de alerta

// confirm('Deseja realmente apagar?') // Isso aqui dá para ver pelo o inspect(console) se o resultado vai ser true ou false, mas lá no console tem que 
// colocar window.alert, window.confirm e window.promt

// prompt('Digite o seu nome') // Onde pede para o usuário digitar alguma coisa

let num1 = prompt('Digite um número:')
let num2 = prompt('Digite outro número:')

num1 = Number(num1)
num2 = Number(num2)

alert(`O resultado da sua conta foi: ${num1 + num2}`) // Isso aqui é template strings, usa-se crase. Ele já está somando e vai mostrar o resultado