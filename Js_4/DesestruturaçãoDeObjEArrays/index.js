const person = {
    name: "Nicollas",
    job: "Developer",
    parents: ["Maria", "João"]
}

const name = person.name

const { job, parents } = person

console.log(name , job , parents)

const [father, mother] = parents

console.log(father, mother)

function createUser({name,job,parents}){
    const id = Math.floor(Math.random()*999)
    return {
        id,
        name,
        job,
        parents
    }
}

const nico = createUser(person)
console.log(nico)