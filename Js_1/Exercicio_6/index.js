const number = prompt("Put a number")
let i =0
let size = ""
let finish = 0 
for(i=0;i<=20;i++)
{
    finish = number * i
    size += "-" + number + "X" + i + "="+ finish +"\n"
}
alert("Tabuada do " + number + "\n" + size)