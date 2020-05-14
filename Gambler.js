console.log("Welcome to gambler simulation");

//constants
const STAKE_FOR_EVERY_DAY=100
const BET=1
const UPPER_LIMIT=STAKE_FOR_EVERY_DAY+(STAKE_FOR_EVERY_DAY * 50 /100)
const LOWER_LIMIT=STAKE_FOR_EVERY_DAY-(STAKE_FOR_EVERY_DAY* 50 /100)

//variables
cash=STAKE_FOR_EVERY_DAY

//Function to check win or loss 
function dailyGambling()
{
    while(cash>LOWER_LIMIT && cash<UPPER_LIMIT)
    {
        //Generating random no
        var randomValue= Math.random()   
        if (randomValue<0.5) 
        {
            cash=cash+BET
        }
        else 
        {
            cash=cash-BET
        }
    }
}
dailyGambling()