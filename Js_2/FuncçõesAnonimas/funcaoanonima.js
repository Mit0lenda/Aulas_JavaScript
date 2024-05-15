//No javascript as funções podem ser atribuidas 
//A variaveis como se elas fosse valores
function somar(a,b){
    return a + b
}
//Repare que não usamos os () ao lado do nome da função,
//pq ao fazer isso estariamos executando a função
const operacao = somar
console.log(operacao(3,5))
// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a,b){
    return a -b 
}
console.log(subtrair(6,2))

// Com as funções anônimas podemos, por exemplo,
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a,b){
    return a *b 
} 
console.log(calculadora.multiplicar(5,5))

//DANGERRR
// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais

olaMundo()
//oiMundo() aqui da erro !

function olaMundo(){
    console.log("Olá,Mundo!")
}
const oiMundo = function (){
    console.log("Oi,mundo!")
}
oiMundo()