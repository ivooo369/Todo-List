import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { containerCreator } from ".";

export const Task = () => {
  const tasksArray = [];
  const taskTitlesArray = [];

  function taskFactory(
    id,
    title,
    description,
    dueDate,
    priority,
    isDone = false
  ) {
    const formattedDate = format(new Date(dueDate), "dd-MM-yyyy");
    return {
      id,
      title,
      description,
      dueDate: formattedDate,
      priority,
      isDone,
    };
  }

  function addTask(newTask) {
    tasksArray.push(newTask);
    taskTitlesArray.push(newTask.title);

    console.log("Updated taskTitlesArray:", taskTitlesArray);
    console.log("Updated tasksArray:", tasksArray);
  }

  function deleteTask(taskToDelete) {
    const indexToDelete = parseInt(taskToDelete.getAttribute("data-task"), 10);
    if (indexToDelete !== -1 && indexToDelete < tasksArray.length) {
      tasksArray.splice(indexToDelete, 1);
      taskTitlesArray.splice(indexToDelete, 1);

      updateDataTaskAttributes(indexToDelete);

      console.log("Updated taskTitlesArray:", taskTitlesArray);
      console.log("Updated tasksArray:", tasksArray);
    } else {
      console.error(`Invalid index ${indexToDelete} for deletion.`);
    }
  }

  function updateDataTaskAttributes(startIndex) {
    const taskContainers = document.querySelectorAll(".task-container");
    const taskDataContainers = document.querySelectorAll(
      ".task-data-container"
    );
    taskContainers.forEach((taskContainer) => {
      let currentDataTask = parseInt(
        taskContainer.getAttribute("data-task"),
        10
      );
      if (currentDataTask > startIndex) {
        currentDataTask -= 1;
        taskContainer.setAttribute("data-task", currentDataTask);
      }
    });

    taskDataContainers.forEach((taskDataContainer) => {
      let currentDataTask = parseInt(
        taskDataContainer.getAttribute("data-task-title"),
        10
      );
      if (currentDataTask > startIndex) {
        currentDataTask -= 1;
        taskDataContainer.setAttribute("data-task-title", currentDataTask);
      }
    });
  }

  function editTask(taskIdToEdit, newTitle, newDescription, newPriority) {
    const indexToEdit = parseInt(taskIdToEdit.getAttribute("data-task"), 10);
    if (indexToEdit !== -1) {
      const taskToEdit = tasksArray[indexToEdit];
      taskToEdit.title = newTitle;
      taskToEdit.description = newDescription;
      taskToEdit.priority = newPriority;
      tasksArray[indexToEdit] = taskToEdit;
      taskTitlesArray[indexToEdit] = newTitle;

      console.log("Updated taskTitlesArray:", taskTitlesArray);
      console.log("Updated tasksArray:", tasksArray);
    } else {
      console.error(`Task with ID ${taskIdToEdit} not found.`);
    }
  }

  function createNewTask() {
    const taskId = uuidv4();
    const creationTaskForm = document.querySelector("#creation-task-form");
    const taskTitleInput = document.querySelector("#task-title-input");
    const taskDescriptionInput = document.querySelector(
      "#task-description-input"
    );
    const taskDueDateInput = document.querySelector("#task-date-input");

    const taskPriorityInput = document.querySelector("#task-priority-input");
    const newTask = taskFactory(
      taskId,
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskDueDateInput.value,
      taskPriorityInput.value
    );
    addTask(newTask);
    creationTaskForm.reset();
  }

  function editChosenTask(chosenTask, newTitle, newPriority) {
    const editTaskTitleInput = document.querySelector("#edit-task-title-input");
    const editTaskDescriptionInput = document.querySelector(
      "#edit-task-description-input"
    );
    const editTaskPriorityInput = document.querySelector(
      "#edit-task-priority-input"
    );

    const taskId = chosenTask.getAttribute("data-task");

    editTask(
      chosenTask,
      editTaskTitleInput.value,
      editTaskDescriptionInput.value,
      editTaskPriorityInput.value
    );

    const taskContainers = document.querySelectorAll(
      `.task-container[data-task="${taskId}"]`
    );
    taskContainers.forEach((taskContainer) => {
      containerCreator.setNewTaskColor(taskContainer, newPriority);
    });

    const taskTitleElements = document.querySelectorAll(
      `.task-data-container[data-task-title="${taskId}"]`
    );
    taskTitleElements.forEach((element) => {
      element.textContent = newTitle;
    });
  }

  function deleteChosenTask(chosenTask) {
    deleteTask(chosenTask);
  }

  function isToday(date) {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }

  function isUpcoming(date) {
    const today = new Date();
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(today.getDate() + 7);
    return date > today && date <= sevenDaysFromNow;
  }

  return {
    taskFactory,
    createNewTask,
    editChosenTask,
    deleteChosenTask,
    isToday,
    isUpcoming,
    tasksArray,
    taskTitlesArray,
  };
};

export const Note = () => {
  const notesArray = [];

  function noteFactory(id, title, description) {
    return { id, title, description };
  }

  function addNote(newNote) {
    notesArray.push(newNote);
    console.log("Updated notesArray:", notesArray);
  }

  function deleteNote(noteToDelete) {
    const indexToDelete = parseInt(noteToDelete.getAttribute("data-note"), 10);
    if (indexToDelete !== -1 && indexToDelete < notesArray.length) {
      notesArray.splice(indexToDelete, 1);

      updateDataNoteAttributes(indexToDelete);

      console.log("Updated notesArray:", notesArray);
    } else {
      console.error(`Invalid index ${indexToDelete} for deletion.`);
    }
  }

  function updateDataNoteAttributes(startIndex) {
    const noteContainers = document.querySelectorAll(".note-container");

    noteContainers.forEach((noteContainer) => {
      let currentDataNote = parseInt(
        noteContainer.getAttribute("data-note"),
        10
      );
      if (currentDataNote > startIndex) {
        currentDataNote -= 1;
        noteContainer.setAttribute("data-note", currentDataNote);
      }
    });
  }

  function createNewNote() {
    const noteId = uuidv4();
    const noteForm = document.querySelector("#note-form");
    const noteTitleInput = document.querySelector("#note-title-input");
    const noteDescriptionInput = document.querySelector(
      "#note-description-input"
    );
    const newNote = noteFactory(
      noteId,
      noteTitleInput.value,
      noteDescriptionInput.value
    );
    addNote(newNote);
    noteForm.reset();
  }

  function deleteChosenNote(chosenNote) {
    deleteNote(chosenNote);
  }

  return { noteFactory, createNewNote, deleteChosenNote, notesArray };
};
