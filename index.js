function addTasks() {
    const taskL = document.getElementById("taskContainer");
    const newTask = document.createElement("textarea");

    taskL.appendChild(newTask);
}

function deleteTasks() {
    const taskL = document.getElementById("taskContainer");
    taskL.removeChild(taskL.lastChild);
}