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
  if(document.querySelector(".lastSection .main p").textContent!="") document.querySelector(".lastSection .main p").textContent="";
    tasks.all.push(input.value)
    tasks.pending.push(input.value)
    taskVal=input.value
    input.value=""
    addTaskCard(taskVal)
    }
  })
  
  btn.addEventListener("click",function(){
  if(document.querySelector(".lastSection .main p").textContent!="") document.querySelector(".lastSection .main p").textContent="";
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
    // if(activeFilter===all) return


    document.querySelectorAll(".cards").forEach(function(card){
      card.remove()
    })

    activeFilter=all;
    all.classList.add("active")
    done.classList.remove("active")
    pending.classList.remove("active")


    if(tasks.all.length===0) document.querySelector(".lastSection .main p").textContent="No tasks here. Add one above.";
    else {document.querySelector(".lastSection .main p").textContent="";
      tasks.all.forEach(function(x){
      addTaskCard(x)
    })}

  })

  pending.addEventListener("click",function(){
    // if(activeFilter===pending) return

      document.querySelectorAll(".cards").forEach(function(card){
      card.remove()
    })

    activeFilter=pending;

    done.classList.remove("active")
    all.classList.remove("active")
    pending.classList.add("active")

    if(tasks.pending.length===0) document.querySelector(".lastSection .main p").textContent="No tasks here. Add one above.";

    else {document.querySelector(".lastSection .main p").textContent="";
      tasks.pending.forEach(function(x){
      addTaskCard(x)
    })}

  })

    done.addEventListener("click",function(){
    // if(activeFilter===done) return

      document.querySelectorAll(".cards").forEach(function(card){
      card.remove()
    })

    activeFilter=done;
    done.classList.add("active")
    all.classList.remove("active")
    pending.classList.remove("active")


    if(tasks.completed.length===0) document.querySelector(".lastSection .main p").textContent="No tasks here. Add one above.";
    else {document.querySelector(".lastSection .main p").textContent="";
      tasks.completed.forEach(function(x){
      addTaskCard(x)
    })}


  })


function clickCross(){

  let click = new Event("click")

  document.querySelector(".lastSection .main").addEventListener("click",function(e){

    if(e.target.tagName==="BUTTON") {
      let cardToRemove=e.target.closest(".cards")
      let taskTxt=cardToRemove.querySelector(".check label").textContent
      removeTaskFromArr(taskTxt)
      activeFilter.dispatchEvent(click)
      }

    if(e.target.tagName=="INPUT"){
      let el = e.target;
      let taskk=el.closest(".check").querySelector("label").innerText
  
      let state=el.checked
      if(state){
        for(let i=0;i<tasks.pending.length;i++){
          if(tasks.pending[i]===taskk) tasks.pending.splice(i,1)
        }
      tasks.completed.push(taskk);
      }
      else{
        for(let i=0;i<tasks.completed.length;i++){
          if(tasks.pending[i]===taskk) tasks.pending.splice(i,1)
        }
      tasks.pending.push(taskk);
      }

    }

  })
}

  all.dispatchEvent(selectAll);
  clickCross()
  addTask()
}

function checkUncheck(){
  let inputBox = document.querySelector(".lastSection .main .cards .check input")
  inputBox.addEventListener("click",function(){
    console.log(inputBox.check)
  })

}



function removeTaskFromArr(x){
  for(let i=0;i<tasks.all.length;i++){
    if(tasks.all[i]===x) tasks.all.splice(i,1)
  }
  for(let i=0;i<tasks.pending.length;i++){
    if(tasks.pending[i]===x) tasks.pending.splice(i,1)
  }
  for(let i=0;i<tasks.completed.length;i++){
    if(tasks.completed[i]===x) tasks.completed.splice(i,1)
  }

}


displayTime()
displayCards3Btns()
// addTask()
