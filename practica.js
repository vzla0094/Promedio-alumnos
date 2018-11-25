let mainStore=[];

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
  let text = document.createTextNode(`Calificaciones de ${document.getElementById("nameToLog").value} registradas`);
  let p = document.createElement("p");
  p.appendChild(text);
  let div = document.getElementById("Box");
  div.appendChild(p);
}

function getAverage() {
  for (let index = 0; index < mainStore.length; index++) {
    if(mainStore[index].name===document.getElementById("nameToGet").value){
      let average = mainStore[index].grades.reduce((accumulator, current)=>accumulator+current)/mainStore[index].grades.length;
      if (average<7){
        let text = document.createTextNode(`Reprobó con ${average} por burro`);
        let p = document.createElement("p");
        p.appendChild(text);
        let div = document.getElementById("Box2");
        div.appendChild(p); 
      }else{
        let text = document.createTextNode(average);
        let p = document.createElement("p");
        p.appendChild(text);
        let div = document.getElementById("Box2");
        div.appendChild(p); 
      }
    }    
  }
}


