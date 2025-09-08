/*checkSpaces(“arun”) output false;
checkSpaces(“user arun”) output true;*/

function checkSpaces(inputFromUser) {
  // Edge Case 1: Non-string input
  if (typeof inputFromUser !== "string") {
    console.error("Invalid input: not a string");
    return false;
  }

  // Edge Case 2: Empty string
  if (inputFromUser.length === 0) {
    console.error("Empty Sting");
    return false;
  }
//  Edge Case 3: Check for leading or trailing spaces
  if (inputFromUser .startsWith(" ") || inputFromUser .endsWith(" ")) {
    console.log("The Output for Checking the Spaces in the Given Input is: false");
    return false;
  }
  //If the trailing and leading are to be considered true. We can omit the Edge Case 3
  let outputData = false;
  for (let i = 0; i < inputFromUser.length; i++) {
    if (inputFromUser[i] === " ") {
      outputData = true;
      break; // no need to check if a space is found.
    }
  }

  console.log("The Output for Checking the Spaces in the Given Input is: "+outputData);
  return true
}



checkSpaces("arun");            // false
checkSpaces("user arun");       // true
checkSpaces("");                // false (empty string)
checkSpaces("   ");             // true (only spaces)
checkSpaces("arun ");           // true (trailing space)
checkSpaces(" arun");           // true (leading space)
checkSpaces("user\tarun");      // false (tab, not space)
checkSpaces("user\narun");      // false (newline, not space)
checkSpaces(12345);             // Invalid input
checkSpaces(null);              // Invalid input
checkSpaces(undefined);         // Invalid input
