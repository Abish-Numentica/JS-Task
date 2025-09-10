/*2. Convert string to arithmetic operation
For example accept a string like "10 + 20"
and return output as 30
b. "20 - 10" //Output 10
Only string input is allowed which you have to parse and get a number output
eval is not allowed*/


function parseArithmetic(inputFromUser){
  // Edge Case 1: Input not a string
  if(typeof inputFromUser!=='string'){
    console.error("Error: Input is not a string");
    return false;
  }

  // Edge Case 2: Empty string
  if(inputFromUser.trim().length===0){
    console.error("Error: Empty input string");
    return false;
  }

  let parts=[],number1="",number2="",operator="",found=false;

  // Manual split by space
  for(let i=0;i<inputFromUser.length;i++){
    if(inputFromUser[i]===" "){
      if(number1.length>0 && !found)
        {
        found=true;
    }
      continue;
    }
    if(!found)
        {
            number1+=inputFromUser[i];

    }
    else if(operator==="")
        {
        operator+=inputFromUser[i];
    }
    else{
        number2+=inputFromUser[i];

    }
  }

  // Edge Case 3: Missing components
  if(number1==="" || number2==="" || operator===""){
    console.error("Error: Invalid format");
    return false;
  }

  // Edge Case 4: Non-numeric values
  let n1=Number(number1);
  let n2=Number(number2);
  if(isNaN(n1) || isNaN(n2)){
    console.error("Error: Non-numeric values");
    return false;
  }

  let result=0;


  if(operator==="+")
    {
        result=n1+n2;
    }
  else if(operator==="-")
    {
    result=n1-n2;
}
  else if(operator==="*"){
    result=n1*n2;
}
  else if(operator==="/"){
    if(n2===0){
      console.error("Error: Division by zero");
      return false;
    }
    result=n1/n2;
  }
  else{
    console.error("Error: Unsupported operator '"+operator+"'");
    return false;
  }

  console.log("Result: "+result);
}


parseArithmetic("10 + 20");
parseArithmetic("20 - 10");
parseArithmetic("5 * 6");
parseArithmetic("100 / 4");