let mainStore=[];

function textPrinter(param,text) {
  let p = document.createElement("p");
  p.appendChild(text);
  let div = document.getElementById(param);
  div.appendChild(p);
}


//function is called when user clics #sendButton (see html/output), onclick method used.
function store(){
  mainStore.push({
    name: document.getElementById("nameToLog").value,
    grades: 
    [
      parseInt(document.getElementById("gradeOne").value),
      parseInt(document.getElementById("gradeTwo").value),
      parseInt(document.getElementById("gradeThree").value),
      parseInt(document.getElementById("gradeFour").value),
      parseInt(document.getElementById("gradeFive").value)
    ]
  })
  let text = document.createTextNode(`${document.getElementById("nameToLog").value}'s grades logged`);
  textPrinter ("Box",text);  
}


//function is called when user clics #getButton (see html/output), onclick method used.
function getAverage() {
  for (let index = 0; index < mainStore.length; index++) {
    if(mainStore[index].name===document.getElementById("nameToGet").value){
      let average = mainStore[index].grades.reduce((accumulator, current)=>accumulator+current)/mainStore[index].grades.length;
      if (average<7){
        let text = document.createTextNode(`${document.getElementById("nameToGet").value} failed with ${average}`);
        textPrinter("Box2",text);
      }else{
        let text = document.createTextNode(`${document.getElementById("nameToGet").value} approved with ${average}`);
        textPrinter("Box2",text);
      }
    }    
  }
}