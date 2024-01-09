const nome1 = prompt ("veiculo 1: ")
const nome2 = prompt ("veiculo 2: ")
const vel1 = prompt ("velocidade do veiculo 1: ")
const vel2 = prompt ("velocidade do veiculo 2: ")

const x = parseFloat(vel1)
const y = parseFloat(vel2)

    if (x > y)
    {
        alert("O veiculo "+nome1+" venceu")
    }
    else{
        if (y > x)
        {
            alert("O veiculo "+nome2+" venceu")
        }
    else{
        alert("Empate de " + nome1 + " "+ nome2 +" "+ "nenhum ganhou")
    }
    }