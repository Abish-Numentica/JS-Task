/*Template String Replace
----------------------------
For example:
const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
replaceTemplateString(string, [[“location”, “Chennai”], [“state”, “Tamil Nadu”], [“phone”, “9840164723"]])
Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723*/

/*Logic: The function takes a template string and a list of key-value pairs.
 It scans the string for placeholders in the format #[key], and replaces each with its corresponding value from the list. 
 If a key is not found, the placeholder remains unchanged. 
 The function also includes input validation to ensure the template and replacements are properly structured.
*/
function replaceTemplateString(template, replacements) {
  console.log("The Input Template is: " + template);
  console.log("The Replacement Pairs Are: " + replacements);

  // Edge Case 1: Check if template is a string
  if (typeof template !== 'string') {
    console.error("Error: Template must be a string.");
    return false;
  }

  // Edge Case 2: Check if replacements is an array
  if (!Array.isArray(replacements)) {
    console.error("Error: Replacements must be an array.");
    return false;
  }

  // Edge Case 3: Check if replacements array is empty
  if (replacements.length === 0) {
    console.error("Error: No replacements provided.");
    return false;
  }

  // Edge Case 4: Validate each replacement pair
  for (let i = 0; i < replacements.length; i++) {
    if (
      !Array.isArray(replacements[i]) ||
      replacements[i].length !== 2 ||
      typeof replacements[i][0] !== 'string' ||
      typeof replacements[i][1] !== 'string'
    ) {
      console.error("Error: Invalid replacement pair at index " + i + ": " + replacements[i]);
      return false;
    }
  }

 
  let result = "";
  let i = 0;

  while (i < template.length) {
   
    if (template[i] === '#' && template[i + 1] === '[') {
      let key = "";
      let j = i + 2;

    
      while (j < template.length && template[j] !== ']') {
        key += template[j];
        j++;
      }


     
      let found = false;
      let replacementValue = "";

      for (let k = 0; k < replacements.length; k++) {
        if (replacements[k][0] === key) {
          replacementValue = replacements[k][1];
          found = true;
          break;
        }
      }

      if (found) {
        result += replacementValue;
      } else {
        result += "#[" + key + "]"; 
      }

      i = j + 1; 
    } else {
      result += template[i];
      i++;
    }
  }

  console.log("The Final Replaced String Is: " + result);
  return result;
}
const inputString = "Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]";
replaceTemplateString(inputString, [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]]);

