/*const students = [
  {
    id: 0,
    name: ‘Arun’,
    books: [‘Wings of Fire’, ‘Chakra’],
  },
  {
    id: 1,
    name: ‘Ashok’,
    books: [‘Chakra’, ‘War and Peace’, ‘The Shining’]
  },
  {
    id: 2,
    name: ‘Balu’,
    books: [‘Wings of Fire’, ‘All about Cricket’],
  },
  {
    id: 3,
    name: ‘Cathi’,
    books: [‘Against the wind’, ‘The Shining’, ‘War and Peace’]
  },
];
Find the common interest in books for the students
Output
Wings of Fire - [‘Arun’, ‘Balu’]
Chakra - [‘Arun’, ‘Ashok’]
War and Peace - [‘Ashok’, ‘Cathi’],
All about Cricket- [‘Balu’],
Against the wind- [‘Cathi’]
The Shining - [‘Cathi’, ‘Ashok’]
Find the user who shares most interest with other users.
For example: Ashok since he shares book interest with Arun, Cathi. And also Arun since he shares interest with Balu and Ashok*/



function studentBookInterest(studentDetails){
  // Edge Case 1: Input is not an array
  if(!Array.isArray(studentDetails)){
    console.error("Error: Input is not an array");
    return;
  }

  // Edge Case 2: Empty array
  if(studentDetails.length===0){
    console.error("Error: Empty student list");
    return;
  }

  const bookMap={},nameTracker={};

  for(let i=0;i<studentDetails.length;i++){
    const student=studentDetails[i];

    // Edge Case 3: Missing name or books
    if(!student || typeof student.name!=='string' || !Array.isArray(student.books)){
      console.error("Error: Invalid student entry at index "+i);
      continue;
    }

    const name=student.name;
    const books=student.books;

    // Edge Case 4: Duplicate student name
    if(nameTracker[name]){
      console.warn("Warning: Duplicate student name '"+name+"' at index "+i);
    }
    nameTracker[name]=true;

    for(let j=0;j<books.length;j++){
      const book=books[j];
      if(typeof book!=='string'){
        continue;
    }
      if(!bookMap[book]){bookMap[book]=[];}
      bookMap[book].push(name);
    }
  }


  for(let book in bookMap){
    let names=bookMap[book];
    let output=book+" - [";
    for(let i=0;i<names.length;i++){
      output+="'"+names[i]+"'";
      if(i<names.length-1){output+=", ";}
    }
    output+="]";
    console.log(output);
  }

  const sharedCount={};

  for(let i=0;i<studentDetails.length;i++){
    const student=studentDetails[i];
    if(!student || typeof student.name!=='string' || !Array.isArray(student.books)){
        continue;
    }
    const name=student.name;
    const books=student.books;
    sharedCount[name]=[];

    for(let j=0;j<books.length;j++){
      const book=books[j];
      const others=bookMap[book];
      for(let k=0;k<others.length;k++){
        const otherName=others[k];
        if(otherName!==name){
          let exists=false;
          for(let m=0;m<sharedCount[name].length;m++){
            if(sharedCount[name][m]===otherName){
              exists=true;
              break;
            }
          }
          if(!exists){sharedCount[name].push(otherName);}
        }
      }
    }
  }

  let maxShared=0,interestedStudent=[];
  for(let name in sharedCount){
      let count=sharedCount[name].length;
        if(count>maxShared){
          maxShared=count;
            interestedStudent.length=0;
            interestedStudent.push(name);
    }else if(count===maxShared){
            interestedStudent.push(name);
    }
  }

  // Edge Case 5: No shared interests found
  if(interestedStudent.length===0){
    console.log("\nNo students share book interests with others.");
  }else{
    console.log('\nUsers who share most interest with others:'+interestedStudent);
    for(let i=0;i<interestedStudent.length;i++){
      console.log('- '+interestedStudent[i]);
    }
  }

  console.log("\nNumber of students each student shares book interests with:");
  for(let name in sharedCount){
    console.log(name+" shares interests with "+sharedCount[name].length+" student(s)");
  }

  const topStudents=[];
  for(let name in sharedCount){
    if(sharedCount[name].length===maxShared){
      topStudents.push(name);
    }
  }

  console.log("\nStudent(s) who share most interests with others: "+topStudents.join(', '));
}


const students=[
  {id:0,name:'Arun',books:['Wings of Fire','Chakra']},
  {id:1,name:'Ashok',books:['Chakra','War and Peace','The Shining']},
  {id:2,name:'Balu',books:['Wings of Fire','All about Cricket']},
  {id:3,name:'Cathi',books:['Against the wind','The Shining','War and Peace']}
];

studentBookInterest(students);