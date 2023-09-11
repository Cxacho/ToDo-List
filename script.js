const inputFields = {
    'todo-items': document.getElementById("todo-new-task"),
    'doing-items': document.getElementById("doing-new-task"),
    'done-items': document.getElementById("done-new-task"),
  };
  
  const inputDivs = {
    'todo-items': document.getElementById("todo-new-task-div"),
    'doing-items': document.getElementById("doing-new-task-div"),
    'done-items': document.getElementById("done-new-task-div"),
  };
  
  const addButtons = {
    'todo-items': document.getElementById("todo-add-button"),
    'doing-items': document.getElementById("doing-add-button"),
    'done-items': document.getElementById("done-add-button"),
  };
  
  const taskLists = {
    'todo-items': document.getElementById("todo-items"),
    'doing-items': document.getElementById("doing-items"),
    'done-items': document.getElementById("done-items"),
  };

  const cancelButtons = {

    'todo-cancel': document.getElementById("todo-cancel"),
    'doing-cancel': document.getElementById("doing-cancel"),
    'done-cancel': document.getElementById("done-cancel"),
  };

  function addItem(id) {
    const inputField = inputFields[id];
    const inputDiv = inputDivs[id];
    const addButton = addButtons[id];
    const taskList = taskLists[id];
  
    const taskText = inputField.value.trim();
  
    if (taskText === "") {
      inputField.focus();
      return;
    }
  
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
  
    inputField.value = "";
    inputDiv.style.display = "none";
    addButton.style.display = "block";
  }
  function addTask(id) {
    const inputDiv = inputDivs[id];
    const addButton = addButtons[id];
  
    inputDiv.style.display = "flex";
    addButton.style.display = "none";
  }
  function cancelNewTask(id){
    const addButton = addButtons[id];
    const inputDiv = inputDivs[id];
    const inputField = inputFields[id];

    inputDiv.style.display = "none";
    addButton.style.display = "block";
    inputField.value = "";
  }
