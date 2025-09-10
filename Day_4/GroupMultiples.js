/*Group multiples from 1 to 10
const inputArr = [34, 12, 10, 15, 7, 21, 81]
Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }]*/

/*Logic: The function takes an array of numbers and groups them based on their divisibility by numbers from 1 to 10. 
It validates the input and loops through each divisor, collecting numbers that are divisible by it.
Each group is stored as an object and added to the final output array
*/

function groupMultiples(inputFromUser) {
  // Edge Case 1: Input is not an array
  if (!Array.isArray(inputFromUser)) {
    console.error("Invalid input: must be an array of numbers");
    return false;
  }

  // Edge Case 2: Empty array
  if (inputFromUser.length === 0) {
    console.log("Input array is empty");
    return false;
  }


  let outputData = [];

  for (let i = 1; i <= 10; i++) {
    let group = [];

    for (let j = 0; j < inputFromUser.length; j++) {
      let current = inputFromUser[j];

      // Edge Case 3: Non-numeric element
      if (typeof current !== "number") {
        console.error("Invalid element at index", j, ": must be a number");
        continue;
      }

    
      if (current % i === 0) {
        group.push(current);
      }
    }


    if (group.length > 0) {
      let obj = {};
      obj[i] = group;
      outputData.push(obj);
    }
  }


  console.log("Grouped multiples:", outputData);
  return outputData;
}

groupMultiples([34, 12, 10, 15, 7, 21, 81]);