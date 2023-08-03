import { closeCreationWindow, openCreationWindow, showNoteForm, showProjectForm, showTaskForm, switchToAllNotesView, switchToAllTasksView, switchToTodayTasksView, switchToWeekTasksView, toggleMenuVisibility, createNewTaskContainer, createNewNoteContainer, handlePageImageDisplaying } from "./domManipulation";
import { addNewTask, addNewProject, addNewNote } from "./mainLogic";

const homeButton = document.querySelector('#home-button');
const menuToggle = document.querySelector('#menu-toggle');
const allTasksButton = document.querySelector('#all-tasks-button');
const todayTasksButton = document.querySelector('#today-tasks-button');
const weekTasksButton = document.querySelector('#week-tasks-button');
const allNotesButton = document.querySelector('#all-notes-button');
const creationButton = document.querySelector('.creation-button');
const creationWindowCloseButton = document.querySelector('#creation-window-close-button');
const taskButton = document.querySelector('#task-button');
const projectButton = document.querySelector('#project-button');
const noteButton = document.querySelector('#note-button');
const addTaskSubmitButton = document.querySelector('#add-task-submit-button');
const addProjectSubmitButton = document.querySelector('#add-project-submit-button');
const addNoteSubmitButton = document.querySelector('#add-note-submit-button');

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
    addTaskSubmitButton.addEventListener('click', (e) => {
        createNewTaskContainer();
        addNewTask(e);
        handlePageImageDisplaying();
    });
    addProjectSubmitButton.addEventListener('click', (e) => addNewProject(e));
    addNoteSubmitButton.addEventListener('click', (e) => {
        createNewNoteContainer();
        addNewNote(e);
        handlePageImageDisplaying();
    });
}
