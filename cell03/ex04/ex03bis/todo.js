$(document).ready(() => {
  const $btnAdd = $("#addTask");
  const $ft_list = $("#ft_list");

  $(window).on("load", () => {
    loadTasks();
  });

  $btnAdd.on("click", () => {
    addTask();
  });

  function addTask() {
    const promptInput = window.prompt("Task Name: ");
    if (promptInput === "") {
      return null;
    }
    const $task = $("<div></div>")
      .append(document.createTextNode(promptInput)) 
      .addClass("taskItem");

    $($task).on("click", () => {
      deleteTask($task);
    });

    $ft_list.append($task);

    saveTasks();
  }

  function deleteTask(task) {
    let confirmTask = confirm("Delete Task?");

    if (confirmTask) {
      task.remove();
      saveTasks();
    }
  }

  function saveTasks() {
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        Array.from(ft_list.children).map((task) => task.textContent)
      )
    );
  }

  function loadTasks() {
    const tasks = jQuery.parseJSON(localStorage.getItem("tasks"));
    if (tasks) {
      tasks.forEach((taskText) => {
        const $task = $("<div></div>").text(taskText).addClass("taskItem");

        $task.on("click", () => {
          let confirmTask = confirm("Delete Task?");

          if (confirmTask) {
            $task.remove();
            saveTasks();
          }
        });

        $ft_list.append($task);
      });
    }
  }
});
