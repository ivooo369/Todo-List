import { task, project, note, validation, imageHandler, creationWindow, editWindow, menu, containerCreator, menuEventListeners, creationWindowEventListeners, editWindowEventListeners, mainInterfaceEventListeners } from '.';

let chosenTask = '';

export const MenuEventListeners = () => {
    const homeButton = document.querySelector('#home-button');
    const allTasksButton = document.querySelector('#all-tasks-button');
    const menuToggle = document.querySelector('#menu-toggle');
    const todayTasksButton = document.querySelector('#today-tasks-button');
    const weekTasksButton = document.querySelector('#week-tasks-button');
    const allNotesButton = document.querySelector('#all-notes-button');
    const creationButton = document.querySelector('#creation-button');

    function handleMenuEventListeners() {
        homeButton.addEventListener('click', () => menu.switchToAllTasksView());
        allTasksButton.addEventListener('click', () => menu.switchToAllTasksView());
        menuToggle.addEventListener('click', () => menu.toggleMenuVisibility());
        todayTasksButton.addEventListener('click', () => menu.switchToTodayTasksView());
        weekTasksButton.addEventListener('click', () => menu.switchToWeekTasksView());
        allNotesButton.addEventListener('click', () => menu.switchToAllNotesView());
        creationButton.addEventListener('click', () => creationWindow.openCreationWindow());
    }
    return { handleMenuEventListeners };
};

export const CreationWindowEventListeners = () => {
    const taskButton = document.querySelector('#task-button');
    const projectButton = document.querySelector('#project-button');
    const noteButton = document.querySelector('#note-button');
    const taskTitleInput = document.querySelector('#task-title-input');
    const taskDescriptionInput = document.querySelector('#task-description-input');
    const taskDueDateInput = document.querySelector('#task-date-input');
    const taskPriorityInput = document.querySelector('#task-priority-input');
    const projectTitleInput = document.querySelector('#project-title-input');
    const noteTitleInput = document.querySelector('#note-title-input');
    const noteDescriptionInput = document.querySelector('#note-description-input');
    const creationWindowCloseButton = document.querySelector('#creation-window-close-button');
    const addTaskSubmitButton = document.querySelector('#add-task-submit-button');

    function handleCreationWindowEventListeners() {
        taskButton.addEventListener('click', () => creationWindow.showTaskForm());
        projectButton.addEventListener('click', () => creationWindow.showProjectForm());
        noteButton.addEventListener('click', () => creationWindow.showNoteForm());
        taskTitleInput.addEventListener('input', validation.clearValidationMessage);
        taskDescriptionInput.addEventListener('input', validation.clearValidationMessage);
        taskDueDateInput.addEventListener('input', validation.clearValidationMessage);
        taskPriorityInput.addEventListener('input', validation.clearValidationMessage);
        projectTitleInput.addEventListener('input', validation.clearValidationMessage);
        noteTitleInput.addEventListener('input', validation.clearValidationMessage);
        noteDescriptionInput.addEventListener('input', validation.clearValidationMessage);
        creationWindowCloseButton.addEventListener('click', () => creationWindow.closeCreationWindow());
        addTaskSubmitButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (validation.validateCreationTaskForm()) {
                containerCreator.createNewTaskContainer();
                task.createNewTask();
                imageHandler.handlePageImageDisplaying();
                creationWindow.closeCreationWindow();
            }
        });
    }
    return { handleCreationWindowEventListeners };
};

export const EditWindowEventListeners = () => {
    const editTaskTitleInput = document.querySelector('#edit-task-title-input');
    const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
    const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
    const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
    const editWindowCloseButton = document.querySelector('#edit-window-close-button');
    const editTaskSubmitButton = document.querySelector('#edit-task-submit-button');

    function handleEditWindowEventListeners() {
        editTaskTitleInput.addEventListener('input', validation.clearValidationMessage);
        editTaskDescriptionInput.addEventListener('input', validation.clearValidationMessage);
        editTaskDueDateInput.addEventListener('input', validation.clearValidationMessage);
        editTaskPriorityInput.addEventListener('input', validation.clearValidationMessage);
        editWindowCloseButton.addEventListener('click', () => editWindow.closeEditWindow());
        editTaskSubmitButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (validation.validateEditTaskForm()) {
                task.editChosenTask(chosenTask, editTaskTitleInput.value, editTaskDueDateInput.value, editTaskPriorityInput);
                editWindow.closeEditWindow();
            }
        });
    }
    return { handleEditWindowEventListeners };
};

export const MainInterfaceEventListeners = () => {
    const listOfAllTasks = document.querySelector('#list-of-all-tasks');

    function handleMainInterfaceEventListeners() {
        listOfAllTasks.addEventListener('click', (e) => {
            const taskContainer = e.target.closest('.task-container');
            const editButton = e.target.closest('.edit-button');
            const deleteButton = e.target.closest('.delete-button');

            if (editButton) {
                chosenTask = taskContainer;
                editWindow.openEditWindow(chosenTask);
            } else if (deleteButton) {
                chosenTask = taskContainer;
                chosenTask.remove();
                task.deleteChosenTask(chosenTask);
                imageHandler.handlePageImageDisplaying();
            }
        });
    }
    return { handleMainInterfaceEventListeners };
};

export const AllEventListeners = () => {
    function handleAllEventListeners() {
        menuEventListeners.handleMenuEventListeners();
        creationWindowEventListeners.handleCreationWindowEventListeners();
        editWindowEventListeners.handleEditWindowEventListeners();
        mainInterfaceEventListeners.handleMainInterfaceEventListeners();
    }
    return { handleAllEventListeners };
};
