let pessoa = {
    nome : "Nicollas" ,
    idade: 21,
    dizerOla(){
        console.log("Olá,Mundo! Meu nome é " + this.nome)
    }
}
console.log(pessoa)
pessoa.dizerOla()
let idade = {
    idade: 21,
    dizerIdade(){
        console.log("Minha idade é " + this.idade);
    }
}
console.log(idade)
idade.dizerIdade()