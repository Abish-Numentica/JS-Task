/*Find the missing number / numbers
----------------------------------------
Example: Given an array of numbers in random order, find the missing numbers
[7, 10, 12, 9] // output [8, 11] since these are the numbers missing in 7, 9, 10, 12
Note: The numbers will be given as input in any order.*/

function findMissingNumbers(inputArray) {
  console.log("The Input Array is: " + inputArray);

  let missingNumbers = [];

  // Edge Case 1: Check if input is an array
  if (!Array.isArray(inputArray)) {
    console.error("Error: Input must be an array.");
    return false;
  }

  // Edge Case 2: Check for empty array
  if (inputArray.length === 0) {
    console.error("Error: Input array is empty.");
    return false;
  }

  // Edge Case 3: Check for non-numeric values
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] !== 'number' || !Number.isInteger(inputArray[i])) {
      console.error(`Error: Non-integer value at index ${i}: ${inputArray[i]}`);
      return false;
    }
  }

  let min = inputArray[0];
  let max = inputArray[0];

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] < min) {
      min = inputArray[i];
    }
    if (inputArray[i] > max) {
      max = inputArray[i];
    }
  }


  for (let num = min; num <= max; num++) {
    let found = false;
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] === num) {
        found = true;
        break;
      }
    }
    if (!found) {
      missingNumbers.push(num);
    }
  }

  console.log("The Missing Numbers Between " + min + " and " + max + " Are: " + missingNumbers);
  return true;
}

// Test Cases
findMissingNumbers([7, 10, 12, 9]);     // Output: [8, 11]
findMissingNumbers([1, 2, 3, 4, 5]);    // Output: []
findMissingNumbers([100, 102, 105]);    // Output: [101, 103, 104]
findMissingNumbers([]);                // Error: Input array is empty
findMissingNumbers("invalid");         // Error: Input must be an array
findMissingNumbers([1, "two", 3]);     // Error: Non-integer value