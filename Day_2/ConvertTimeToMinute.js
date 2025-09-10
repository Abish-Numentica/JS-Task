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
"14:70" → throw (invalid minutes)*/
/*Logic: The function takes a time string and converts it into total minutes.
 It handles both 12-hour and 24-hour formats, removes spaces, and normalizes AM/PM. The time is split into hours, minutes, and optional seconds.
  Each part is manually parsed and validated. Based on the rounding option (up, down, or nearest), seconds are used to adjust the final minute count. 
  Invalid formats or values throw errors to ensure clean input.
 */


function toMinutes(timeStr, options) {
  console.log("The Input Time String is: " + timeStr);


  if (typeof timeStr !== 'string') {
    console.error("Error: Input must be a string.");
    return false;
  }

//To Remove Space and Lower Case the AM/PM
  let input = "";
  for (let i = 0; i < timeStr.length; i++) {
    let ch = timeStr[i];
    if (ch !== ' ') {
      if (ch >= 'A' && ch <= 'Z') {
        input += String.fromCharCode(ch.charCodeAt(0) + 32); // toLowerCase manually
      } else {
        input += ch;
      }
    }
  }

//Removes "am" or "pm" from the string.
  let isAM = false;
  let isPM = false;
  let len = input.length;

  if (len >= 2 && input[len - 2] === 'a' && input[len - 1] === 'm') {
    isAM = true;
    input = input.slice(0, len - 2);
  } else if (len >= 2 && input[len - 2] === 'p' && input[len - 1] === 'm') {
    isPM = true;
    input = input.slice(0, len - 2);
  }

//Split to HH, MM, SS Parts and add it as array values
  let parts = [];
  let current = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ':') {
      parts.push(current);
      current = "";
    } else {
      current += input[i];
    }
  }
  parts.push(current);

  if (parts.length < 2 || parts.length > 3) {
    console.error("Error: Invalid time format. Expected 'H:MM[:SS][ am/pm]'.");
    return false;
  }


//Parse Hours, Minutes, Seconds  
  let hours = 0, minutes = 0, seconds = 0;

  for (let i = 0; i < parts[0].length; i++) {
    let digit = parts[0][i] - '0';
    if (digit < 0 || digit > 9) {
      console.error("Error: Invalid hour digit '" + parts[0][i] + "'.");
      return false;
    }
    hours = hours * 10 + digit;
    //let hours = parseInt(parts[0], 10);

  }

  for (let i = 0; i < parts[1].length; i++) {
    let digit = parts[1][i] - '0';
    if (digit < 0 || digit > 9) {
      console.error("Error: Invalid minute digit '" + parts[1][i] + "'.");
      return false;
    }
    minutes = minutes * 10 + digit;
    //let minutes = parseInt(parts[1], 10);

  }

  if (parts.length === 3) {
    for (let i = 0; i < parts[2].length; i++) {
      let digit = parts[2][i] - '0';
      if (digit < 0 || digit > 9) {
        console.error("Error: Invalid second digit '" + parts[2][i] + "'.");
        return false;
      }
      seconds = seconds * 10 + digit;
      //let seconds = parts.length === 3 ? parseInt(parts[2], 10) : 0;
    }
  }


  if (minutes >= 60) {
    console.error("Error: Invalid time. Minutes must be less than 60.");
    return false;
  }

  if (seconds >= 60) {
    console.error("Error: Invalid time. Seconds must be less than 60.");
    return false;
  }

  if ((isAM || isPM) && hours > 12) {
    console.error("Error: Invalid time. Hours must be ≤ 12 when using am/pm.");
    return false;
  }


  if (isAM && hours === 12) h = 0;
  if (isPM && hours < 12) h += 12;


  let minuteOffset = 0;
  let mode = 'down';
  if (typeof options === 'object' && typeof options.round === 'string') {
    mode = options.round;
  }
//Rounding Off
  if (mode === 'up') {
    minuteOffset = seconds > 0 ? 1 : 0;
  } else if (mode === 'nearest') {
    minuteOffset = seconds >= 30 ? 1 : 0;
  } else if (mode === 'down') {
    minuteOffset = 0;
  } else {
    console.error("Error: Invalid rounding option. Use 'up', 'down', or 'nearest'.");
    return false;
  }
//Calculations
  let totalMinutes = hours * 60 + minutes + minuteOffset;
  console.log("The Converted Minutes Are: " + totalMinutes);
  return totalMinutes;
}

toMinutes("2:30");                          // 150
toMinutes("2:30:45", { round: 'down' });    // 150
toMinutes("2:30:45", { round: 'nearest' }); // 151
toMinutes("12:00 am");                      // 0
toMinutes("12:00 pm");                      // 720
toMinutes("24:00");                         // 1440
toMinutes("14:70");                         // Error: Invalid minute value
