onAdd = (e) => {
    
    e.preventDefault();
    let val = (e.target[0].value);
    if(val){
        
        const li = document.createElement("li");
        const del = document.createElement("button");
        del.innerHTML="delete";
        const btn = document.createElement("button");
        btn.innerHTML="edit";
    
        const ul = document.querySelector("ul");
        console.log(ul);
        
        const div = document.createElement("div")
        console.log(e);
    
    const todo = ul.appendChild(li).appendChild(div).innerHTML=val;
        li.appendChild(btn);
        li.appendChild(del);
    del.addEventListener("click" , ()=>{
        li.remove();
    })
    localStorage.setItem("key1" , val);
    
    }



    
    
    
} 
