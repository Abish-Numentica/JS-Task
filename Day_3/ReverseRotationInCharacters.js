/*. Implement a function to reverse rotate the characters in a string by a given number of positions.
For example:
reverseRotate("unar", 2)   // "arun"
reverseRotate("llohe", 3)  // "hello"*/


function reverseRotate(inputString, rotateBy) {
  console.log("The Input String is: " + inputString);
  console.log("The Number of Positions to Reverse Rotate is: " + rotateBy);

  // Edge Case 1: Input must be a string
  if (typeof inputString !== 'string') {
    console.error("Error: Input must be a string.");
    return false;
  }

  // Edge Case 2: Rotation must be a non-negative integer
  if (typeof rotateBy !== 'number' || !Number.isInteger(rotateBy) || rotateBy < 0) {
    console.error("Error: Rotation value must be a non-negative integer.");
    return false;
  }

  // Edge Case 3: Empty string
  if (inputString.length === 0) {
    console.error("Error: Input string is empty.");
    return false;
  }


  let length = inputString.length;
  let shift = rotateBy % length;

  // Edge Case 4: No rotation needed
  if (shift === 0) {
    console.log("The Reverse Rotated String is: " + inputString);
    return inputString;
  }

  let result = "";
  for (let i = rotateBy; i < length; i++) {
    result += inputString[i];
  }
  for (let i = 0; i < rotateBy; i++) {
    result += inputString[i];
  }
  return result;
}



console.log(reverseRotate("unar", 2));     // Output: "arun"
console.log(reverseRotate("llohe", 3));    // Output: "hello"
console.log(reverseRotate("rotate", 0));   // Output: "rotate"