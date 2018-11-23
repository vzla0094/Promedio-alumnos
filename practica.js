


let students = []; //store info

//Push new objects into array
function pusher(nameCall,gradesCall) {
  return students.push({name:nameCall,grades:gradesCall})
}

function getAverage(nameToLook) {
  for (let index = 0; index < students.length; index++) {
    if(students[index].name===nameToLook){
      let average = students[index].grades.reduce((accumulator, current)=>accumulator+current)/students[index].grades.length;
      if (average<7){
        return `Reprobó con ${average} por burro`
      }else{
        return average;
      }
    }    
  }
}

//quiero meter el valor del input que tiene id="name" dentro de ésta variable
let test1 = document.getElementById("name").value; 

