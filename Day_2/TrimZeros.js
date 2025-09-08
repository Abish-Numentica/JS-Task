/*Trim Zeros
--------------
Remove leading/trailing zeros from a numeric string without losing internal zeros; preserve sign and decimal.
trimZeros(input, which='both') -> string
// which: 'leading' | 'trailing' | 'both'*/

function trimZeros(input, which) {
  console.log("The Input String is: " + input);
  console.log("The Trim Option Selected is: " + which);

  // Default trim mode
  if (which !== 'leading' && which !== 'trailing' && which !== 'both') {
    console.error("Error: Invalid trim option. Use 'leading', 'trailing', or 'both'.");
    return false;
  }

  // Edge Case 1: Input must be a string
  if (typeof input !== 'string') {
    console.error("Error: Input must be a string.");
    return false;
  }

  // Edge Case 2: Empty string
  if (input.length === 0) {
    console.error("Error: Input string is empty.");
    return false;
  }

  // Edge Case 3: Validate numeric structure manually
  let hasDecimal = false;
  let hasSign = false;
  let decimalIndex = -1;

  for (let i = 0; i < input.length; i++) {
    let ch = input[i];

    if (i === 0 && (ch === '+' || ch === '-')) {
      hasSign = true;
      continue;
    }

    if (ch === '.') {
      if (hasDecimal) {
        console.error("Error: Multiple decimal points.");
        return false;
      }
      hasDecimal = true;
      decimalIndex = i;
      continue;
    }

    if (ch < '0' || ch > '9') {
      console.error("Error: Invalid character '" + ch + "' in numeric string.");
      return false;
    }
  }

  // Step 1: Extract sign
  let sign = "";
  let start = 0;
  if (hasSign) {
    sign = input[0];
    start = 1;
  }

  // Step 2: Split manually into integer and decimal parts
  let intPart = "";
  let decPart = "";

  for (let i = start; i < input.length; i++) {
    if (i === decimalIndex) {
      continue;
    }

    if (decimalIndex !== -1 && i > decimalIndex) {
      decPart += input[i];
    } else {
      intPart += input[i];
    }
  }

  // Step 3: Trim leading zeros
  if (which === 'leading' || which === 'both') {
    let i = 0;
    while (i < intPart.length && intPart[i] === '0') {
      i++;
    }
    if (i === intPart.length) {
      intPart = "0"; // All zeros
    } else {
      let trimmed = "";
      for (let j = i; j < intPart.length; j++) {
        trimmed += intPart[j];
      }
      intPart = trimmed;
    }
  }

  // Step 4: Trim trailing zeros
  if ((which === 'trailing' || which === 'both') && decPart.length > 0) {
    let j = decPart.length - 1;
    while (j >= 0 && decPart[j] === '0') {
      j--;
    }
    let trimmed = "";
    for (let k = 0; k <= j; k++) {
      trimmed += decPart[k];
    }
    decPart = trimmed;
  }

  // Step 5: Reconstruct final string
  let finalString = sign + intPart;
  if (hasDecimal && decPart.length > 0) {
    finalString += "." + decPart;
  } else if (hasDecimal && decPart.length === 0) {
    finalString += ""; // Drop decimal if nothing remains
  }

  console.log("The Final Trimmed String Is: " + finalString);
  return true;
}

trimZeros("000123.45000", "both");     // Output: "123.45"
trimZeros("000123.45000", "leading");  // Output: "123.45000"
trimZeros("000123.45000", "trailing"); // Output: "000123.45"
trimZeros("-0000.0000", "both");       // Output: "-0"
trimZeros("+000123", "leading");       // Output: "+123"
trimZeros("123.000", "trailing");      // Output: "123"
trimZeros("0000", "both");             // Output: "0"
trimZeros("0.000", "both");            // Output: "0"
trimZeros("12.34000", "trailing");     // Output: "12.34"
trimZeros("12.34000", "leading");      // Output: "12.34000"
trimZeros("abc", "both");              // Error: Invalid character 'a'
trimZeros("12.3.4", "both");           // Error: Multiple decimal points
trimZeros("", "both");                 // Error: Input string is empty
trimZeros("123", "invalid");           // Error: Invalid trim option