/*toMinutes(timeStr, options = { round: 'down' })
----------------------------------------------------

Convert "HH:MM[:SS][ am/pm]" to minutes. Support 12h/24h (not mixed).
Hours can exceed 24. Seconds rounding: 'down'|'nearest'|'up'. Throw on invalid.
Examples:
"2:30" → 150
"2:30:45" → 151 if round:'nearest', else 150
"12:00 am" → 0
"12:00 pm" → 720
"24:00" → 1440
"14:70" → throw (invalid minutes)
*/


function convertToMinutes(inputFromUser, options = { round: 'down' }) {
  // Edge Case 1: Input must be a string
  if (typeof inputFromUser !== "string") {
    console.error("Invalid input: must be a string");
    return false;
  }

 
  let hasColon = false;
  for (let i = 0; i < inputFromUser.length; i++) {
    if (inputFromUser[i] === ":") {
      hasColon = true;
      break;
    }
  }
  if (!hasColon) {
    console.error("Invalid format: missing ':' separator");
    return false;
  }


  let timePart = "";
  let suffix = "";
  let spaceFound = false;
  for (let i = 0; i < inputFromUser.length; i++) {
    if (inputFromUser[i] === " ") {
      spaceFound = true;
      continue;
    }
    if (!spaceFound) {
      timePart += inputFromUser[i];
    } else {
      suffix += inputFromUser[i];
    }
  }


  let h = "", m = "", s = "";
  let section = 0;
  for (let i = 0; i < timePart.length; i++) {
    if (timePart[i] === ":") {
      section++;
      continue;
    }
    if (section === 0) h += timePart[i];
    else if (section === 1) m += timePart[i];
    else if (section === 2) s += timePart[i];
  }


  let hours = parseInt(h);
  let minutes = parseInt(m);
  let seconds = s !== "" ? parseInt(s) : 0;

 
  if (
    isNaN(hours) || isNaN(minutes) ||
    minutes < 0 || minutes >= 60 ||
    seconds < 0 || seconds >= 60
  ) {
    console.error("Invalid time values");
    return false;
  }


  let suffixLower = "";
  for (let i = 0; i < suffix.length; i++) {
    let ch = suffix[i];
    if (ch >= 'A' && ch <= 'Z') ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    suffixLower += ch;
  }

  if (suffixLower === "am" && hours === 12) hours = 0;
  if (suffixLower === "pm" && hours < 12) hours += 12;


  let totalMinutes = hours * 60 + minutes;


  if (seconds > 0) {
    if (options.round === "up") totalMinutes += 1;
    else if (options.round === "nearest" && seconds >= 30) totalMinutes += 1;
 
  }


  console.log("Converted minutes:", totalMinutes);
  return totalMinutes;
}

convertToMinutes("2:30");                          // 150
convertToMinutes("2:30:45");                       // 150
convertToMinutes("2:30:45", { round: "nearest" }); // 151
convertToMinutes("12:00 am");                      // 0
convertToMinutes("12:00 pm");                      // 720
convertToMinutes("24:00");                         // 1440
convertToMinutes("14:70");                         // false (invalid minutes)