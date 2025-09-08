/*. Group multiples from 1 to 10
const inputArr = [34, 12, 10, 15, 7, 21, 81]
Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }]*/



function groupMultiples(inputFromUser) {
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


  for (let divisor = 1; divisor <= 10; divisor++) {
    let group = [];


    for (let i = 0; i < inputFromUser.length; i++) {
      let currentValue = inputFromUser[i];

      if (typeof currentValue !== 'number') {
        console.error(`Skipping non-number value at index ${i}:`, currentValue);
        continue;
      }

      if (currentValue % divisor === 0) {
        group.push(currentValue);
      }
    }

    
    if (group.length > 0) {
      let groupObject = {};
      groupObject[divisor] = group;
      outputData.push(groupObject);
    }
  }

  console.log("Final Grouped Output:", outputData);
  return outputData;
}


groupMultiples([34, 12, 10, 15, 7, 21, 81]);