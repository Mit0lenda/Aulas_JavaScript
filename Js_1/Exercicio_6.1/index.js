const palavra =prompt("What is the word ?")
let palavrainvertida = ""
for( let i = palavra.length - 1 ; i >= 0 ; i--)
{
    palavrainvertida += palavra[i]
}
if(palavra === palavrainvertida){
    alert(palavra + "é um palíndromo!")
}
else{
    alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavrainvertida)
}
    