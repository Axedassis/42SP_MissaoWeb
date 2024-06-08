const btnAdd = document.querySelector("#addTask");
const ft_list = document.querySelector("#ft_list");

window.addEventListener("load", () => {
    loadTasks();
});

if(btnAdd){
    btnAdd.addEventListener("click", () => {
        addTask();
    });
}

function addTask(){
    const promptInput = window.prompt("Task Name: ");
    const task = document.createElement("div");

    if(promptInput === ""){
        return null;
    }

    const taskContent = document.createTextNode(promptInput);

    task.appendChild(taskContent);

    task.onclick = () => {
        removeTask(task);
    };
    task.classList = "taskItem";
    ft_list.appendChild(task);

    saveTasks();
}

function removeTask(task){
    let confirmTask = confirm("Delete Task?");

    if(confirmTask){
        ft_list.removeChild(task);
        saveTasks();
    }
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(Array.from(ft_list.children).map(task => task.textContent)));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            
            taskElement.textContent = task;
            taskElement.onclick = () => {

                removeTask(taskElement);
            };
            taskElement.classList = "taskItem";
            ft_list.appendChild(taskElement);
        });
    }
}
