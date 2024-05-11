//Retorno é a saida da função
//O retorno é usado para armazenar a saida da função  em uma variavel
//se não definir a saida da função ,sua saida será undefined
function calculamedia(a,b){
    const media = (a+b)/2
    return media
}
const resultado = calculamedia(5,7)
console.log(resultado)

//Para dizer qual a saida de uma função usamos o return
function criaProduto (nome,preco){
const produto ={ nome,preco,estoque:1}
return produto
}
const notebook = criaProduto("Notebook intel core i3 8gb", 3000)
console.log(notebook)
//também podemos jogar a saída de uma função dentro dos parametros de outra
console.log(criaProduto("Smartphone Samsung Galaxy",1000))

//O retorno não precisa ser uma váriavel,pode ser o resultado de qualquer expressão
function areaRetangular(base,altura){
    return base * altura
}
console.log(areaRetangular(3,5))
//ou até o retorno de outra função
function areaQuadrada(lado){
    return areaRetangular(lado ,lado)
}
console.log(areaQuadrada(8))

//A função só pode retornar uma saida,apos o return nada é executado
//o vs avisa
function olamundo(){
    let texto =  "..."  
    return texto
    texto = "olá, mundo!"
    console.log(texto)
}
console.log(olamundo())

//Porem cada ramificação pode ter um retorno diferente
function maiorIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    }
    else{
        return "Menor de idade"
    }
}
console.log(maiorIdade(18))
console.log(maiorIdade(5))
