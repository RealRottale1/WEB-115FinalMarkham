// Get the html elements
const addTaskDiv = document.getElementById("addTaskDiv")
const taskmanagerDiv = document.getElementById("taskmanager")
const taskNameInput = document.getElementById("taskName")
const highPriorityButton = document.getElementById("highPriority")
const addTaskButton = document.getElementById("addTask")
const priorityMeter = document.getElementById("priorityMeter")

// Establish global variables
let globalTaskCounter = 0;
const allTask = [];

addTaskButton.addEventListener("click", function () {
    if (taskNameInput.value == "") { // Prevents invalid data entries
        alert("Please input a valid task name!")
        return
    }

    let taskCounter = globalTaskCounter; // Creates a local variable to store the current task id

    allTask.push({ // Adds a new task object to the array
        id: taskCounter,
        name: (taskNameInput.value),
        priority: priorityMeter.value,
        isImportant: (highPriorityButton.checked),
        isCompleted: false,
        date: Date() // Gets the current date
    })

    let currentTaskData = allTask[allTask.length - 1]

    console.log(JSON.stringify(allTask)) // Outputs the updated array

    // Creates the html elements that make up a new html task entry
    const newDiv = document.createElement("div")
    newDiv.id = "taskItem"
    if (currentTaskData.isImportant) { // Sets background color to red if the task is important
        newDiv.style.backgroundColor = "red"
        newDiv.style.borderColor = "darkred"
    }

    const divName = document.createElement("p") // Element for the task name
    divName.innerHTML = currentTaskData.name
    divName.id = "divName"

    const divDate = document.createElement("p") // Element for the task date
    divDate.innerHTML = currentTaskData.date
    divDate.id = "divDate"

    const divPriority = document.createElement("p") // Element for the task's priority
    divPriority.innerHTML = `Priority: ${currentTaskData.priority}`;
    divPriority.id = "divPriority"

    const doneDiv = document.createElement("div") // Element to allow the user to cross of a task if the task is complete
    doneDiv.id = "doneDiv"
    const doneButton = document.createElement("input")
    doneButton.type = "checkbox"
    const doneText = document.createElement("p")
    doneText.innerHTML = "Done"

    const deleteButton = document.createElement("button") // Element allows the user to delete the task if it is no longer needed
    deleteButton.innerHTML = "Delete"
    deleteButton.id = "deleteButton"

    // Appends the newly created html elements into the proper parents and assigns its parent to the taskmanagerDiv 
    newDiv.appendChild(divName)
    newDiv.appendChild(divDate)
    newDiv.appendChild(divPriority)
    doneDiv.appendChild(doneButton)
    doneDiv.appendChild(doneText)
    newDiv.appendChild(doneDiv)
    newDiv.appendChild(deleteButton)
    taskmanagerDiv.appendChild(newDiv)

    // Runs when done button is clicked
    doneButton.addEventListener("click", function () {
        currentTaskData.isCompleted = doneButton.checked
        divName.style.textDecoration = (doneButton.checked ? "line-through" : "none") // Applies a css property to cross out the text
        divDate.style.textDecoration = (doneButton.checked ? "line-through" : "none")
        divPriority.style.textDecoration = (doneButton.checked ? "line-through" : "none")
        console.log(JSON.stringify(allTask)) // Outputs updated data
    })

    // This function searches the task array for it's associated task. It then returns the index of the task
    function getMyIndex() {
        const allTaskLength = allTask.length
        for (let i = 0; i < allTaskLength; i++) {
            const task = allTask[i];
            if (task.id == taskCounter) {
                return i;
            }
        }
    }


    // Runs when the delete button is clicked
    deleteButton.addEventListener("click", function () {
        taskmanagerDiv.removeChild(newDiv) // Removes the html element displaying the task
        allTask.splice(getMyIndex(), 1)
        console.log(JSON.stringify(allTask)) // Outputs updated data
    })

    globalTaskCounter += 1 // Increments the globalTaskCounter by 1
})