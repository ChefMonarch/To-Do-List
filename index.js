// Getting references to DOM elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTemplate = document.querySelector(".task");

// Add new task
addTaskBtn.addEventListener("click", () => {
    // Clone the template and append to body
    const clone = taskTemplate.cloneNode(true);
    // Create a unique ID for the textarea
    clone.classList.remove("done");
    clone.querySelector(".inputArea").value = "";
    document.body.appendChild(clone);
});

// Handle Done / Delete using event delegation
document.body.addEventListener("click", (e) => {

    // DONE
    if (e.target.classList.contains("doneBtn")) {
        const task = e.target.closest(".task");
        task.classList.toggle("done");
    }

    // DELETE
    if (e.target.classList.contains("deleteBtn")) {
        e.target.closest(".task").remove();
    }
});