/*Convert an array of key-value pairs into an object.
toObject([["name", "Arun"], ["age", 39]]);
// Output: { name: "Arun", age: 39 } */

/*Logic: The function takes an array of key-value pairs and converts it into an object.
It first checks for valid input and skips any invalid pairs.
Then, using a loop, it assigns each key-value pair to the output object, building a clean structure from the array.
*/
function toObject(inputFromUser) {
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

  let outputData = {};

  for (let i = 0; i < inputFromUser.length; i++) {
    let pair = inputFromUser[i];

   
    if (!Array.isArray(pair) || pair.length !== 2) {
      console.error(`Skipping invalid pair at index ${i}:`, pair);
      continue;
    }

    let key = pair[0];
    let value = pair[1];

    outputData[key] = value;
  }

  console.log("Final Converted Object:", outputData);
  return outputData;
}


toObject([["name", "Arun"], ["age", 39]]);