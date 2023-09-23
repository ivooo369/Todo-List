import { setNewTaskColor } from "./domManipulation";

const creationTaskForm = document.querySelector('#creation-task-form');
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
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');

export const taskObject = {
    tasksArray: [],
    taskTitlesArray: [],

    taskFactory(title, description, dueDate, project, priority, isDone = false) {
        return { title, description, dueDate, project, priority, isDone };
    },

    addTask(newTask) {
        const allTasksArray = this.tasksArray;
        const allTaskTitlesArray = this.taskTitlesArray;
        allTasksArray.push(newTask);
        allTaskTitlesArray.push(newTask.title);

        console.log('Updated allTasksArray:', allTasksArray);
    },

    deleteTask(taskToDelete) {
        const allTasksArray = this.tasksArray;
        const allTaskTitlesArray = this.taskTitlesArray;
        const indexToDelete = parseInt(taskToDelete.getAttribute('data-task'), 10);
        const taskContainers = document.querySelectorAll('.new-task-container');
        const taskTitles = document.querySelectorAll('.new-task-title');
        const taskDueDates = document.querySelectorAll('.new-task-date');
        allTasksArray.splice(indexToDelete, 1);
        allTaskTitlesArray.splice(indexToDelete, 1);
        taskContainers.forEach((task, index) => {
            task.setAttribute('data-task', index);
        });
        taskTitles.forEach((task, index) => {
            task.setAttribute('data-task-title', index);
        });
        taskDueDates.forEach((task, index) => {
            task.setAttribute('data-task-date', index);
        });

        console.log('Updated allTasksArray:', allTasksArray);
    },

    editTask(chosenTask, newTitle, newDescription, newDueDate, newPriority) {
        const allTasksArray = this.tasksArray;
        const allTaskTitlesArray = this.taskTitlesArray;
        const indexToEdit = parseInt(chosenTask.getAttribute('data-task'), 10);
        const taskToEdit = allTasksArray[indexToEdit];
        taskToEdit.title = newTitle;
        taskToEdit.description = newDescription;
        taskToEdit.dueDate = newDueDate;
        taskToEdit.priority = newPriority;
        console.log(indexToEdit);
        allTaskTitlesArray.splice(indexToEdit, 1, newTitle);
        allTasksArray.splice(indexToEdit, 1, taskToEdit);

        console.log('Updated allTasksArray:', allTasksArray);
    }
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
    creationTaskForm.reset();
}

export function editChosenTask(chosenTask, newTitle, newDueDate, newPriority) {
    const taskTitle = document.querySelector(`[data-task-title="${chosenTask.getAttribute('data-task')}"]`);
    const taskDueDate = document.querySelector(`[data-task-date="${chosenTask.getAttribute('data-task')}"]`);
    taskTitle.setAttribute('data-task-title', chosenTask.getAttribute('data-task'));
    taskDueDate.setAttribute('data-task-date', chosenTask.getAttribute('data-task'));
    taskObject.editTask(chosenTask, editTaskTitleInput.value, editTaskDescriptionInput.value, editTaskDueDateInput.value, editTaskPriorityInput.value);
    taskTitle.textContent = newTitle;
    taskDueDate.textContent = newDueDate;
    setNewTaskColor(chosenTask, newPriority);
}

export function deleteChosenTask(chosenTask) {
    taskObject.deleteTask(chosenTask);
}

export function addNewProject() {
    const newProject = projectObject.projectFactory(projectTitleInput.value);
    projectObject.addProject(newProject);
    projectForm.reset();
}

export function addNewNote() {
    const newNote = noteObject.noteFactory(noteTitleInput.value, noteDescriptionInput.value);
    noteObject.addNote(newNote);
    noteForm.reset();
}

