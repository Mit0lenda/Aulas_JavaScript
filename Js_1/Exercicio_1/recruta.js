const primeironome = prompt("Insira seu nome: ")
const sobrenome = prompt("Insira seu sobrenome: ")
const estudo = prompt("Aonde estuda: ")
const ano = prompt("Ano em que nasceu: ")

alert(
    "Recruta Cadastrado com sucessor!\n" +
    "\nNome completo: "+ primeironome + " " + sobrenome +
    "\nCampo de estudo: " + estudo +
    "\nIdade: " + (2023 - ano)
)