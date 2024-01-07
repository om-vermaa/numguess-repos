console.log("Hello Mr Verma");
console.log("guess game");
let GameNumber = 34;
let input = prompt("try to guess the correct number");
let i;

for (let j = 6; j >= 2; j--) {
    if (input == GameNumber) {
        input = prompt("congratulations you guessed correct", input);
        break;
    }
    
    else  {
        console.log("attempts remaining", j - 2);
        input = prompt("not this one,guess any other number");
      }
    
}

    input = prompt("you lost, better luck next time");








