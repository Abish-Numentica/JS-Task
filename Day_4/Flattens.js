/*Write a function that flattens a nested array.Find
For example:
flatten([1, 2, [3, 4]]);
output: [1,2,3,4]*/


function flatten(inputFromUser) {
  console.log("The Given Array is:", inputFromUser);

  // Edge Case 1: Input is not an array
  if (!Array.isArray(inputFromUser)) {
    console.error("Error: Input must be an array.");
    return false;
  }

  // Edge Case 2: Empty array
  if (inputFromUser.length === 0) {
    console.warn("Warning: Empty array provided.");
    return [];
  }

  let outputData = [];

  for (let i = 0; i < inputFromUser.length; i++) {
    let currentValue = inputFromUser[i];

   
    if (Array.isArray(currentValue)) {
      console.log(`Nested array found at index ${i}:`, currentValue);

      
      for (let j = 0; j < currentValue.length; j++) {
        let nestedItem = currentValue[j];
        outputData.push(nestedItem);
      }
    } else {
 
      outputData.push(currentValue);
    }
  }

  console.log("Final Flattened Output:", outputData);
  return outputData;
}


flatten([1, 2, [3, 4]]);