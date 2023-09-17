const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todoValue");
const toDoList = document.querySelector("#todo-list")


let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos)=> toDos.today != parseInt(li.id));
    saveToDos();
}


function paintTodo(newTodoList){
    const li = document.createElement("li");
    li.id = newTodoList.today;
    const span = document.createElement("span");
    span.innerText = newTodoList.name;
    const button = document.createElement("button");
    const line = document.createElement("hr");
    button.classList="design_btn"
    button.innerText="Done"
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(line);
    toDoList.appendChild(li);
}



function handleSubmit(event) {
  event.preventDefault();
  const Todo = toDoInput.value;
  toDoInput.value = "";
  const newTodoList = {
    name: Todo,
    today: Date.now()
  };
  if(toDos.length<6){
    toDos.push(newTodoList);
    paintTodo(newTodoList);
  }else{
    alert("더이상 추가할 수 없습니다. 등록한 일들을 먼저 하세요");
  }
  
}


toDoForm.addEventListener("submit",handleSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos != null){
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}