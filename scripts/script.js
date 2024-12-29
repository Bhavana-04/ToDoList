const inputBox=document.getElementById("addItems");
const list=document.getElementById("list-of-items");
const removeall=document.getElementById("removeTasks");
let li;

function addTasks(){
    if(inputBox.value===''){
        alert('you must write something')
    }
    else{
        li=document.createElement("li");
        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        li.appendChild(checkbox);
        let span=document.createElement("span");
        span.textContent="remove";
        li.appendChild(span);
        
        span.addEventListener("click", function(){
            li.remove();
        })

        li.appendChild(document.createTextNode(inputBox.value));
        list.appendChild(li);
        
    }
    inputBox.value="";
}


function removeTasks(){
    removeall.addEventListener("click", function(){
        const listItems = document.querySelectorAll('ul li'); 
        listItems.forEach(li => li.remove());
    })
}
