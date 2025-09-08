/*Write a javascript function to return number of occurance of a particular word in a sentence
For example:
findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
Will return an output of 2 ( 2 occurance of kind in the string )*/


function findNumberOfOccurance(inputFromUser,findingWord){
console.log("The Given Sentence is  "+ inputFromUser);
console.log("The Word to be find Occurance for is  "+ findingWord);
convertedInput=inputFromUser.toLowerCase();
convertedWord=findingWord.toLowerCase();
let result=[];
  // Edge Case 1: Check if inputs are strings
    if (typeof convertedInput !== 'string' || typeof convertedWord !== 'string') {
        console.error("Both sentence and word must be strings.");
        return 0;
    }
    // Edge Case 2: Empty sentence or word
    if (convertedInput.length === 0 || convertedWord.length === 0) {
        console.error("Sentence or word is empty.");
        return 0;
    }



for (let i = 0; i <= convertedInput.length - convertedWord.length; i++) {
    if (convertedInput.substring(i, i + convertedWord.length) === convertedWord) {
      result.push(convertedInput.substring(i, i + convertedWord.length));
    }
  }
console.log('The Number of Occurance is '+ result.length)
  return true;
}

findNumberOfOccurance("be kind whenever possible. kindness is what matters","kind")
