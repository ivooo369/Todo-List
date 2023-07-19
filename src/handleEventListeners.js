export function handlePagesEventListeners() {
    const allTasksPage = document.querySelector('#all-tasks-page');
    const todayTasksPage = document.querySelector('#today-tasks-page');
    const weekTasksPage = document.querySelector('#week-tasks-page');
    const allNotesPage = document.querySelector('#all-notes-page');

    const allTasksButton = document.querySelector('#all-tasks-button');
    const todayTasksButton = document.querySelector('#today-tasks-button');
    const weekTasksButton = document.querySelector('#week-tasks-button');
    const allNotesButton = document.querySelector('#all-notes-button');

    allTasksButton.addEventListener('click', () => {
        allTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    todayTasksButton.addEventListener('click', () => {
        todayTasksPage.style.display = 'flex';
        allTasksPage.style.display = 'none';
        weekTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    weekTasksButton.addEventListener('click', () => {
        weekTasksPage.style.display = 'flex';
        todayTasksPage.style.display = 'none';
        allTasksPage.style.display = 'none';
        allNotesPage.style.display = 'none';
    });

    allNotesButton.addEventListener('click', () => {
        allNotesPage.style.display = 'flex';
        weekTasksPage.style.display = 'none';
        todayTasksPage.style.display = 'none';
        allTasksPage.style.display = 'none';
    });
}
