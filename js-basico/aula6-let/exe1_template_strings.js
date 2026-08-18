const nome = 'Alana'
const sobrenome = 'Cavalcante'
const idade = 37
const peso = 92
const alturaEmM = 1.70
let imc //peso / (altura * altura)
let anoNascimento
imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2025 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`) // template strings
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)