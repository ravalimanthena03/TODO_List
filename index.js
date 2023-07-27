const inputArea=document.getElementById("input-area");
const listContainer=document.getElementById("list-container");

function taskAdded(){
    if (inputArea.value===''){
        alert("Add A task");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputArea.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputArea.value="";
    saveDataLocal();
}

listContainer.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.add("checked");
        saveDataLocal();
    }else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveDataLocal();
    }
});

function saveDataLocal(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();