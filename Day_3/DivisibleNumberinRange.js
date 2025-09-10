/* Check if a number is divisible by all numbers in a given range.
For example:
isDivisibleInRange([1, 5], 60) // true  (60 is divisible by 1,2,3,4,5)
isDivisibleInRange([1, 5], 15) // false (15 is not divisible by 4)
isDivisibleInRange([2, 6], 120) // true  (120 % 2,3,4,5,6 === 0)*/

/*Logic: The function checks whether a given number is divisible by every integer within a specified range. 
It first validates the input types and ensures the range is properly ordered. 
Then, using a loop, it tests divisibility for each number in the range. 
If any number fails the check, it returns false; otherwise, it confirms the number is divisible by all values in the range.
*/

function isDivisibleInRange(rangeArray, targetNumber) {
  console.log("The Range Provided is: " + rangeArray);
  console.log("The Target Number to Check is: " + targetNumber);

  // Edge Case 1: Check if rangeArray is a valid array
  if (!Array.isArray(rangeArray) || rangeArray.length !== 2) {
    console.error("Error: Range must be an array with exactly two numbers.");
    return false;
  }

  // Edge Case 2: Check if both elements in rangeArray are integers
  if (
    typeof rangeArray[0] !== 'number' ||
    typeof rangeArray[1] !== 'number' ||
    !Number.isInteger(rangeArray[0]) ||
    !Number.isInteger(rangeArray[1])
  ) {
    console.error("Error: Range values must be integers.");
    return false;
  }

  // Edge Case 3: Check if targetNumber is a valid positive number
  if (typeof targetNumber !== 'number' || targetNumber <= 0) {
    console.error("Error: Target number must be a positive number.");
    return false;
  }

  
  let start = rangeArray[0]
  let end = rangeArray[1]
   if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }


  for (let i = start; i <= end; i++) {
    if (targetNumber % i !== 0) {    
     console.log("false");
      return false;
    }
  }
   console.log("true");
  return true;
}


isDivisibleInRange([1, 5], 60);   // true
isDivisibleInRange([1, 5], 15);   // false
isDivisibleInRange([2, 6], 120);  // true
isDivisibleInRange([6, 2], 120);  // true (handles reversed range)
isDivisibleInRange([1, 1], 1);    // true
isDivisibleInRange([1, 5], -60);  // false
isDivisibleInRange("invalid", 60); // false