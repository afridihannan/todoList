console.log("hello to-dos List");
let new_item=document.getElementById('item')
let add=document.getElementById('click');

let element=document.getElementById('list1');
var mHTML="";
var ind;

const listed=(ele)=>{
    listedHTML=`<span><i class="fa fa-trash-o de" data-index="0" id="${ind}" onclick="deleted(id)" style="font-size:24px"></i></span><li  class="design">${ele}</li><br>`;
    mHTML+=listedHTML;
    ind++;
}

var arr=localStorage.getItem("todo");
    var todoObj;
    if(arr==null){
        todoObj=[];
    }else{
        todoObj=JSON.parse(arr);
    }
    ind=0;
    todoObj.forEach(listed);
    element.innerHTML=mHTML;

add.addEventListener('click',()=>{
    console.log("Hello added");
    var ele=new_item.value;
    var arr=localStorage.getItem("todo");
    var todoObj;
    if(arr==null){
        todoObj=[];
    }else{
        todoObj=JSON.parse(arr);
    }
    if(!todoObj.includes(ele)){
        todoObj.push(ele);
    }else{
        alert("Item already exists");
    }
    localStorage.setItem("todo",JSON.stringify(todoObj));
    new_item.value="";
    mHTML="";
    ind=0;
    todoObj.forEach(listed);
    element.innerHTML=mHTML;
})

function deleted(i){
   
    var arr=localStorage.getItem("todo");
    
     if(arr==null){
        todoObj=[];
    }else{
        arr.slice(i,1);
        todoObj=JSON.parse(arr);
    }
    // console.log(todoObj);
    // console.log(todoObj.splice(i,1))
    todoObj.splice(i,1)
    // console.log(todoObj);
    localStorage.setItem("todo",JSON.stringify(todoObj));
    mHTML="";
    ind=0;
    todoObj.forEach(listed);
    element.innerHTML=mHTML;
}