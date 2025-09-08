/*Given an array, filter out the invalid items
For example:
filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
Output [“a”, “d”, true, “cd”];
filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
Output [“a”, “d”, 1, “cd”, 33];
filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
Output [1, true, 33];*/


function filterOutInvalidItems(inputFromUser,typeOfRemove){
 
  // Edge case 1: input is not an array
  if (!Array.isArray(inputFromUser)) {
    console.error( "Input is not an array");
    return false;
  }

  // Edge case2 : Empty array
  if (inputFromUser.length === 0) {
    console.error(  "Empty array");
    return false;
  }

  // Edge case 3: typeToRemove not provided
  if (typeof typeOfRemove !== 'string') {
    console.error( "Invalid type to remove");
    return false;
  }
    let outputForInput = [];
for (let j = 0; j < inputFromUser.length; j++) {
    if (typeof inputFromUser[j] !== typeOfRemove) {
       outputForInput.push(inputFromUser[j]);
    }}


    // Edge case 4: Output has no value
    if(outputForInput.length==0)
        {
    console.error(  "Error: Empty array");
    return false;}
    else console.log("The Filterd Output: " +outputForInput);
         return true;
}


filterOutInvalidItems([0], "number"); 
filterOutInvalidItems(['a', 'd', 1, true, 'cd', 33], 'number'); 
filterOutInvalidItems(['a', 'd', 1, true, 'cd', 33], 'boolean'); 
filterOutInvalidItems(['a', 'd', 1, true, 'cd', 33], 'string'); 
filterOutInvalidItems(['a', 'd', 1, '@',true, 'cd', 33], "symbols"); 
filterOutInvalidItems(['a', 'd', 1, true, 'cd', 33], 'number'); 
