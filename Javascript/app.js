const todoBtn = document.getElementById('todo-btn');
let todoInput = document.getElementById('todo-input');
let todoUl = document.getElementById('todo');
let items = [];

let itemsFromLocalStorage =JSON.parse(localStorage.getItem("items")) ;
if(itemsFromLocalStorage){
    items = itemsFromLocalStorage;
    render(items);
}

todoBtn.addEventListener('click', function(){

    if(todoInput.value){
        todoUl.innerHTML = "";
        items.push(todoInput.value);
        todoInput.value = "";
        saveToLocalStorage();
    } 
});
  function remove(e){
    let approved = confirm("Are you sure you want to delete the item, click ok to confirm");
    if (approved){

        for(let i = 0; i < items.length; i++){
            if(items[i]==e.parentElement.innerText){
                items.splice(i,1);
                localStorage.removeItem("items");
                saveToLocalStorage();
            }
            
        }
    }
  }

  function  saveToLocalStorage(){
    let   todo = JSON.stringify(items);
    localStorage.setItem("items", todo);
    items = localStorage.getItem("items");
    items = JSON.parse(items);
    render(items); 
}

 function render(enter){
       let newValues = "";
       todoUl.innerHTML = "";
    for(let i = 0; i < enter.length; i++){
        newValues +=        `
        <li>
           <p> ${enter[i]} </p>
          <button onclick="remove(this)"> <i class="far fa-window-close"></i> </button>
        </li>  
       `;
    }
    todoUl.innerHTML += newValues;
 }
