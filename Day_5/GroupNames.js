/*Group names according to the initial character
Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
Output
["arun", "aadhir", "aariketh"]
["balu"]
["cathy"]
["krish", "kamal"]*/

function groupByInitial(names){
  // Edge Case 1: Input is not an array
  if(!Array.isArray(names)){
    console.error("Error: Input is not an array");
    return false;
  }

  // Edge Case 2: Empty array
  if(names.length===0){
    console.error("Error: Empty input list");
    return false;
  }

  const grouped={};

  for(let i=0;i<names.length;i++){
    const name=names[i];

    // Edge Case 3: Non-string entry
    if(typeof name!=='string'){
      console.warn("Warning: Skipping non-string value at index "+i);
      continue;
    }

    // Edge Case 4: Empty string
    if(name.length===0){
      console.warn("Warning: Skipping empty string at index "+i);
      continue;
    }

    const initial=name[0];
    if(!grouped[initial]){
        grouped[initial]=[];
    }
    grouped[initial].push(name);
  }

  // Edge Case 5: No valid names grouped
  let hasOutput=false;
  for(let key in grouped){
    let group=grouped[key];
    let output="[";
    for(let i=0;i<group.length;i++){
      output+='"'+group[i]+'"';
      if(i<group.length-1){
        output+=", ";
    }
    }
    output+="]";
    console.log(output);
    hasOutput=true;
  }

  if(!hasOutput){
    console.log("No valid names to group");
  }
}


groupByInitial(["arun","balu","cathy","krish","aadhir","aariketh","kamal"]);