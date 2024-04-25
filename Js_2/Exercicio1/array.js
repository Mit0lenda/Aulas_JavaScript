let escolha = ""
let fila = []
do
{
    let pacientes = ""
    for(let i = 0 ; i < FileReader.length; i++)
    {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    escolha = prompt (
        "Pacientes:\n" + pacientes + "\nEscolha uma acao: " +
        "\n1 - Novo paciente \n2 -Consultar paciente \n3 - Sair"
    )
    switch(escolha)
    {
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsulta = fila.shift()
            if(!pacienteConsulta)
            {
                alert("Nao ha pacientes na fila!")
            }
            else {
                alert (pacienteConsulta + "foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
            default:
            alert("Opcao invalida!")
            break
    }
}
while(escolha !== "3"){}