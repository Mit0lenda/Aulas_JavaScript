const hitchedSpacesship = [
    ["Dragon",8,true],
    ["Soyuz",10,true],
    ["Orion",5,false],
    ["Falcon",3,true],
    ["Shuttle",15,false]
]
function crew(){
 return hitchedSpacesship
 .filter(spaceship => spaceship[1] > 9 )
 .map(spaceship => spaceship[0])
}
function HitchPlataform(){
    return  hitchedSpacesship.findIndex(spaceship => !spaceship[2]) + 1
}
function Highlighted(){
    return hitchedSpacesship.map(spaceship => spaceship[0].toUpperCase()).join(", ")
}
function execute(){
    let message = "Spaceships with more than 9 crew: " + crew().join(", ") + " , "
    message += "\nPlatform with coupling process: " + HitchPlataform()
    message += "\nSpaceships highlighted: " + Highlighted()
    alert(message)
}
execute()
//A função filter é usada para criar um novo array com todos os elementos de um array original que passam por um teste (ou condição) especificado em uma função
//A função findIndex é usada para encontrar o índice do primeiro elemento em um array que satisfaz uma determinada condição. Se nenhum elemento satisfizer a condição, é retornado -1. 
//A função map é usada para iterar sobre todos os elementos de um array e aplicar uma função a cada elemento, retornando um novo array com os resultados das chamadas dessa função
//A função toUpperCase converte uma string em letras maiúsculas. Ela não altera o array original, mas retorna uma nova string com todas as letras maiúsculas
//A função join é usada para juntar todos os elementos de um array em uma única string, separando cada elemento com um separador especificado. Por padrão, o separador é uma vírgula