const towns = ['São Paulo', 'Rio de Janeiro', 'Sapucaia', 'Belo Horizonte']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('São Leopoldo')

console.log({ towns , townsCopy})

const townsClone = [...towns]
townsClone.push('Porto Alegre')

console.log({towns , townsCopy , townsClone})

const townsObj = { ... towns}
const townsObjClone = { ... townsObj}

townsObjClone.test = 'Teste'

console.log({townsObj , townsObjClone})
