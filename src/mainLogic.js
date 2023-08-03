import { closeCreationWindow } from "./domManipulation";

const taskForm = document.querySelector('#task-form');
const projectForm = document.querySelector('#project-form');
const noteForm = document.querySelector('#note-form');
const taskTitle = document.querySelector('#task-title-textarea');
const taskDescription = document.querySelector('#task-description-textarea');
const taskDueDate = document.querySelector('#date');
const taskProject = document.querySelector('#project');
const taskPriority = document.querySelector('#priority');
const projectTitle = document.querySelector('#project-title-textarea');
const noteTitle = document.querySelector('#note-title-textarea');
const noteDescription = document.querySelector('#note-description-textarea');

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

export function addNewTask(e) {
    e.preventDefault();
    const newTask = taskObject.taskFactory(taskTitle.value, taskDescription.value, taskDueDate.value, taskProject.value, taskPriority.value);
    taskObject.addTask(newTask);
    taskForm.reset();
    closeCreationWindow();
}

export function addNewProject(e) {
    e.preventDefault();
    const newProject = projectObject.projectFactory(projectTitle.value);
    projectObject.addProject(newProject);
    projectForm.reset();
    closeCreationWindow();
}

export function addNewNote(e) {
    e.preventDefault();
    const newNote = noteObject.noteFactory(noteTitle.value, noteDescription.value);
    noteObject.addNote(newNote);
    noteForm.reset();
    closeCreationWindow();
}
