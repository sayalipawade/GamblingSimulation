console.log("Welcome to gambler simulation")

//constants
const STAKE_FOR_EVERY_DAY=100
const BET=1
const UPPER_LIMIT=STAKE_FOR_EVERY_DAY+(STAKE_FOR_EVERY_DAY * 50 /100)
const LOWER_LIMIT=STAKE_FOR_EVERY_DAY-(STAKE_FOR_EVERY_DAY* 50 /100)
const TOTAL_DAYS=20

//variables
var cash=0
var winningCash=0
var totalAmount=0
var dictionary={}

//Function to calculate daily gambling
function dailyGambling()
{
    winningCash=0
    cash=STAKE_FOR_EVERY_DAY
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
    winningCash=cash-STAKE_FOR_EVERY_DAY
    return winningCash
}

//Function to calculate monthly gambling
function monthlyGambling()
{
    for(day=1;day<=TOTAL_DAYS;day++)
    {
        var cash=dailyGambling()
        dictionary[day]=cash
        totalAmount=totalAmount+dictionary[day];
        console.log(dictionary[day])
    }
    if(totalAmount>0)
    {
        console.log("Total amount of 20 days:"+totalAmount)
    }
    else
    {
        console.log("Total amount of 20 days:"+totalAmount)
    }
}
monthlyGambling()