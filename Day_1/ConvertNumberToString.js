/*Convert number to strings
for example: convertNumberToString(1)
output “one”
convertNumberToString(98)
output “nineeight”*/
/*Logic: Create an Object with each key as Integer with value as string representation of the Number.
Using loop iterate each element and convert to a seperate value and store it in an array.
Each value in array using object value assign the value respective of key. So the Integer is converted to String*/

function convertNumberToString(inputFromUser) {
    // Edge Case 1: Input is not a number
    if (typeof inputFromUser !== 'number' || isNaN(inputFromUser)) {
        console.error("Input must be a valid number");
        return false;
    }

    // Edge Case 2: Handle negative numbers
    if (inputFromUser < 0) {
        console.error("Input must be a valid positive integer.");
        return false;
    }

    // Edge Case 3: Handle non-integer numbers
    if (!Number.isInteger(inputFromUser)) {
        console.error("Not an Number");;
       return false;
    }

    // Mapping of digits to their string representations
    const numberToStringData= {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };

     // Convert the number to a string and then to an array of digits
    //const digits = inputFromUser.toString().split('');
const digits=[];
if (inputFromUser === 0) {
        console.log("zero");
        return true;
    }

while (inputFromUser > 0) {
  let digit = inputFromUser % 10;
  digits.unshift(digit);
  inputFromUser = Math.floor(inputFromUser / 10);
}

    let stringRepresentation = '';
    
    for (let i = 0; i < digits.length; i++) {
        stringRepresentation += numberToStringData[digits[i]];
    }
    console.log(stringRepresentation);
    return true;
}

convertNumberToString(98); 
convertNumberToString(0); 
convertNumberToString("0"); 
convertNumberToString(-25); 
convertNumberToString("abish"); 
convertNumberToString([1,2,3]); 
convertNumberToString("1@3"); 