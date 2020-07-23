var list=document.getElementById("list")

function addItem(){
    var todo_item=document.getElementById("todo-item")
    
    var li=document.createElement("li")
    
    var liText=document.createTextNode(todo_item.value)
    var x=liText.nodeValue
    var input=document.createElement("input")
    input.setAttribute("type","text")
    input.setAttribute("value",x)
    
    
    li.appendChild(input)
    list.appendChild(li)
    
    if(x===""){
        
        input.setAttribute("id","name")    
        document.getElementById("name").disabled=true
        input.setAttribute("value","Empty")
        li.appendChild(input)
        list.appendChild(li)
        
    }

    
    // Delete Button
    var delBtn=document.createElement("button")
    var delText=document.createTextNode("DELETE")
    delBtn.setAttribute("class","Btn")
    delBtn.setAttribute("onclick","deleteButton(this)")


    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    var linbr=document.createElement("hr")
    li.appendChild(linbr)
    list.appendChild(li)

    
    

    todo_item.value=""
    console.log(li)
}

function deleteButton(a){
    a.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}


