const media = (...numbers) => {
    return numbers.reduce((accum, num) => accum + num, 0) / numbers.length;
};
console.log(media(5, 5, 5)); // Resultado: 5

const mediaPonderada = (...numbers) => {
    return (
        numbers.reduce((accum, item) => accum + item.nota * item.peso, 0) /
        numbers.reduce((accum, item) => accum + item.peso, 0)
    );
};
console.log(
    mediaPonderada(
        { nota: 6, peso: 2 },
        { nota: 6, peso: 2 },
        { nota: 6, peso: 2 }
    )
); // Resultado: 6

const mediaMediana = (...numbers) => {
    const orderedNumbers = numbers.sort((a, b) => a - b);
    const middle = Math.floor(orderedNumbers.length / 2);

    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]; // Número ímpar
    }

    // Número par: calcular a média dos dois do meio
    const firstMedian = orderedNumbers[middle - 1];
    const secondMedian = orderedNumbers[middle];
    return (firstMedian + secondMedian) / 2;
};

console.log(`Mediana: ${mediaMediana(1, 2, 3, 4, 5, 6, 7, 8, 9)}`); // Resultado: 5
console.log(`Mediana: ${mediaMediana(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`); // Resultado: 5.5

const mediaModa = (...numbers) => {
    const quantities = numbers.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1; // Conta as ocorrências de cada número
        return map;
    }, {});

    const sorted = Object.entries(quantities).sort((a, b) => b[1] - a[1]); // Ordena pelo maior número de ocorrências
    return Number(sorted[0][0]); // Retorna o número mais frequente
};

console.log(mediaModa(1, 2, 3, 2, 5, 6, 7, 5, 5, 1)); // Resultado: 5
