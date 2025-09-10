/* Find number of pairs in an array which has the sum provided as a parameter
For example:
const arr1 = [4, 2, 5, 6, 8, 1];
const sum = 6;
numberOfPairs(arr1, sum);
// Pais that matches are [4, 2] => 6. [5, 1] => 6
So output 2*/

/*Logic: The function takes an array and a target sum, then finds all unique pairs of elements whose sum matches the target. 
It validates the input and uses nested loops to check every possible pair.
When a matching pair is found, it’s counted and stored.
The final count represents the total number of valid pairs
*/

function numberOfPairs(arr, targetSum) {
    // Edge case: Check if input is a valid array
  if (!Array.isArray(arr)) {
    console.error("Input must be an array.");
    return false;
  }

  // Edge case1:Check if array has fewer than 2 elements
  if (arr.length < 2) {
    return false; // No pairs possible
  }

  // Edge case2:Check if targetSum is a number
  if (typeof targetSum !== "number") {
    console.error("Target sum must be a number.");
    return false;
  }

  let count = 0;
let a=[];

  for (let i = 0; i < arr.length; i++) {

    for (let j = i+1 ; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
         a.push([arr[i], arr[j]]);
        count++
      }
    }
  }
  console.log(a)
  return count;
}

// Example usage
const arr1 = [4, 2, 5, 6, 8, 1];
const sum = 6;
console.log(numberOfPairs(arr1, sum)); // Output: 2