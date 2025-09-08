/*Remove duplicates in an array
For example: [1, “two”, “two”, 3, “two”];
output [1, “two”, 3]*/


function removeDuplicatesInArray(inputFromUser){
    // Edge Case 1: Input is not an array
    if (!Array.isArray(inputFromUser )) {
        console.error("Input must be an array.");
        return false;
    }
    // Edge Case 2: Empty array
    if (inputFromUser .length === 0) {
        console.error("Input array is empty.");
        return false;
    }
let uniqueData=[];
let duplicateData=[];
console.log(inputFromUser);
for(let i=0;i<inputFromUser.length;i++){
if(uniqueData.indexOf(inputFromUser[i])===-1){
    uniqueData.push(inputFromUser[i]);
}}
console.log(uniqueData);
return true;
}


removeDuplicatesInArray([1, "two", "two", 3, "two"]);
removeDuplicatesInArray([]);
removeDuplicatesInArray("not an array");