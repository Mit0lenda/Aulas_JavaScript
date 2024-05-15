let option = ""
function menu (){
    return prompt("Job Vacancy System:\n1)List of available vacancies\n2)Create a new vacancy\n3)View job vacancy\n4)Register a candidate for a job opening\n5)Delete a job vacancy \n6)Exit")
}
function execute(){
    do{
        let result 
        option = menu()
        switch(option){
            case "1":
                result =List()
                break;
            case "2":
                result = CreateNew()
                break;
            case "3":
                result = ViewJob()
                break;
            case "4":
                result = RegisterCandidate()
                break;
            case "5":
                result = DeleteJob()
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

}
function ViewJob(){

}
function RegisterCandidate(){

}
function DeleteJob(){

}