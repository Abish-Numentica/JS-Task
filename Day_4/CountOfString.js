/*From an array of strings, return an object with the count of each string.
count(["a", "b", "a", "c", "b", "a"]);
// Output: { a: 3, b: 2, c: 1 }*/

/*Logic: The function takes an array of strings and counts how many times each string appears.
It first validates the input and skips any non-string values. 
Then, using a loop, it builds an object where each key is a string from the array and its value is the count of occurrences.
*/

function countStrings(inputFromUser) {
  console.log("The Given Array is:", inputFromUser);

  // Edge Case 1: Input is not an array
  if (!Array.isArray(inputFromUser)) {
    console.error("Error: Input must be an array.");
    return false;
  }

  // Edge Case 2: Empty array
  if (inputFromUser.length === 0) {
    console.warn("Warning: Empty array provided.");
    return {};
  }

  // Edge Case 3: Non-string elements
  let outputData = {};
  for (let i = 0; i < inputFromUser.length; i++) {
    const item = inputFromUser[i];

    if (typeof item !== 'string') {
      console.error(`Skipping non-string value at index ${i}:`, item);
      continue;
    }

    if (outputData[item]) {
      outputData[item] += 1;
    } else {
      outputData[item] = 1;
    }
  }

  console.log("Final Count Output:", outputData);
  return outputData;
}
countStrings(["a", "b", "a", "c", "b", "a"]);