let mainStore=[];

function textPrinter(divName,textNode) {
  let p = document.createElement("p");
  p.appendChild(textNode);
  let div = document.getElementById(divName);
  div.appendChild(p);
}


//function is called when user clics #sendButton (see html/output), onclick method used.
function store(){
  mainStore.push({
    name: document.getElementById("nameToLog").value,
    grades: [...document.getElementsByClassName("grades")].map(element=>parseInt(element.value))
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