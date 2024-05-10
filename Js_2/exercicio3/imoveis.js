let opcao = ""
const imoveis =[]
do
{
    opcao =prompt("Imoveis cadastrados:" + imoveis.length + "\n1)Add um imovel\n2)Mostrar os imoveis\n3)Sair ")
    switch(opcao)
    {
        case "1":
            const Immobile = {}
            Immobile.proprietario = prompt("Qual o nome do proprietário: ")
            Immobile.quartos = parseFloat(prompt("Quantos quartos possui o imovel ?"))
            Immobile.banheiros = parseFloat(prompt("Quantos banheiros possui ?"))
            Immobile.garagem = prompt("O Imóvel possui Garagem (Sim/Não)")

            const confirma = confirm("Salvar esse Imovel ?\n" + 
            "\nProprietário:" + Immobile.proprietario +
            "\nQuartos:" + Immobile.quartos +
            "\nBanheiros:" + Immobile.banheiros +
            "\nPossui Garagem:" + Immobile.garagem
        )
            if(confirma) {
                imoveis.push(Immobile)
            }
            else{ alert("Voltando ao Menu!")}
            break;
        case "2":
            for(let i = 0 ; i < imoveis.length ; i++){
                alert("Imóvel" + (i + 1) +
            "\nProprietário: " + imoveis[i].proprietario +
            "\nQuartos:" + imoveis[i].quartos +
            "\nBanheiros" + imoveis[i].banheiros +
            "\nPossui Garagem" + imoveis[i].garagem
            )
            }
            break;
        case "3" :
            alert("Saindo...")
            break;
        default:
            alert("Opção Inválida!");
            break;
    }
}
while(opcao !== "3")