export const taskObject = {
    tasksArray: [],

    taskFactory(title, description, dueDate, project, priority, isDone = false) {
        return { title, description, dueDate, project, priority, isDone };
    },

    addTask(newTask) {
        const allTasksArray = this.tasksArray;
        allTasksArray.push(newTask);
        console.log(allTasksArray);
    },
};

export const projectObject = {
    projectsArray: [],

    projectFactory(title) {
        return { title };
    },

    addProject(newProject) {
        const allProjectsArray = this.projectsArray;
        allProjectsArray.push(newProject);
        console.log(allProjectsArray);
    }
};

export const noteObject = {
    notesArray: [],

    noteFactory(title, description) {
        return { title, description };
    },

    addNote(newNote) {
        const allNotesArray = this.notesArray;
        allNotesArray.push(newNote);
        console.log(allNotesArray);
    }
};