const medidas =prompt("Digite o valor em metros:")
const conversor =prompt("Digite a medida que deseja a conversão:\n1)mm\n2)cm\n3)dm\n4)dam\n5)hm\n6)km")
const medida =parseFloat(medidas)
const converte =parseFloat(conversor)
switch(converte)
{
    case 1:
        alert("o valor em mm é " + (medida*1000))
        break
    case 2:
        alert("O valor em cm é " + (medida*100))
        break
    case 3:
        alert("O valor em dm é " + (medida*10))
        break
    case 4:
        alert("O valor em dam é " + (medida/10))
        break
    case 5:
        alert("O valor em hm é " + (medida/100))
        break
    case 6:
        alert("O valor em km é " + (medida/1000))
        break
    default:
        alert("invalido...")
}