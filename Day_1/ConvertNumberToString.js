/*Convert number to strings
for example: convertNumberToString(1)
output “one”
convertNumberToString(98)
output “nineeight”*/

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
    const digits = inputFromUser.toString().split('');
    
    // Initialize an empty string for the result
    let stringRepresentation = '';
    // Convert each digit to its corresponding string representation using a for loop
    for (let i = 0; i < digits.length; i++) {
        stringRepresentation += numberToStringData[digits[i]];
    }
    console.log(stringRepresentation);
    return true;}



convertNumberToString(98); 
convertNumberToString(0); 
convertNumberToString("0"); 
convertNumberToString(-25); 
convertNumberToString("abish"); 
convertNumberToString([1,2,3]); 
convertNumberToString("1@3"); 