import { format, parse } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { containerCreator } from ".";

export const Task = () => {
  const tasksArray = JSON.parse(localStorage.getItem("tasksArray")) || [];
  const taskTitlesArray = tasksArray.map((task) => task.title);

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
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  }

  function deleteTask(taskToDelete) {
    const indexToDelete = parseInt(taskToDelete.getAttribute("data-task"), 10);
    if (indexToDelete !== -1 && indexToDelete < tasksArray.length) {
      tasksArray.splice(indexToDelete, 1);
      taskTitlesArray.splice(indexToDelete, 1);

      updateDataTaskAttributes(indexToDelete);
      localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
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

  function editTask(
    taskIdToEdit,
    newTitle,
    newDescription,
    newDueDate,
    newPriority
  ) {
    const indexToEdit = parseInt(taskIdToEdit.getAttribute("data-task"), 10);
    if (indexToEdit !== -1) {
      const taskToEdit = tasksArray[indexToEdit];
      taskToEdit.title = newTitle;
      taskToEdit.description = newDescription;
      taskToEdit.dueDate = format(new Date(newDueDate), "dd-MM-yyyy");
      taskToEdit.priority = newPriority;
      tasksArray[indexToEdit] = taskToEdit;
      taskTitlesArray[indexToEdit] = newTitle;

      localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
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

  function editChosenTask(chosenTask) {
    const editTaskTitleInput = document.querySelector("#edit-task-title-input");
    const editTaskDescriptionInput = document.querySelector(
      "#edit-task-description-input"
    );
    const editTaskDueDateInput = document.querySelector(
      "#edit-task-date-input"
    );
    const editTaskPriorityInput = document.querySelector(
      "#edit-task-priority-input"
    );

    const taskId = chosenTask.getAttribute("data-task");

    editTask(
      chosenTask,
      editTaskTitleInput.value,
      editTaskDescriptionInput.value,
      editTaskDueDateInput.value,
      editTaskPriorityInput.value
    );

    const taskContainers = document.querySelectorAll(
      `.task-container[data-task="${taskId}"]`
    );
    taskContainers.forEach((taskContainer) => {
      containerCreator.setNewTaskColor(
        taskContainer,
        editTaskPriorityInput.value
      );
    });

    const taskTitleElements = document.querySelectorAll(
      `.task-data-container[data-task-title="${taskId}"]`
    );
    taskTitleElements.forEach((element) => {
      element.textContent = editTaskTitleInput.value;
    });

    const taskDueDateElements = document.querySelectorAll(
      `.task-data-container[data-task-date="${taskId}"]`
    );
    taskDueDateElements.forEach((element) => {
      element.textContent = format(
        new Date(editTaskDueDateInput.value),
        "dd-MM-yyyy"
      );
    });
    location.reload();
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

  function renderTasks(tasks) {
    tasks.forEach((taskData) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task-container");
      taskContainer.setAttribute("id", taskData.id);
      taskContainer.setAttribute("data-task", tasks.indexOf(taskData));

      const taskStatus = document.createElement("input");
      taskStatus.setAttribute("type", "checkbox");
      taskStatus.classList.add("task-data-container", "task-status-checkbox");
      taskStatus.checked = taskData.isDone;
      taskContainer.appendChild(taskStatus);

      const taskTitle = document.createElement("h3");
      taskTitle.classList.add("task-data-container", "task-title");
      taskTitle.setAttribute("data-task-title", tasks.indexOf(taskData));
      taskTitle.textContent = taskData.title;
      taskContainer.appendChild(taskTitle);

      const taskDueDate = document.createElement("label");
      taskDueDate.classList.add("task-data-container", "task-date");
      taskDueDate.setAttribute("data-task-date", tasks.indexOf(taskData));
      taskDueDate.textContent = taskData.dueDate;
      taskContainer.appendChild(taskDueDate);

      if (taskData.priority === "Low") {
        taskContainer.style.borderLeftColor = "#006400";
      } else if (taskData.priority === "Medium") {
        taskContainer.style.borderLeftColor = "#ff8c00";
      } else {
        taskContainer.style.borderLeftColor = "#8b0000";
      }

      containerCreator.createEditAndDeleteButtons(taskContainer);

      document.querySelector("#list-of-all-tasks").appendChild(taskContainer);

      const taskDueDateObj = parse(taskData.dueDate, "dd-MM-yyyy", new Date());
      if (isToday(taskDueDateObj)) {
        document
          .querySelector("#list-of-today-tasks")
          .appendChild(taskContainer.cloneNode(true));
      } else if (isUpcoming(taskDueDateObj)) {
        document
          .querySelector("#list-of-next-week-tasks")
          .appendChild(taskContainer.cloneNode(true));
      }
    });
  }

  return {
    taskFactory,
    createNewTask,
    editChosenTask,
    deleteChosenTask,
    isToday,
    isUpcoming,
    renderTasks,
    tasksArray,
    taskTitlesArray,
  };
};

export const Note = () => {
  const notesArray = JSON.parse(localStorage.getItem("notesArray")) || [];

  function noteFactory(id, title, description) {
    return { id, title, description };
  }

  function addNote(newNote) {
    notesArray.push(newNote);
    localStorage.setItem("notesArray", JSON.stringify(notesArray));
  }

  function deleteNote(noteToDelete) {
    const indexToDelete = parseInt(noteToDelete.getAttribute("data-note"), 10);
    if (indexToDelete !== -1 && indexToDelete < notesArray.length) {
      notesArray.splice(indexToDelete, 1);

      updateDataNoteAttributes(indexToDelete);
      localStorage.setItem("notesArray", JSON.stringify(notesArray));
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

  function renderNotes(notes) {
    notes.forEach((note) => {
      const noteContainer = document.createElement("div");
      noteContainer.classList.add("note-container");
      noteContainer.setAttribute("id", note.id);
      noteContainer.setAttribute("data-note", notes.indexOf(note));

      const deleteNoteButton = document.createElement("button");
      deleteNoteButton.classList.add("delete-note-button");
      deleteNoteButton.textContent = "x";
      noteContainer.appendChild(deleteNoteButton);

      const noteTitle = document.createElement("h3");
      noteTitle.classList.add("note-title");
      noteTitle.textContent = note.title;
      noteContainer.appendChild(noteTitle);

      const noteDescription = document.createElement("p");
      noteDescription.classList.add("note-description");
      noteDescription.textContent = note.description;
      noteContainer.appendChild(noteDescription);

      document.querySelector("#list-of-all-notes").appendChild(noteContainer);
    });
  }

  return {
    noteFactory,
    createNewNote,
    deleteChosenNote,
    renderNotes,
    notesArray,
  };
};
