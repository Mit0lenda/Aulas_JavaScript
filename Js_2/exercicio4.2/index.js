let Spaceship = {
 velocity: 0,
speedUp: function(accelerate){
    this.velocity += accelerate
}
}
function Accelerat(){
    let accelerate = Number(prompt("How much do you want to speed up ?"))
    Spaceship.speedUp(accelerate)
    if(Spaceship.velocity > Spaceship.maxspeed){
        alert("The maximum speed has been exceeded!" +
            "\nShip speed:" + Spaceship.velocity + "km/s" +
            "\nMaximum speed of the ship:" + Spaceship.maxspeed + "km/s"
        )
    }
}
function stop(){
    alert("Name: " + Spaceship.name + 
    "\nType: " + Spaceship.type + 
    "\nThe Velocity ship: " + Spaceship.velocity +
    "\nMax Spaceship: " + Spaceship.maxspeed)
    Spaceship.velocity = 0
}
function RegisterSpaceship(){
    Spaceship.name = prompt("What is the name of the ship ?")
    Spaceship.type = prompt("What typs of ship ?")
    Spaceship.maxspeed = Number(prompt("What is the maximum speed?(km/s)"))
}
function menu(){
    return prompt("\n1)Accelerate\n2)Stop")
}
function showMenu(){
    let option
    do {
        option = menu()
        switch(option){
            case "1":
                Accelerat()
                break;
            case "2":
                stop()
                break;
        }
    }
    while(option != "2")
}
RegisterSpaceship()
showMenu()