let option = ""
const vacancies = []
function menu (){
    return prompt("Job Vacancy System:\n1)List of available vacancies\n2)Create a new vacancy\n3)View job vacancy\n4)Register a candidate for a job opening\n5)Delete a job vacancy \n6)Exit")
}
function execute(){
    do{ 
        option = menu()
        switch(option){
            case "1":
                List()
                break;
            case "2":
                CreateNew()
                break;
            case "3":
                ViewJob()
                break;
            case "4":
                RegisterCandidate()
                break;
            case "5":
                DeleteJob()
                break;
            case "6":
                alert("Leaving...")
                break;
            default:
                alert("Invalid Option")
                break;
        }
    }
    while(option !== "6")
}
function List(){
    let tableContent = "Vacancy    |   Name    |   Number of Candidates\n"
for(let i = 0 ; i < vacancies.length ; i++){
    tableContent += ( i + 1) + "               |   " +
    vacancies[i].name + "        |   " +
    vacancies[i].nameCandidates.length + "\n"
}
alert(tableContent)
}
function CreateNew(){
const NewVacancy = {}
NewVacancy.nameCandidates = []
NewVacancy.name =prompt("\nWhat is the name of the vacancy ?")
NewVacancy.description =prompt("\nWhat is the description ?")
NewVacancy.deadline = parseFloat(prompt("\nWhat is the deadline ?"))
NewVacancy.candidates = 0
const confirma = confirm("Save this options ?\n"
+ ("\nName of the vacancy: ") + NewVacancy.name 
+ ("\nThe Description: ") + NewVacancy.description
+ ("\nThe Deadline: ") + NewVacancy.deadline
)
if(confirma){
    return vacancies.push(NewVacancy)
}
else{
    alert("Returning to the menu!")
    return
}
}
function ViewJob() {
    const index = parseInt(prompt("Give me index: ")) - 1
    const inde = index
    if (index >= 0 && index < vacancies.length) {
        alert(
            "\nIndex: " + (inde + 1) +
            "\nName of the vacancy: " + vacancies[index].name +
            "\nThe Description: " + vacancies[index].description +
            "\nThe Deadline: " + vacancies[index].deadline +
            "\nNumber of Candidates: " + vacancies[index].candidates +
            "\nName of Candidates: " + vacancies[index].nameCandidates
        )
    } else {
        alert("Invalid index. Please try again.")
    }
}
function RegisterCandidate(){
const index=parseInt(prompt("what is the vacantion rate?")) -1
const candidateName = prompt("What's your name ? ")
vacancies[index].nameCandidates.push(candidateName)
vacancies[index].candidates++
const confirma = confirm("Is this vacancy ?\n"
    +"\nName of the vacancy: " + vacancies[index].name
    +"\nThe Description: " + vacancies[index].description
    +"\nThe Deadline: " + vacancies[index].deadline
)
if(confirma){
    return vacancies.nameCandidates
} 
else
{
    alert("Returning to the menu!")
    return
}
}
function DeleteJob(){
    const index=parseInt(prompt("what is the vacantion rate?")) -1
    const inde = index
    if(index >= 0 && index < vacancies.length){
        const confirma = confirm("Are you sure?\n" +
        "\nIndex: " + (inde + 1) +
        "\nName of the vacancy: " + vacancies[index].name +
        "\nThe Description: " + vacancies[index].description +
        "\nThe Deadline: " + vacancies[index].deadline +
        "\nNumber of Candidates: " + vacancies[index].candidates
    )
    if(confirma){
        vacancies.splice(index,1)
        for(let i = 0; i < vacancies.length;i++){
           vacancies[i].index = i + 1 
        }
        alert("Vacancy deleted successfully!")
    }
    else{
        alert("Returning to the menu!")
        return
    }}
    else{
        alert("Invalid index.Please try again!")
    }
}
execute()
console.log(vacancies)