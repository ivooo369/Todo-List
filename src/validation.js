import { taskObject } from "./mainLogic";
import { currentTaskTitle } from "./domManipulation";

const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');

export function validateCreationTaskForm() {
    if (taskObject.taskTitlesArray.includes(taskTitleInput.value.trim())) {
        taskTitleInput.setCustomValidity('Please enter a unique task title.');
        taskTitleInput.reportValidity();
        return false;
    } if (taskTitleInput.value === '') {
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
    } if (taskTitleInput.value.trim().length > 20) {
        taskTitleInput.setCustomValidity('Please enter a title of no more than 20 characters.');
        taskTitleInput.reportValidity();
        return false;
    }
    return true;
}

export function validateEditTaskForm() {
    if (editTaskTitleInput.value === '') {
        editTaskTitleInput.setCustomValidity('Please enter a title for your task.');
        editTaskTitleInput.reportValidity();
        return false;
    } else if (taskObject.taskTitlesArray.includes(editTaskTitleInput.value.trim()) && editTaskTitleInput.value.trim() !== currentTaskTitle.trim()) {
        editTaskTitleInput.setCustomValidity('Please enter a unique task title.');
        editTaskTitleInput.reportValidity();
        return false;
    } else if (editTaskDescriptionInput.value === '') {
        editTaskDescriptionInput.setCustomValidity('Please enter a description for your task.');
        editTaskDescriptionInput.reportValidity();
        return false;
    } else if (editTaskDueDateInput.value === '') {
        editTaskDueDateInput.setCustomValidity('Please enter a due date for your task.');
        editTaskDueDateInput.reportValidity();
        return false;
    } else if (editTaskPriorityInput.value === '') {
        editTaskPriorityInput.setCustomValidity('Please enter a priority for your task.');
        editTaskPriorityInput.reportValidity();
        return false;
    } if (editTaskTitleInput.value.trim().length > 20) {
        editTaskTitleInput.setCustomValidity('Please enter a title of no more than 20 characters.');
        editTaskTitleInput.reportValidity();
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
        case taskDueDateInput:
        case taskPriorityInput:
        case editTaskTitleInput:
        case editTaskDescriptionInput:
        case editTaskDueDateInput:
        case editTaskPriorityInput:
        case projectTitleInput:
        case noteTitleInput:
        case noteDescriptionInput:
            this.setCustomValidity('');
            break;
    }
}