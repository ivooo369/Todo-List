const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');

export function validateTaskForm() {
    if (taskTitleInput.value === '') {
        taskTitleInput.setCustomValidity('Please enter a title for your task.');
        taskTitleInput.reportValidity();
        return false;
    } else if (taskDescriptionInput.value === '') {
        taskDescriptionInput.setCustomValidity('Please enter a description for your task.');
        taskDescriptionInput.reportValidity();
        return false;
    } else if (taskDueDateInput.value === '') {
        taskDueDateInput.setCustomValidity('Please enter a due date for your task.');
        taskDueDateInput.reportValidity();
        return false;
    } else if (taskPriorityInput.value === '') {
        taskPriorityInput.setCustomValidity('Please enter a priority for your task.');
        taskPriorityInput.reportValidity();
        return false;
    }
    return true;
}

export function validateProjectForm() {
    if (projectTitleInput.value === '') {
        projectTitleInput.setCustomValidity('Please enter a title for your project.');
        projectTitleInput.reportValidity();
        return false;
    }
    return true;
}

export function validateNoteForm() {
    if (noteTitleInput.value === '') {
        noteTitleInput.setCustomValidity('Please enter a title for your note.');
        noteTitleInput.reportValidity();
        return false;
    } else if (noteDescriptionInput.value === '') {
        noteDescriptionInput.setCustomValidity('Please enter a description for your note.');
        noteDescriptionInput.reportValidity();
        return false;
    }
    return true;
}

export function clearValidationMessage() {
    switch (this) {
        case taskTitleInput:
        case taskDescriptionInput:
        case taskPriorityInput:
        case projectTitleInput:
        case noteTitleInput:
        case noteDescriptionInput:
            this.setCustomValidity('');
            break;
    }
}