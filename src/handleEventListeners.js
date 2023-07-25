const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
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

export function handleEventListeners() {
    homeButton.addEventListener('click', () => {
        allTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    menuButton.addEventListener('click', () => {
        menuContainer.classList.toggle('hidden-menu');
        pages.forEach(page => {
            page.classList.toggle('pages-full');
        });
    });

    allTasksButton.addEventListener('click', () => {
        allTasksButton.classList.add('active');
        todayTasksButton.classList.remove('active');
        weekTasksButton.classList.remove('active');
        allNotesButton.classList.remove('active');
        allTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    todayTasksButton.addEventListener('click', () => {
        todayTasksButton.classList.add('active');
        allTasksButton.classList.remove('active');
        weekTasksButton.classList.remove('active');
        allNotesButton.classList.remove('active');
        todayTasksPage.style.display = 'flex';
        allTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    weekTasksButton.addEventListener('click', () => {
        weekTasksButton.classList.add('active');
        allTasksButton.classList.remove('active');
        todayTasksButton.classList.remove('active');
        allNotesButton.classList.remove('active');
        weekTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        allTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    allNotesButton.addEventListener('click', () => {
        allNotesButton.classList.add('active');
        allTasksButton.classList.remove('active');
        todayTasksButton.classList.remove('active');
        weekTasksButton.classList.remove('active');
        allNotesPage.style.display = 'flex';
        weekTasksPage.style.display = 'none';
        todayTasksPage.style.display = 'none';
        allTasksPage.style.display = 'none';
    });
}
