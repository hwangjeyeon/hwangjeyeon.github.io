const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#name");
const loginOk = document.querySelector("#login_ok");
const todolock = document.getElementById("locker");
const todos = document.getElementById("todos");
const logout = document.getElementById("logout");

function onLoginSubmit(event) {
    //event.preventDefault();
    const name = loginInput.value
    localStorage.setItem("name",name);
}
  


loginForm.addEventListener("submit",onLoginSubmit);
const savedUsername = localStorage.getItem("name");

if(savedUsername != null){
    loginForm.className = "hidden";
    loginOk.className="";
    todolock.className="hidden";
    todos.className="";
    logout.className="";
    loginOk.innerText=`안녕하세요 ${savedUsername}!`
}else{
    
}

    
