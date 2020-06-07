var a,b;
a=Math.random()*10
b=Math.floor(a)
guess=+prompt("Guess the number between 1 to 10:")
// document.write(b)
for(c=1;c<=b;c++){
    if(guess<b){
        alert("Guess Higer Value to Close enough to the correct answer")
        guess=+prompt("Guess the number between 1 to 10:")
    } 
    else{
        alert("Guess Lower value to Close enough to the correct answer")
        guess=+prompt("Guess the number between 1 to 10:")
    }
}
document.write("Bingo! You Guesses the Correct number")