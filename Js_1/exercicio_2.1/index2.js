const nome = prompt("nome do personagem: ")
const poder = parseFloat(prompt("poder de atk: "))

const nome2 = prompt("nome do personagem que defende: ")
let vida = parseFloat(prompt("Quantida de vida do personagem "+ nome2 ))
const defesa = parseFloat(prompt("Poder de defesa "))
const escudo = prompt ("Possui escudo:(sim ou não)")

let danocausado = 0

if ( poder > defesa && escudo === "não")
{
    danocausado = poder - defesa
}
else
{
    if(poder > defesa && escudo === "sim")
    {
        danocausado = (poder - defesa)/2
    } 
}
vida -= danocausado
    alert(" O personagem "+ nome + " ataca e o dano será de " + danocausado + 
        "\n A vida atual do " + nome2 +" é de "+ vida + 
        "\no poder de atk:"+ poder + 
        "\no poder de def:"+ defesa +
        "\n possui escudo:"+escudo)
