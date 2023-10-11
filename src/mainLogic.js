import { containerCreator } from '.';

export const Task = () => {
    const tasksArray = [];
    const taskTitlesArray = [];

    function taskFactory(title, description, dueDate, project, priority, isDone = false) {
        return { title, description, dueDate, project, priority, isDone };
    }

    function addTask(newTask) {
        tasksArray.push(newTask);
        taskTitlesArray.push(newTask.title);

        console.log('Updated tasksArray:', tasksArray);
        console.log('Updated taskTitlesArray:', taskTitlesArray);
    }

    function deleteTask(taskToDelete) {
        const indexToDelete = parseInt(taskToDelete.getAttribute('data-task'), 10);
        const taskContainers = document.querySelectorAll('.task-container');
        const taskTitles = document.querySelectorAll('.task-title');
        const taskDueDates = document.querySelectorAll('.task-date');
        tasksArray.splice(indexToDelete, 1);
        taskTitlesArray.splice(indexToDelete, 1);
        taskContainers.forEach((task, index) => {
            task.setAttribute('data-task', index);
        });
        taskTitles.forEach((task, index) => {
            task.setAttribute('data-task-title', index);
        });
        taskDueDates.forEach((task, index) => {
            task.setAttribute('data-task-date', index);
        });

        console.log('Updated tasksArray:', tasksArray);
    }

    function editTask(chosenTask, newTitle, newDescription, newDueDate, newPriority) {
        const indexToEdit = parseInt(chosenTask.getAttribute('data-task'), 10);
        const taskToEdit = tasksArray[indexToEdit];
        taskToEdit.title = newTitle;
        taskToEdit.description = newDescription;
        taskToEdit.dueDate = newDueDate;
        taskToEdit.priority = newPriority;
        console.log(indexToEdit);
        taskTitlesArray.splice(indexToEdit, 1, newTitle);
        tasksArray.splice(indexToEdit, 1, taskToEdit);

        console.log('Updated tasksArray:', tasksArray);
    }

    function createNewTask() {
        const creationTaskForm = document.querySelector('#creation-task-form');
        const taskTitleInput = document.querySelector('#task-title-input');
        const taskDescriptionInput = document.querySelector('#task-description-input');
        const taskDueDateInput = document.querySelector('#task-date-input');
        const taskProjectInput = document.querySelector('#task-project-input');
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTask = taskFactory(taskTitleInput.value, taskDescriptionInput.value, taskDueDateInput.value, taskProjectInput.value, taskPriorityInput.value);
        addTask(newTask);
        creationTaskForm.reset();
    }

    function editChosenTask(chosenTask, newTitle, newDueDate, newPriority) {
        const editTaskTitleInput = document.querySelector('#edit-task-title-input');
        const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
        const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
        const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
        const taskTitle = document.querySelector(`[data-task-title="${chosenTask.getAttribute('data-task')}"]`);
        const taskDueDate = document.querySelector(`[data-task-date="${chosenTask.getAttribute('data-task')}"]`);
        taskTitle.setAttribute('data-task-title', chosenTask.getAttribute('data-task'));
        taskDueDate.setAttribute('data-task-date', chosenTask.getAttribute('data-task'));
        editTask(chosenTask, editTaskTitleInput.value, editTaskDescriptionInput.value, editTaskDueDateInput.value, editTaskPriorityInput.value);
        taskTitle.textContent = newTitle;
        taskDueDate.textContent = newDueDate;
        containerCreator.setNewTaskColor(chosenTask, newPriority);
    }

    function deleteChosenTask(chosenTask) {
        deleteTask(chosenTask);
    }

    return { createNewTask, editChosenTask, deleteChosenTask, tasksArray, taskTitlesArray };
};

export const Project = () => {
    const projectsArray = [];

    function projectFactory(title) {
        return { title };
    }

    function addProject(newProject) {
        projectsArray.push(newProject);
        console.log(projectsArray);
    }

    function createNewProject() {
        const projectForm = document.querySelector('#project-form');
        const projectTitleInput = document.querySelector('#project-title-input');
        const newProject = projectFactory(projectTitleInput.value);
        addProject(newProject);
        projectForm.reset();
    }

    return { createNewProject, projectsArray };
};

export const Note = () => {
    const notesArray = [];

    function noteFactory(title, description) {
        return { title, description };
    }

    function addNote(newNote) {
        notesArray.push(newNote);
        console.log(notesArray);
    }

    function createNewNote() {
        const noteForm = document.querySelector('#note-form');
        const noteTitleInput = document.querySelector('#note-title-input');
        const noteDescriptionInput = document.querySelector('#note-description-input');
        const newNote = noteFactory(noteTitleInput.value, noteDescriptionInput.value);
        addNote(newNote);
        noteForm.reset();
    }

    return { createNewNote, notesArray };
};




