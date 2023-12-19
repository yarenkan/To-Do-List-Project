const form = document.querySelector("#todoAddForm");
const input = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

let todos = []


runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo) //forma bir sumbit yapılırsa addTodo çalıssın

    document.addEventListener("DOMContentLoaded", pageLoaded) //documente event verdik, sayfam yüklendiğinde
    secondCardBody.addEventListener("click", removeTodoToUI); removeTodoToUI
}

/*todo ekleme*/
function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen boş bırakmayınız!");
    } else {
        //Arayüze ekleme
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo Eklendi.");
    }

    //storage ekleme
    e.preventDefault();
}

function addTodoToUI(newTodo) {
    /*
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
                        */
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = ""; //ekleme işlemi yapıldıktan sonra tekrar içini boşalttık

}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}


