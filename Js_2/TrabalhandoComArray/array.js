const array = ["Nico","Joao","vini","dudu","gabi","carlos","Pedro","bruno","loco",]
console.log(array)
// adicionar elementos
// push

array.push("jose")
console.log(array)

array.push("ose")
array.push("a")
array.push("je")
console.log(array)
//push insira elementos de forma previsivel pq as vezes nao sabemos qual o indice

//unshift ele joga la para cima
let tamanho = array.unshift("teste")
console.log(array)
console.log(tamanho)
//remover elementos
//pop
let ultimoElemento = array.pop()
console.log(array)
console.log(ultimoElemento)

//shift tira o primeiro elemento
ultimoElemento = array.shift()
console.log(array)
console.log(ultimoElemento)

//Pesquisar por um elemento
//includes
const inclui = array.includes("Nico")
console.log(inclui)

// conseguimos pesquisar atraves do indice
//indexOf
const indice = array.indexOf("dudu")
console.log(indice)

//cortar os arrays
// slice ele nao modifica o array
const friends = array.slice(0,4)
const outros = array.slice(-4)
console.log(array)
console.log(friends)
console.log(outros)

//concatenar os arrays
//concat
const sociedade = friends.concat(outros , "nicollas")
console.log(sociedade)

//substituicao dos elementos
//splice
const a = sociedade.splice(indice , 1 ,"nicollas a lenda")
console.log(sociedade)
console.log(ultimoElemento) 

//Iterar sobre os Elementos
for(let indice =0 ; indice < sociedade.length; indice++)
{
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posicao " + indice)
}