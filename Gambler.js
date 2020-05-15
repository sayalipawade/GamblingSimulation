console.log("Welcome to gambler simulation")

/**
 * constants
 */
const STAKE_FOR_EVERY_DAY=100
const BET=1
const UPPER_LIMIT=STAKE_FOR_EVERY_DAY+(STAKE_FOR_EVERY_DAY * 50 /100)
const LOWER_LIMIT=STAKE_FOR_EVERY_DAY-(STAKE_FOR_EVERY_DAY* 50 /100)
const TOTAL_DAYS=20

/**
 * variables
 */
var cash=0
var winningCash=0
var totalAmount=0
var sumOfAmount={}
var lucky_day=0

/**
 * Function to calculate daily gambling
 */
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

/**
 * Function to calculate monthly gambling
 */
function monthlyGambling()
{
    for(day=1;day<=TOTAL_DAYS;day++)
    {
        var cash=dailyGambling()
        sumOfAmount[day]=cash
        totalAmount=totalAmount+sumOfAmount[day];
        console.log("Amount of day:"+sumOfAmount[day])
    }
    if(totalAmount>0)
    {
        console.log("Total amount of 20 days:"+totalAmount)
    }
    else
    {
        console.log("Total amount of 20 days:"+totalAmount)
    }
    sort()
}

/**
 * function for sorting the amount
 */
function sort()
 {
    //Creating array of amount
    var amount = Object.keys(sumOfAmount).map(function(key)
     {
        return [key,sumOfAmount[key]];
     });
  
    //Sort the array based on the second element
    amount.sort(function(first, second)
     {
        return second[1] - first[1];
     });
  
    //Luckiest Day
    console.log("Luckiest Day : ")
    console.log(amount.slice(0,1));

    //Unluckiest Day
    console.log("Unluckiest Day : ")
    console.log(amount.slice(amount.length-2, amount.length-1));
}

/**
 * function to checking gambler playing for next month or not
 */
function playNextMonth() 
{
    monthlyGambling()
    if(totalAmount>0)
    {
        console.log("Gambler playing for next month");
    }
    else
    {
        console.log("Stop gambling");
    }
}
playNextMonth()
 
   