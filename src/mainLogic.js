import { closeCreationWindow } from "./domManipulation";

const taskForm = document.querySelector('#task-form');
const projectForm = document.querySelector('#project-form');
const noteForm = document.querySelector('#note-form');
const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskProjectInput = document.querySelector('#task-project-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');

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

export function addNewTask() {
    const newTask = taskObject.taskFactory(taskTitleInput.value, taskDescriptionInput.value, taskDueDateInput.value, taskProjectInput.value, taskPriorityInput.value);
    taskObject.addTask(newTask);
    taskForm.reset();
    closeCreationWindow();
}

export function addNewProject() {
    const newProject = projectObject.projectFactory(projectTitleInput.value);
    projectObject.addProject(newProject);
    projectForm.reset();
    closeCreationWindow();
}

export function addNewNote() {
    const newNote = noteObject.noteFactory(noteTitleInput.value, noteDescriptionInput.value);
    noteObject.addNote(newNote);
    noteForm.reset();
    closeCreationWindow();
}
