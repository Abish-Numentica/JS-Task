/* Find the common numbers in two arrays
const arr1 = [3, 45, 42, 11, 34];
const arr2 = [35, -7, 87, 11, 1, 45]
findCommon(arr1, arr2)
Output = [11, 45]*/

/*Logic: The function compares two arrays and finds numbers that exist in both. 
It first checks for valid input and ensures all elements are numeric. 
Then, using nested loops, it checks each value from the first array against the second.
If a match is found and hasn't already been added, it's pushed into the result.
This ensures only unique common values are returned.
*/

function findCommon(arr1, arr2) {
  console.log("The First Array is: " + arr1);
  console.log("The Second Array is: " + arr2);

  let commonElements = [];

  // Edge Case 1: Check if both inputs are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error("Error: Both inputs must be arrays.");
    return false;
  }

  // Edge Case 2: Check for empty arrays
  if (arr1.length === 0 || arr2.length === 0) {
    console.error("Error: One or both arrays are empty.");
    return false;
  }

  // Edge Case 3: Check for non-numeric values
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== 'number') {
      console.error(`Error: Non-numeric value in arr1 at index ${i}: ${arr1[i]}`);
      return false;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (typeof arr2[j] !== 'number') {
      console.error(`Error: Non-numeric value in arr2 at index ${j}: ${arr2[j]}`);
      return false;
    }
  }

 
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {

        let alreadyExists = false;
        for (let k = 0; k < commonElements.length; k++) {
          if (commonElements[k] === arr1[i]) {
            alreadyExists = true;
            break;
          }
        }
        if (!alreadyExists) {
          commonElements.push(arr1[i]);
        }
      }
    }
  }

  console.log("The Common Elements in Both Arrays Are: " + commonElements);
  return true;
}


findCommon([3, 45, 42, 11, 34], [35, -7, 87, 11, 1, 45]); // Output: [11, 45]
findCommon([1, 2, 3], [4, 5, 6]);                         // Output: []
findCommon([], [1, 2, 3]);                                // Error: One or both arrays are empty
findCommon("notArray", [1, 2]);                           // Error: Both inputs must be arrays
