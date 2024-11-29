// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
  "1º Nível",
  ["2º Nível", 42, true],
  [
    ["3º Nível,1º Item", "Olá,Mundo!"],
    ["3º Nível,2º Item", "Oi Mundo!"],
  ],
  []
]
// Cada par de colchetes referencia um nível mais interno do array
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][0])
console.log(arr[2][1][1])

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1,c1","l1,c2","l1,c3","l1,c4"],
    ["l2,c1","l2,c2","l2,c3","l2,c4"],
    ["l3,c1","l3,c2","l3,c3","l3,c4"],
]
console.log(matriz)
console.table(matriz)
//Futuramente iremos ver o console.table que traz a tabela

// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for(let i = 0; i < matriz.length;i++)
    {
    for(let j = 0;j < matriz[i].length;j++)
    {
        const elemento = matriz [i][j]
        console.log("Posição: (" + i + ", " + j + ")Valor: "+ elemento)
    }
} 
const matrizArray = [
  ["arroz", "feijão", "batata"],
  ["carne", "frango", "peixe"],
  ["macarrão", "lasanha", "pizza"],
  []
];

console.log(matrizArray[0]);
console.log(matrizArray[0][2]);
console.log(matrizArray);
console.table(matrizArray);
for( let i = 0;i < matrizArray.length;i++){
  for(let j; j < matrizArray[i].length;j++){
    console.log(matrizArray[i][j]);
  }
}