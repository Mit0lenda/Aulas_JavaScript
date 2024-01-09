const nome1 = prompt ("veiculo 1: ")
const nome2 = prompt ("veiculo 2: ")
const vel1 = parseFloat(prompt ("velocidade do veiculo 1: "))
const vel2 = parseFloat(prompt ("velocidade do veiculo 2: "))

    if (vel1 > vel2)
    {
        alert("O veiculo "+nome1+" venceu")
    }
    else{
        if (vel2 > vel1)
        {
            alert("O veiculo "+nome2+" venceu")
        }
    else{
        alert("Empate de " + nome1 + " "+ nome2 +" "+ "nenhum ganhou")
    }
    }