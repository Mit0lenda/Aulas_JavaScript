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

}
function CreateNew(){
const NewVacancy = {}
NewVacancy.name =prompt("\nWhat is the name of the vacancy ?")
NewVacancy.description =prompt("\nWhat is the description ?")
NewVacancy.deadline = prompt("\nWhat is the deadline ?")
const confirm = prompt("Save this options ?\n"
+ ("\nName of the vacancy: ") + NewVacancy.name 
+ ("\nThe Description: ") + NewVacancy.description
+ ("\nThe Deadline: ") + NewVacancy.deadline
)
if(confirm === "yes" || confirm ==="Yes"){
    return vacancies.push(NewVacancy)
}
else{
    alert("Returning to the menu!")
    return
}
}
function ViewJob(){


}
function RegisterCandidate(){

}
function DeleteJob(){

}
execute()
console.log(vacancies)