const btn = document.querySelector("#btn")

function handleLogout(){
    localStorage.removeItem("name");
    loginForm.className = "";
    loginOk.className="hidden";
    logout.className="hidden";
    todolock.className = "container_todoLock";
    todos.className="hidden";
}

btn.addEventListener("click",handleLogout);