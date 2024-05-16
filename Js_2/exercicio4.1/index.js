let name = prompt("Whats is name of the ship ?");
let shipVelocity = 0;
let Chosenoption;
function menu(name) {
  const option = prompt(
    "Welcome to ship control " +  name +"\n1)Accelerate the ship by 5km/s\n2)Slow down by 5km/s\n3)Print on-board data\n4)Leaving the program..."
  );
  return option;
}
function execute(name) {
  let option = "";
  do {
    option = menu(name);
    switch (option) {
      case "1":
        shipVelocity=speedUp(shipVelocity,name)
        break;
      case "2":
        shipVelocity=slowdown(shipVelocity,name)
        break;
      case "3":
        onboardData(name,shipVelocity)
        break;
      case "4":
        alert("Leaving...")
        break;
      default:
        alert("Invalid Option!");
        break;
    }
  } while (option !== "4");
}
function speedUp(Accelerate,name){
    alert("The " + name + " accelerate more" + 5 + "km/s and current speed " + Accelerate)
return NewAccelerate = Accelerate + 5
}
function slowdown(Slow,name){
    if(Slow > 0 ){
        alert("The " + name + " slowed down more" + 5 + "km/s and current speed " + Slow)
        return Newslowdown = Slow - 5
    }
    else{
        alert("The Ship is at 0 Km/s")
        return Slow
    }
}
function onboardData(name,velocity){
alert("The name of the ship is " + name +"\nAnd its speed is " + velocity)
}
execute(name)