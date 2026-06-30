let tasks = {
  completed:[],
  pending:[],
  all:[]
}


function displayTime(){
let now = new Date()
const days = ["Sunday","Monday","Tuesday","Wednesday","thursday","friday","saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.querySelector(".first .three").textContent=days[now.getDay()]+","+months[now.getMonth()]+" "+now.getDate()
}


function addTaskCard(str){
  let card = document.createElement("div")
  card.className = "cards";
  card.innerHTML=`
  <div class="check">
    <input type="checkbox"id="task">

    <label for="task">${str}</label>
  </div>
    <button>✕</button>
  </div>  
    `
  document.querySelector(".lastSection .main").append(card)

}


function addTask(){
  let input = document.querySelector(".third .content input")
  let btn = document.querySelector(".third .content button")
  let taskVal

  input.addEventListener("keydown", function(e){
    if(e.key==="Enter" && input.value!==""){
    tasks.all.push(input.value)
    tasks.pending.push(input.value)
    taskVal=input.value
    input.value=""
    addTaskCard(taskVal)
    }
  })
  
  btn.addEventListener("click",function(){
    if(input.value!==""){
    tasks.all.push(input.value)
    tasks.pending.push(input.value)
    taskVal=input.value
    input.value=""
    addTaskCard(taskVal)
    }


  })

}

function displayCards3Btns(){
  let activeFilter;
  let all = document.querySelector(".lastSection .first_ .all")
  let pending = document.querySelector(".lastSection .first_ .pending")
  let done = document.querySelector(".lastSection .first_ .done")
  let selectAll = new Event("click")

  all.addEventListener("click",function(){
    if(activeFilter===all) return
    activeFilter=all;
    all.style.color="#C7F441";
    all.style.borderColor="#C7F441"

    if(tasks.all.length===0) document.querySelector(".lastSection .main p").textContent="No tasks here. Add one above.";
    else {document.querySelector(".lastSection .main p").textContent="";
      tasks.all.forEach(function(x){
      addTaskCard(x)
    })}

  })

  pending.addEventListener("click",function(){
    if(activeFilter===pending) return
    activeFilter=pending;
    pending.style.color="#C7F441";
    pending.style.borderColor="#C7F441"

    if(tasks.all.length===0) document.querySelector(".lastSection .main p").textContent="No tasks here. Add one above.";
    else {document.querySelector(".lastSection .main p").textContent="";
      tasks.pending.forEach(function(x){
      addTaskCard(x)
    })}

  })

    done.addEventListener("click",function(){
    if(activeFilter===done) return
    activeFilter=done;
    done.style.color="#C7F441";
    done.style.borderColor="#C7F441"

    if(tasks.all.length===0) document.querySelector(".lastSection .main p").textContent="No tasks here. Add one above.";
    else {document.querySelector(".lastSection .main p").textContent="";
      tasks.done.forEach(function(x){
      addTaskCard(x)
    })}

  })

  all.dispatchEvent(selectAll);

}


displayTime()
displayCards3Btns()
addTask()
