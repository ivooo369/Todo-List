import titleImageSrc from './images/checklist-image.png';
import noTasksImageSrc from './images/no-tasks-image.png';
import noNotesImageSrc from './images/no-notes-image.png';
import { taskObject, projectObject, noteObject } from './mainLogic';

const taskForm = document.querySelector('#task-form');
const projectForm = document.querySelector('#project-form');
const noteForm = document.querySelector('#note-form');
const overlay = document.querySelector(".overlay");
const taskButton = document.querySelector('#task-button');
const projectButton = document.querySelector('#project-button');
const noteButton = document.querySelector('#note-button');
const creationWindow = document.querySelector('.creation-window');
const allTasksButton = document.querySelector('#all-tasks-button');
const todayTasksButton = document.querySelector('#today-tasks-button');
const weekTasksButton = document.querySelector('#week-tasks-button');
const allNotesButton = document.querySelector('#all-notes-button');
const allTasksPage = document.querySelector('#all-tasks-page');
const todayTasksPage = document.querySelector('#today-tasks-page');
const weekTasksPage = document.querySelector('#week-tasks-page');
const allNotesPage = document.querySelector('#all-notes-page');
const menuContainer = document.querySelector('.menu-container');
const pages = document.querySelectorAll('.pages');
const taskTitle = document.querySelector('#task-title-textarea');
const taskDescription = document.querySelector('#task-description-textarea');
const taskDueDate = document.querySelector('#date');
const taskProject = document.querySelector('#project');
const taskPriority = document.querySelector('#priority');
const projectTitle = document.querySelector('#project-title-textarea');
const noteTitle = document.querySelector('#note-title-textarea');
const noteDescription = document.querySelector('#note-description-textarea');

export function createImages() {
    createTitleImage();
    createNoTasksImage();
    createNoNotesImage();
}

function createTitleImage() {
    const titleContainer = document.querySelector('.title-container');
    const title = document.querySelector('.title');
    const titleImage = new Image();
    titleImage.src = titleImageSrc;
    titleImage.alt = 'Checklist';
    titleImage.classList.add('title-image');
    titleContainer.insertBefore(titleImage, title);
}

function createNoTasksImage() {
    const listsOfTasks = document.querySelectorAll('.lists-of-tasks');
    listsOfTasks.forEach(list => {
        const noTasksImage = new Image();
        noTasksImage.src = noTasksImageSrc;
        noTasksImage.alt = 'No Tasks';
        noTasksImage.classList.add('no-tasks-image');
        list.appendChild(noTasksImage);
    });
}

function createNoNotesImage() {
    const listOfNotes = document.querySelector('.list-of-notes');
    const noNotesImage = new Image();
    noNotesImage.src = noNotesImageSrc;
    noNotesImage.alt = 'No Tasks';
    noNotesImage.classList.add('no-tasks-image');
    listOfNotes.appendChild(noNotesImage);
}

export function closeCreationWindow() {
    creationWindow.classList.remove('open-creation-window');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
    overlay.style.display = 'none';
    taskForm.style.display = 'flex';
    projectForm.style.display = 'none';
    noteForm.style.display = 'none';
}

export function switchToAllTasksView() {
    allTasksButton.classList.add('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    allTasksPage.style.display = 'flex';
    todayTasksPage.style.display = 'none';
    weekTasksPage.style.display = 'none';
    allNotesPage.style.display = 'none';
}

export function switchToTodayTasksView() {
    todayTasksButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    todayTasksPage.style.display = 'flex';
    allTasksPage.style.display = 'none';
    weekTasksPage.style.display = 'none';
    allNotesPage.style.display = 'none';
}

export function switchToWeekTasksView() {
    weekTasksButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    weekTasksPage.style.display = 'flex';
    todayTasksPage.style.display = 'none';
    allTasksPage.style.display = 'none';
    allNotesPage.style.display = 'none';
}

export function switchToAllNotesView() {
    allNotesButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesPage.style.display = 'flex';
    weekTasksPage.style.display = 'none';
    todayTasksPage.style.display = 'none';
    allTasksPage.style.display = 'none';
}

export function toggleMenuVisibility() {
    menuContainer.classList.toggle('hidden-menu');
    pages.forEach(page => {
        page.classList.toggle('pages-full');
    });
}

export function openCreationWindow() {
    creationWindow.classList.add('open-creation-window');
    taskButton.classList.add('selection-button-active');
    overlay.style.display = 'block';
}

export function showTaskForm() {
    taskForm.style.display = 'flex';
    projectForm.style.display = 'none';
    noteForm.style.display = 'none';
    taskButton.classList.add('selection-button-active');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

export function showProjectForm() {
    projectForm.style.display = 'flex';
    taskForm.style.display = 'none';
    noteForm.style.display = 'none';
    projectButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

export function showNoteForm() {
    noteForm.style.display = 'flex';
    taskForm.style.display = 'none';
    projectForm.style.display = 'none';
    noteButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    projectButton.classList.remove('selection-button-active');
}

export function createNewTask(e) {
    e.preventDefault();
    const newTask = taskObject.taskFactory(taskTitle.value, taskDescription.value, taskDueDate.value, taskProject.value, taskPriority.value);
    taskObject.addTask(newTask);
    taskForm.reset();
    closeCreationWindow();
}

export function createNewProject(e) {
    e.preventDefault();
    const newProject = projectObject.projectFactory(projectTitle.value);
    projectObject.addProject(newProject);
    projectForm.reset();
    closeCreationWindow();
}

export function createNewNote(e) {
    e.preventDefault();
    const newNote = noteObject.noteFactory(noteTitle.value, noteDescription.value);
    noteObject.addNote(newNote);
    noteForm.reset();
    closeCreationWindow();
}

