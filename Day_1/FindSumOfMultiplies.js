/*Find sum of multiples
For example
findSum(5, 5) should return 5+10+15+20+25=75
findSum(8, 3) should return 8+16+24=48
*/
/*Logic: 2 Inputs one is Multiplier and Multiply. So through loop iteration use the formula n+n*i=>n(1+i).
Use Number function to convert string represented number as considered as an Integer and get output */


function sumOfMultiplies(getinputfromuser,inputMultplier){

    // Edge Case 1: Empty array
    if (getinputfromuser.length === 0) {
        console.error("Empty array");
        return false;
    }
    // Edge Case 2: Array with non-numeric values
    if (getinputfromuser < 0 || inputMultplier < 0) {
        console.error("Values should be a positive integer.");
        return false;
    }
     // Edge Case 3: Entered Value has Zero
    if (getinputfromuser === 0 || inputMultplier===0) {
        console.error("Entered Value Has Zero");
        return false;;
    }
     // Edge Case 4: Non Numerical Values
    if(isNaN(getinputfromuser) || isNaN(inputMultplier)){
        console.error("Non Numerical Values are Present");
        return false;;
    }
let temporryVariable=0;
for(let i=0;i<inputMultplier;i++)
{
 {
    temporryVariable+=Number(getinputfromuser)+(Number(getinputfromuser)*i);   
 }
}
console.log(`The sum of Multiplies of Given Input(${getinputfromuser},${inputMultplier}) :+ ${temporryVariable}`);
 return true;
}

sumOfMultiplies(5,5);
sumOfMultiplies(8,3);
sumOfMultiplies(5,0);
sumOfMultiplies(0,5);
sumOfMultiplies(5,-3);
sumOfMultiplies("5",3);
sumOfMultiplies("@",3);


