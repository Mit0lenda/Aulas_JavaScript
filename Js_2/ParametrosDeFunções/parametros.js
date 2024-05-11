//Parametro é a entrada de uma função
// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro (x){
    console.log("O dobro de " + x + " é " + (x * 2))
}
dobro(5)
dobro(9)

//se não definirmos o parametro o valor é undefined
//dobro()

//se o parametro não for definido podemos dar um valor padrão
function ola(nome="Mundo"){
    console.log("olá,"+nome+"!")
}
ola("Nico")
ola()

//é possivel ter mais de um parametro,basta colocarmos virgula

function soma(a,b){
    console.log( a + b )
}
soma(1,1)
soma(30,35)

//A ordem dos parametros importa pois é recomendado deixar por ultimo o parametro com valor padrão

function criar(nome,email,senha,tipo="Leitor"){
    const usuario = {nome,email,senha,tipo}
    console.log(usuario)
}
function newuser(nome,tipo="Leitor",email,senha){
const usuario = {nome,email,senha,tipo}
console.log(usuario)
}
criar("Nico","nic@gmail.com","1234")
newuser("Nico","nic@gmail.com","1234")
//newuser a senha ela da como undefined pois a ordem está diferente

//ao criar uma função com muitos parametros,podemos substitulos por objeto
function parametrosdoJeitoErrado(nome,telefone,endereco,aniver,email,senha){
    //...
}
function parametrosDoJeitoCerto(usuario){
usuario.nome
usuario.telefone
}
//além de facilitar na chamada da função a ordem dos parametros se torna irrelevante 
parametrosdoJeitoErrado("nome","telefone","endereco","aniver","email","senha")
const dadosDoUsuario = {
    email: "",
    telefone: "",
    endereco: "",
    senha: "",
    nome: "",
    aniver:""
}
parametrosDoJeitoCerto(dadosDoUsuario)