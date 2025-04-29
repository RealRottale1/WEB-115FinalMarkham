const addTaskDiv = document.getElementById("addTaskDiv")
const taskmanagerDiv = document.getElementById("taskmanager")
const taskNameInput = document.getElementById("taskName")
const highPriorityButton = document.getElementById("highPriority")
const addTaskButton = document.getElementById("addTask")

const allTask = [];

addTaskButton.addEventListener("click", function() {
    if (taskNameInput.value == "") {
        alert("Please input a valid task name!")
        return
    } 

    allTask.push({
        id: allTask.length+1,
        name: (taskNameInput.value),
        priority: "High",
        isImportant: (highPriorityButton.checked),
        isCompleted: false,
        date: Date.UTC()
        }
    )

    console.log(JSON.stringify(allTask))
    const currentTask = allTask.length-1

    const newDiv = document.createElement("div")
    newDiv.id="taskItem"
    if (allTask[currentTask].isImportant) {
        newDiv.style.backgroundColor = "red"
    }

    const divName = document.createElement("p")
    divName.textContent = allTask[currentTask].name
    divName.id = "divName"

    const divDate = document.createElement("p")
    divDate.textContent = allTask[currentTask].date
    divDate.id = "divDate"

    const doneDiv = document.createElement("div")
    doneDiv.id = "doneDiv"
    const doneButton = document.createElement("input")
    doneButton.type = "checkbox"
    const doneText = document.createElement("p")
    doneText.textContent = "Done"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.id = "deleteButton"

    newDiv.appendChild(divName)
    newDiv.appendChild(divDate)
    doneDiv.appendChild(doneButton)
    doneDiv.appendChild(doneText)
    newDiv.appendChild(doneDiv)
    newDiv.appendChild(deleteButton)
    taskmanagerDiv.appendChild(newDiv)

    doneButton.addEventListener("click", function() {
        allTask[currentTask].isCompleted = doneButton.checked
        divName.style.textDecoration = (doneButton.checked ? "line-through": "none")
        divDate.style.textDecoration = (doneButton.checked ? "line-through": "none")

    })
    deleteButton.addEventListener("click", function() {
        taskmanagerDiv.removeChild(newDiv)
    })
})