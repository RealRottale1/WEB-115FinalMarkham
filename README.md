1. I created the html elements that would take in user input
2. I created an object and assigned the user input to the keys of the object
3. I added the object to the array of task
4. I established an event handler to detect when the task was completed
    4. When a task was completed I applied a css rule to cross the text out
5. I established an event handler to detect when the task was removed
    5. I realised I cant use indexes to reference the task as removing an entry from the array would shift the index down by 1
    5. I adjusted the task id to use a global variable that never repeated
    5. I added a local variable to store the current task id
    5. I created a function to return the index of the first task that had the same task id as the current task
    5. I removed the data at this index
6. I set up the css and made the html look good

One major challenge I had while making this project was how to handle the removal of data from the task array. Simply splicing the data would result in the indexes shifting which would ruin the way I referenced the task data. I fixed this by creating a global variable which would never repeat and would allow each task to have a unique id. I then added a local variable which stores the current value of the global variable when a task is created. This allows the code to know what task id it has. I then created a function to return the index of the first task that had it's own task id (because task id's do not repeat it would always return the index of it's own task) and used this index to splice the data from the task array.