function register(jogador){
const name = document.getElementById("nome").value
const posicao = document.getElementById("posicao").value
const numero = document.getElementById("numero").value
alert("Jogador " + name + " Registrado!"+ " Posição: " + posicao + " Numero: " + numero);
const confirma = confirm("Deseja registrar o jogador?");
if(confirma){
    registerTime(name,posicao,numero);
}
}
function registerTime (n1,n2,n3){
    const teamList = document.getElementById("team-list")
    const playerItem = document.createElement("li")

    playerItem.id = "player-" + n3
    playerItem.innerText = n2 + ": " + n1 + " (" + n3 + ")"
    teamList.appendChild(playerItem)
    document.getElementById("nome").value = ""
    document.getElementById("posicao").value = ""
    document.getElementById("numero").value = ""
}
function remover(){
    const numero = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + numero)
    if(playerToRemove){
        const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")
        if(confirmation){
            document.getElementById("team-list").removeChild(playerToRemove)
            document.getElementById("numero").value = ""
        }
    }
}