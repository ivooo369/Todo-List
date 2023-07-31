export const taskContainer = {
    tasksArray: [],
};

export const taskFactory = (title, description, dueDate, project, priority, isDone = false) => {
    return { title, description, dueDate, project, priority, isDone };
};

export const addTask = (newTask) => {
    const allTasksArray = taskContainer.tasksArray;
    allTasksArray.push(newTask);
    console.log(allTasksArray);
};

// for (let i = 0; i < allTasksArray.length; i++) {
//     allTasksArray.pop(allTasksArray[i]);
// }

// console.log(allTasksArray);
