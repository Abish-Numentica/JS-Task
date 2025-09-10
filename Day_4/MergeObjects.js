/*Merge objects with array values
merge(
  { fruits: ["apple"], veggies: ["carrot"] },
  { fruits: ["banana"], drinks: ["water"] }
);
// Output: { fruits: ["apple", "banana"], veggies: ["carrot"], drinks: ["water"] }
*/

/*Logic: The function takes two objects with array values and merges them into a single object. 
It checks for valid input and loops through each key in both objects. If a key exists in both, their arrays are combined; 
if a key is unique to one object, its array is added directly. This ensures all array values are grouped correctly under their respective keys.
*/

function merge(inputFromUser1, inputFromUser2) {
  console.log("Input Object 1:", inputFromUser1);
  console.log("Input Object 2:", inputFromUser2);

  // Edge Case 1: Inputs must be objects
  if (typeof inputFromUser1 !== 'object' || typeof inputFromUser2 !== 'object') {
    console.error("Error: Both inputs must be objects.");
    return false;
  }

  let outputData = {};

  // Merge first object
  for (let key1 in inputFromUser1) {
    let valueArray1 = inputFromUser1[key1];

    if (!Array.isArray(valueArray1)) {
      console.error(`Skipping non-array value for key '${key1}':`, valueArray1);
      continue;
    }

    outputData[key1] = [];

    for (let i = 0; i < valueArray1.length; i++) {
      outputData[key1].push(valueArray1[i]);
    }
  }

 
  for (let key2 in inputFromUser2) {
    let valueArray2 = inputFromUser2[key2];

    if (!Array.isArray(valueArray2)) {
      console.error(`Skipping non-array value for key '${key2}':`, valueArray2);
      continue;
    }

    if (outputData[key2]) {
      for (let j = 0; j < valueArray2.length; j++) {
        outputData[key2].push(valueArray2[j]);
      }
    } else {
      outputData[key2] = [];
      for (let j = 0; j < valueArray2.length; j++) {
        outputData[key2].push(valueArray2[j]);
      }
    }
  }

  console.log("Final Merged Output:", outputData);
  return outputData;
}



merge(
  { fruits: ["apple"], veggies: ["carrot"] },
  { fruits: ["banana"], drinks: ["water"] }
);
