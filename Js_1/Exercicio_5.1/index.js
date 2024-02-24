let dinheiro = parseFloat(prompt("Qual a quantidade de dinheiro inicial:"))
let escolha = ""
do{
    alert("vc possui R$"+dinheiro)
    escolha = prompt("Escolha \n 1-Add \n 2-Remo \n 3-Sair")
    switch(escolha)
    {
        case "1":
            dinheiro += parseFloat(prompt("Quanto deseja add:"))
            break
        case "2":
            dinheiro -= prompt("Quanto deseja remover:")
            break
        case "3":
            alert("SAINDO...")
            break
        default:
            alert("Entrada incorreta")
            break
    }
}while(escolha !== "3");
alert("Voce finalizou e o dinheiro na conta é R$"+ dinheiro)