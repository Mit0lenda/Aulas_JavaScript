const baralho = []
let opcao = "";

do {
    opcao = prompt("Cartas no baralho:" + baralho.length + "\n1.Adicionar uma carta\n2.Puxar uma carta\n3.Sair" )
    switch(opcao)
    {
        case "1":
            const newcard = prompt("Qual o nome da carta ?");
            baralho.push(newcard);
            break;
        case "2":
            const cardConsulting = baralho.pop();
            if(!cardConsulting){
                alert("não há nenhuma carta no baralho.");
            } else {
                alert( "You push " + cardConsulting)
            }
            break;
        case "3":
        alert("Saindo...");
            break;
        default:
            alert("Opção inválida!");
                break;
    }
}
while(opcao !== "3")