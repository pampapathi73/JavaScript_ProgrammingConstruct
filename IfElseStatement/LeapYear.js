readline = require("readline-sync")
let year=readline.question("Enter the Year : ");
let y4=year % 4;
if (y4 != 0 )
{
        console.log(" not a leap year");
}
else
{
        y100=year % 100;
        if ( y100 != 0 )
        console.log("a leap year") ;
        else
        {
              let  y400 = year % 400;
                if ( y400 != 0 )
                console.log(" not a leap year") ;
                else
                console.log("a leap year") ;
        }
}       
                