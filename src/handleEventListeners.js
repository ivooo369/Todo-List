const homeButton = document.querySelector('#home-button');
const menuToggle = document.querySelector('#menu-toggle');
const allTasksPage = document.querySelector('#all-tasks-page');
const todayTasksPage = document.querySelector('#today-tasks-page');
const weekTasksPage = document.querySelector('#week-tasks-page');
const allNotesPage = document.querySelector('#all-notes-page');
const allTasksButton = document.querySelector('#all-tasks-button');
const todayTasksButton = document.querySelector('#today-tasks-button');
const weekTasksButton = document.querySelector('#week-tasks-button');
const allNotesButton = document.querySelector('#all-notes-button');
const menuContainer = document.querySelector('.menu-container');
const pages = document.querySelectorAll('.pages');
const createButton = document.querySelector('.create-button');
const creationWindow = document.querySelector('.creation-window');
const overlay = document.querySelector(".overlay");
const creationWindowCloseButton = document.querySelector('#creation-window-close-button');
const todoButton = document.querySelector('#todo-button');
const projectButton = document.querySelector('#project-button');
const noteButton = document.querySelector('#note-button');
const todoForm = document.querySelector('#todo-form');
const projectForm = document.querySelector('#project-form');
const noteForm = document.querySelector('#note-form');

export function handleEventListeners() {
    homeButton.addEventListener('click', () => {
        allTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    menuToggle.addEventListener('click', () => {
        menuContainer.classList.toggle('hidden-menu');
        pages.forEach(page => {
            page.classList.toggle('pages-full');
        });
    });

    allTasksButton.addEventListener('click', () => {
        allTasksButton.classList.add('menu-button-active');
        todayTasksButton.classList.remove('menu-button-active');
        weekTasksButton.classList.remove('menu-button-active');
        allNotesButton.classList.remove('menu-button-active');
        allTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    todayTasksButton.addEventListener('click', () => {
        todayTasksButton.classList.add('menu-button-active');
        allTasksButton.classList.remove('menu-button-active');
        weekTasksButton.classList.remove('menu-button-active');
        allNotesButton.classList.remove('menu-button-active');
        todayTasksPage.style.display = 'flex';
        allTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    weekTasksButton.addEventListener('click', () => {
        weekTasksButton.classList.add('menu-button-active');
        allTasksButton.classList.remove('menu-button-active');
        todayTasksButton.classList.remove('menu-button-active');
        allNotesButton.classList.remove('menu-button-active');
        weekTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        allTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    allNotesButton.addEventListener('click', () => {
        allNotesButton.classList.add('menu-button-active');
        allTasksButton.classList.remove('menu-button-active');
        todayTasksButton.classList.remove('menu-button-active');
        weekTasksButton.classList.remove('menu-button-active');
        allNotesPage.style.display = 'flex';
        weekTasksPage.style.display = 'none';
        todayTasksPage.style.display = 'none';
        allTasksPage.style.display = 'none';
    });

    createButton.addEventListener('click', () => {
        creationWindow.classList.add('open-creation-window');
        todoButton.classList.add('selection-button-active');
        overlay.style.display = 'block';
    });

    creationWindowCloseButton.addEventListener('click', () => {
        creationWindow.classList.remove('open-creation-window');
        projectButton.classList.remove('selection-button-active');
        noteButton.classList.remove('selection-button-active');
        overlay.style.display = 'none';
        todoForm.style.display = 'flex';
        projectForm.style.display = 'none';
        noteForm.style.display = 'none';
    });

    todoButton.addEventListener('click', () => {
        todoForm.style.display = 'flex';
        projectForm.style.display = 'none';
        noteForm.style.display = 'none';
        todoButton.classList.add('selection-button-active');
        projectButton.classList.remove('selection-button-active');
        noteButton.classList.remove('selection-button-active');
    });

    projectButton.addEventListener('click', () => {
        projectForm.style.display = 'flex';
        todoForm.style.display = 'none';
        noteForm.style.display = 'none';
        projectButton.classList.add('selection-button-active');
        todoButton.classList.remove('selection-button-active');
        noteButton.classList.remove('selection-button-active');
    });

    noteButton.addEventListener('click', () => {
        noteForm.style.display = 'flex';
        todoForm.style.display = 'none';
        projectForm.style.display = 'none';
        noteButton.classList.add('selection-button-active');
        todoButton.classList.remove('selection-button-active');
        projectButton.classList.remove('selection-button-active');
    });
}
