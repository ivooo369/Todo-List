import { closeCreationWindow, closeEditWindow, openCreationWindow, openEditTaskWindow, showNoteForm, showProjectForm, showTaskForm, switchToAllNotesView, switchToAllTasksView, switchToTodayTasksView, switchToWeekTasksView, toggleMenuVisibility, createNewTaskContainer, createNewNoteContainer, handlePageImageDisplaying } from "./domManipulation";
import { addNewTask, addNewProject, addNewNote, editChosenTask, deleteChosenTask } from "./mainLogic";
import { validateCreationTaskForm, validateEditTaskForm, validateProjectForm, validateNoteForm, clearValidationMessage } from "./validation";

const homeButton = document.querySelector('#home-button');
const menuToggle = document.querySelector('#menu-toggle');
const allTasksButton = document.querySelector('#all-tasks-button');
const todayTasksButton = document.querySelector('#today-tasks-button');
const weekTasksButton = document.querySelector('#week-tasks-button');
const allNotesButton = document.querySelector('#all-notes-button');
const creationButton = document.querySelector('.creation-button');
const creationWindowCloseButton = document.querySelector('#creation-window-close-button');
const editWindowCloseButton = document.querySelector('#edit-window-close-button');
const taskButton = document.querySelector('#task-button');
const projectButton = document.querySelector('#project-button');
const noteButton = document.querySelector('#note-button');
const addTaskSubmitButton = document.querySelector('#add-task-submit-button');
const editTaskSubmitButton = document.querySelector('#edit-task-submit-button');
const addProjectSubmitButton = document.querySelector('#add-project-submit-button');
const addNoteSubmitButton = document.querySelector('#add-note-submit-button');
const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');
const listOfAllTasks = document.querySelector('#list-of-all-tasks');
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');

let chosenTask = '';

export function handleEventListeners() {
    homeButton.addEventListener('click', () => switchToAllTasksView());
    allTasksButton.addEventListener('click', () => switchToAllTasksView());
    menuToggle.addEventListener('click', () => toggleMenuVisibility());
    todayTasksButton.addEventListener('click', () => switchToTodayTasksView());
    weekTasksButton.addEventListener('click', () => switchToWeekTasksView());
    allNotesButton.addEventListener('click', () => switchToAllNotesView());
    creationButton.addEventListener('click', () => openCreationWindow());
    taskButton.addEventListener('click', () => showTaskForm());
    projectButton.addEventListener('click', () => showProjectForm());
    noteButton.addEventListener('click', () => showNoteForm());
    creationWindowCloseButton.addEventListener('click', () => closeCreationWindow());
    editWindowCloseButton.addEventListener('click', () => closeEditWindow());
    taskTitleInput.addEventListener('input', clearValidationMessage);
    taskDescriptionInput.addEventListener('input', clearValidationMessage);
    taskDueDateInput.addEventListener('input', clearValidationMessage);
    taskPriorityInput.addEventListener('input', clearValidationMessage);
    editTaskTitleInput.addEventListener('input', clearValidationMessage);
    editTaskDescriptionInput.addEventListener('input', clearValidationMessage);
    editTaskDueDateInput.addEventListener('input', clearValidationMessage);
    editTaskPriorityInput.addEventListener('input', clearValidationMessage);
    projectTitleInput.addEventListener('input', clearValidationMessage);
    noteTitleInput.addEventListener('input', clearValidationMessage);
    noteDescriptionInput.addEventListener('input', clearValidationMessage);
    addTaskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateCreationTaskForm()) {
            createNewTaskContainer();
            addNewTask();
            handlePageImageDisplaying();
            closeCreationWindow();
        }
    });
    listOfAllTasks.addEventListener('click', (e) => {
        const taskToEdit = e.target.closest('.new-task-container');
        const editButton = e.target.closest('.edit-button');
        chosenTask = taskToEdit;
        if (editButton) {
            openEditTaskWindow(chosenTask);
        }
    });
    editTaskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateEditTaskForm()) {
            editChosenTask(chosenTask, editTaskTitleInput.value, editTaskDueDateInput.value, editTaskPriorityInput);
            closeEditWindow();
        }
    });
    addProjectSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateProjectForm()) {
            addNewProject();
            closeCreationWindow();
        }
    });
    addNoteSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateNoteForm()) {
            createNewNoteContainer();
            addNewNote();
            handlePageImageDisplaying();
            closeCreationWindow();
        }
    });
    listOfAllTasks.addEventListener('click', (e) => {
        const taskToDelete = e.target.closest('.new-task-container');
        const deleteButton = e.target.closest('.delete-button');
        chosenTask = taskToDelete;
        if (deleteButton) {
            chosenTask.remove();
            deleteChosenTask(chosenTask);
        }
        handlePageImageDisplaying();
    });
}
