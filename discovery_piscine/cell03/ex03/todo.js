let list = document.getElementById("ft_list");
let newButton = document.getElementById("new");

function loadTodo() {
    let cookie = document.cookie;
    if (cookie == "") {
        return;
    }
    let todos = JSON.parse(cookie);
    for (let i = 0; i < todos.length; i++) {
        addTodo(todos[i]);
    }
}

function saveTodo() {
    let todos = [];
    let items = document.querySelectorAll(".todo");
    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }
    document.cookie = JSON.stringify(todos) + "; max-age=31536000";
}

function addTodo(text) {
    let todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = text;
 
    todo.addEventListener("click", function () {
        let answer = confirm("Do you want to remove this to-do?");
        if (answer) {
            todo.remove();
            saveTodo();
        }
    });
    
    list.prepend(todo);
}

newButton.addEventListener("click", function () {
    let text = prompt("Enter a new To Do:");
    if (text != null && text.trim() != "") {
        addTodo(text);
        saveTodo();
    }
});

loadTodo();