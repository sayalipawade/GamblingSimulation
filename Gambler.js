console.log("Welcome to gambler simulation");

//variables
const STAKE_FOR_EVERY_DAY=100
const BET=1

//variables
cash=STAKE_FOR_EVERY_DAY

//Generating random no
var randomValue= Math.random()

//Function to check win or loss 
function dailyGambling()
{
    if (randomValue<0.5) 
    {
		console.log("Gambler win")
        cash=cash+BET
    }
    else 
    {
		console.log("Gambler Lose")
        cash=cash-BET
    }
}
dailyGambling()