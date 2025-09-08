/*Find the numbers that are present in one array but not in the other.
For example:
const arr1 = [3, 45, 42, 11, 34];
const arr2 = [35, -7, 87, 11, 1, 45];
findDifference(arr1, arr2)
// Output: [3, 42, 34, 35, -7, 87, 1]*/

function findDifference(arr1, arr2) {
  console.log("The First Array is: " + arr1);
  console.log("The Second Array is: " + arr2);

  let differenceArray = [];

  // Edge Case 1: Check if both inputs are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error("Error: Both inputs must be arrays.");
    return false;
  }

  // Edge Case 2: Check for empty arrays
  if (arr1.length === 0 && arr2.length === 0) {
    console.error("Error: Both arrays are empty.");
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
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      differenceArray.push(arr1[i]);
    }
  }

 
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      differenceArray.push(arr2[i]);
    }
  }

  console.log("The Numbers Present in One Array but Not in the Other Are: " + differenceArray);
  return true;
}

findDifference([3, 45, 42, 11, 34], [35, -7, 87, 11, 1, 45]); // Output: [3, 42, 34, 35, -7, 87, 1]
findDifference([1, 2, 3], [3, 4, 5]);                         // Output: [1, 2, 4, 5]
findDifference([], [1, 2]);                                   // Output: [1, 2]
findDifference([1, 2], []);                                   // Output: [1, 2]
findDifference([], []);                                       // Error: Both arrays are empty
findDifference([1, 'a', 3], [3, 4]);                          // Error: Non-numeric value in arr1 at index 1: a
findDifference([1, 2, 3], [3, null]);                          // Error: Non-numeric value in arr2 at index 1: null
findDifference("invalid", [1, 2]);                             // Error: Both inputs must be arrays
findDifference([1, 2], "invalid");                             // Error: Both inputs must be arrays
findDifference("invalid", "invalid");                         // Error: Both inputs must be arrays  
