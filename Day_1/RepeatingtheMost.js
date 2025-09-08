/*Find the characters that are repeating the most simaltaneously
For example:
charRepeating(“traaainngfornewbie”);
Output: a
// since a has more repeating simaltaneously
*/

function charRepeating(inputFromUser) {
  console.log("The Input is:", inputFromUser);

  // Edge Case 1: Input is not a string
  if (typeof inputFromUser !== 'string') {
    console.error("Error: Input must be a string.");
    return false;
  }

  // Edge Case 2: Empty string
  if (inputFromUser.length === 0) {
    console.error("Error: Input must be a non-empty string.");
    return false;
  }

  let maxChar = null;
  let maxCount = 1;
  let currentChar = inputFromUser[0];
  let currentCount = 1;

  for (let i = 1; i < inputFromUser.length; i++) {
    if (inputFromUser[i] === currentChar) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChar = currentChar;
      }
      currentChar = inputFromUser[i];
      currentCount = 1;
    }
  }

  // Final check after loop ends
  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxChar = currentChar;
  }

  // If no character repeats consecutively
  if (maxCount === 1) {
    console.error("No character repeats consecutively.");
    return false;
  }

  console.log("Most Consecutive Repeating Character:", maxChar);
  return true;
}


charRepeating("traaainngfornewbie"); 
charRepeating("");
charRepeating(12345); 
charRepeating("abcdef"); 
charRepeating("aabbccddeee");