var num=50;
var guess=prompt("Guess a number between 1-100");
if(guess>50)
{
	alert("It's too high");
}
else if(guess<50)
{
	alert("It's too low");
}
else{
	alert("You guessed it right!!! Congratulations :)");
}