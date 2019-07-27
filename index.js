onAdd = (e) => {
    e.preventDefault();
    let val = (e.target[0].value);
    if(val){
        const li = document.createElement("li");
        let id = e1()
        console.log(id);
        
        li.setAttribute('id', 'todo_' + id)
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
    document.querySelector("input").value="";
    document.querySelector("input").focus();
    btn.addEventListener('click', (e) =>{

    })
    }

} 
function e1() {
    var u='',i=0;
    while(i++<36) {
      var c='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i-1],r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);
      u+=(c=='-'||c=='4')?c:v.toString(16)
    }
    return u;
  }