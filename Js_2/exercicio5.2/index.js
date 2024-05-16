let shipVelocity = 150
function slowdown() {
  while (shipVelocity >= 0) {
    alert("Current speed: " + shipVelocity  + " km/h")
    if (shipVelocity === 10) {
        shipVelocity -= 10
       alert("Reduced speed: " + 10 + " km/h" );
    }
    else {
        if (shipVelocity === 0) {
             alert("Ship stopped.Doors can be opened.")
             break; 
        }
        else {
            shipVelocity -= 20
             alert("Reduced speed: " + 20 + " km/h")
        }
    }
    }
  }
slowdown()
