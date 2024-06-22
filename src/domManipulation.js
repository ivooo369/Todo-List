import { format, parse } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import titleImageSrc from "./images/checklist-image.png";
import noTasksImageSrc from "./images/no-tasks-image.png";
import noNotesImageSrc from "./images/no-notes-image.png";
import { task, note, creationWindow } from ".";
import Icon from "./images/tab-icon.png";

export let currentTaskTitle = "";

export const ImageHandler = () => {
  function createTitleImage() {
    const titleContainer = document.querySelector(".title-container");
    const title = document.querySelector(".title");
    const titleImage = new Image();
    titleImage.src = titleImageSrc;
    titleImage.alt = "Checklist";
    titleImage.classList.add("title-image");
    titleContainer.insertBefore(titleImage, title);
  }

  function createNoTasksImage() {
    const listsOfTasks = document.querySelectorAll(".lists-of-tasks");
    let imageId = 1;
    listsOfTasks.forEach((list) => {
      const noTasksImage = new Image();
      noTasksImage.src = noTasksImageSrc;
      noTasksImage.alt = "No Tasks";
      noTasksImage.setAttribute("id", `no-tasks-image-${imageId}`);
      noTasksImage.classList.add("no-tasks-image", "image-active");
      list.appendChild(noTasksImage);
      imageId++;
    });
  }

  function createNoNotesImage() {
    const listOfNotes = document.querySelector("#list-of-all-notes");
    const noNotesImage = new Image();
    noNotesImage.src = noNotesImageSrc;
    noNotesImage.alt = "No Notes";
    noNotesImage.classList.add("no-notes-image", "image-active");
    noNotesImage.classList.add("image-active");
    listOfNotes.appendChild(noNotesImage);
  }

  function createTabIcon() {
    const head = document.querySelector("head");
    const tabIcon = document.createElement("link");
    tabIcon.rel = "icon";
    tabIcon.href = Icon;
    head.appendChild(tabIcon);
  }

  function handlePageImageDisplaying() {
    const noTasksImage1 = document.querySelector("#no-tasks-image-1");
    const noTasksImage2 = document.querySelector("#no-tasks-image-2");
    const noTasksImage3 = document.querySelector("#no-tasks-image-3");
    const noNotesImage = document.querySelector(".no-notes-image");

    if (task.tasksArray.length === 0) {
      noTasksImage1.classList.add("image-active");
      noTasksImage2.classList.add("image-active");
      noTasksImage3.classList.add("image-active");
    } else {
      noTasksImage1.classList.remove("image-active");
      noTasksImage2.classList.remove("image-active");
      noTasksImage3.classList.remove("image-active");
    }

    if (note.notesArray.length === 0) {
      noNotesImage.classList.add("image-active");
    } else {
      noNotesImage.classList.remove("image-active");
    }

    const todayTasks = task.tasksArray.filter((chosenTask) => {
      const taskDueDate = parse(chosenTask.dueDate, "dd-MM-yyyy", new Date());
      return task.isToday(taskDueDate);
    });

    const upcomingTasks = task.tasksArray.filter((chosenTask) => {
      const taskDueDate = parse(chosenTask.dueDate, "dd-MM-yyyy", new Date());
      return task.isUpcoming(taskDueDate);
    });

    if (todayTasks.length === 0) {
      noTasksImage2.classList.add("image-active");
    } else {
      noTasksImage2.classList.remove("image-active");
    }

    if (upcomingTasks.length === 0) {
      noTasksImage3.classList.add("image-active");
    } else {
      noTasksImage3.classList.remove("image-active");
    }
  }

  function createImages() {
    createTitleImage();
    createNoTasksImage();
    createNoNotesImage();
    createTabIcon();
  }

  return { createImages, handlePageImageDisplaying };
};

export const CreationWindow = () => {
  const creationTaskForm = document.querySelector("#creation-task-form");
  const noteForm = document.querySelector("#note-form");
  const taskButton = document.querySelector("#task-button");
  const noteButton = document.querySelector("#note-button");
  const creationTaskWindow = document.querySelector("#creation-task-window");
  const taskTitleInput = document.querySelector("#task-title-input");
  const taskDescriptionInput = document.querySelector(
    "#task-description-input"
  );
  const taskDueDateInput = document.querySelector("#task-date-input");
  const taskPriorityInput = document.querySelector("#task-priority-input");
  const noteTitleInput = document.querySelector("#note-title-input");
  const noteDescriptionInput = document.querySelector(
    "#note-description-input"
  );
  const overlay = document.querySelector(".overlay");

  function openCreationWindow() {
    creationTaskWindow.classList.add("open-window");
    taskButton.classList.add("selection-button-active");
    overlay.classList.add("overlay-active");
    taskDueDateInput.setAttribute("placeholder", "dd-MM-yyyy");
  }

  function closeCreationWindow() {
    creationTaskWindow.classList.remove("open-window");
    noteButton.classList.remove("selection-button-active");
    overlay.classList.remove("overlay-active");
    creationTaskForm.classList.add("form-active");
    noteForm.classList.remove("form-active");
    clearFormInputs();
  }

  function clearFormInputs() {
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskDueDateInput.value = "";
    taskPriorityInput.value = "";
    noteTitleInput.value = "";
    noteDescriptionInput.value = "";
  }

  function showTaskForm() {
    creationTaskForm.classList.add("form-active");
    noteForm.classList.remove("form-active");
    taskButton.classList.add("selection-button-active");
    noteButton.classList.remove("selection-button-active");
  }

  function showNoteForm() {
    noteForm.classList.add("form-active");
    creationTaskForm.classList.remove("form-active");
    noteButton.classList.add("selection-button-active");
    taskButton.classList.remove("selection-button-active");
  }

  return {
    openCreationWindow,
    closeCreationWindow,
    showTaskForm,
    showNoteForm,
    clearFormInputs,
  };
};

export const EditWindow = () => {
  const editTaskWindow = document.querySelector("#edit-task-window");
  const editTaskTitleInput = document.querySelector("#edit-task-title-input");
  const editTaskDescriptionInput = document.querySelector(
    "#edit-task-description-input"
  );
  const editTaskDueDate = document.querySelector("#edit-task-date");
  const editTaskPriorityInput = document.querySelector(
    "#edit-task-priority-input"
  );
  const overlay = document.querySelector(".overlay");

  function openEditWindow(taskToEdit) {
    const indexToEdit = parseInt(taskToEdit.getAttribute("data-task"), 10);
    editTaskWindow.classList.add("open-window");
    overlay.classList.add("overlay-active");
    currentTaskTitle = task.taskTitlesArray[indexToEdit];
    editTaskTitleInput.value = task.tasksArray[indexToEdit].title.trim();
    editTaskDescriptionInput.value =
      task.tasksArray[indexToEdit].description.trim();

    const taskDueDate = task.tasksArray[indexToEdit].dueDate;
    const parsedDueDate = parse(taskDueDate, "dd-MM-yyyy", new Date());
    const formattedDueDate = format(parsedDueDate, "dd-MM-yyyy");
    editTaskDueDate.textContent = formattedDueDate;

    console.log(editTaskDueDate.value);
    editTaskPriorityInput.value = task.tasksArray[indexToEdit].priority;
  }

  function closeEditWindow() {
    editTaskWindow.classList.remove("open-window");
    overlay.classList.remove("overlay-active");
    creationWindow.clearFormInputs();
  }

  return { openEditWindow, closeEditWindow };
};

export const Menu = () => {
  const allTasksButton = document.querySelector("#all-tasks-button");
  const todayTasksButton = document.querySelector("#today-tasks-button");
  const weekTasksButton = document.querySelector("#week-tasks-button");
  const allNotesButton = document.querySelector("#all-notes-button");
  const allTasksPage = document.querySelector("#all-tasks-page");
  const todayTasksPage = document.querySelector("#today-tasks-page");
  const weekTasksPage = document.querySelector("#week-tasks-page");
  const allNotesPage = document.querySelector("#all-notes-page");
  const menuContainer = document.querySelector(".menu-container");
  const pages = document.querySelectorAll(".pages");

  function switchToAllTasksView() {
    allTasksButton.classList.add("menu-button-active");
    todayTasksButton.classList.remove("menu-button-active");
    weekTasksButton.classList.remove("menu-button-active");
    allNotesButton.classList.remove("menu-button-active");
    allTasksPage.classList.add("page-active");
    todayTasksPage.classList.remove("page-active");
    weekTasksPage.classList.remove("page-active");
    allNotesPage.classList.remove("page-active");
  }

  function switchToTodayTasksView() {
    todayTasksButton.classList.add("menu-button-active");
    allTasksButton.classList.remove("menu-button-active");
    weekTasksButton.classList.remove("menu-button-active");
    allNotesButton.classList.remove("menu-button-active");
    todayTasksPage.classList.add("page-active");
    allTasksPage.classList.remove("page-active");
    weekTasksPage.classList.remove("page-active");
    allNotesPage.classList.remove("page-active");
  }

  function switchToWeekTasksView() {
    weekTasksButton.classList.add("menu-button-active");
    allTasksButton.classList.remove("menu-button-active");
    todayTasksButton.classList.remove("menu-button-active");
    allNotesButton.classList.remove("menu-button-active");
    weekTasksPage.classList.add("page-active");
    todayTasksPage.classList.remove("page-active");
    allTasksPage.classList.remove("page-active");
    allNotesPage.classList.remove("page-active");
  }

  function switchToAllNotesView() {
    allNotesButton.classList.add("menu-button-active");
    allTasksButton.classList.remove("menu-button-active");
    todayTasksButton.classList.remove("menu-button-active");
    weekTasksButton.classList.remove("menu-button-active");
    allNotesPage.classList.add("page-active");
    weekTasksPage.classList.remove("page-active");
    todayTasksPage.classList.remove("page-active");
    allTasksPage.classList.remove("page-active");
  }

  function toggleMenuVisibility() {
    menuContainer.classList.toggle("hidden-menu");
    pages.forEach((page) => {
      page.classList.toggle("pages-full");
    });
  }

  return {
    switchToAllTasksView,
    switchToTodayTasksView,
    switchToWeekTasksView,
    switchToAllNotesView,
    toggleMenuVisibility,
  };
};

export const ContainerCreator = () => {
  function setTaskAndNoteContainerId() {
    return uuidv4();
  }

  function createNewTaskContainer() {
    const listOfAllTasks = document.querySelector("#list-of-all-tasks");
    const listOfTodayTasks = document.querySelector("#list-of-today-tasks");
    const listOfNextWeekTasks = document.querySelector(
      "#list-of-next-week-tasks"
    );
    const taskTitleInput = document.querySelector("#task-title-input");
    const taskDueDateInput = document.querySelector("#task-date-input");
    const taskPriorityInput = document.querySelector("#task-priority-input");
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("task-container");
    newTaskContainer.setAttribute("id", setTaskAndNoteContainerId());
    newTaskContainer.setAttribute("data-task", task.tasksArray.length);
    listOfAllTasks.appendChild(newTaskContainer);
    const newTaskStatus = document.createElement("input");
    newTaskStatus.setAttribute("type", "checkbox");
    newTaskStatus.classList.add("task-data-container", "task-status-checkbox");
    newTaskContainer.appendChild(newTaskStatus);
    const newTaskTitle = document.createElement("h3");
    newTaskTitle.classList.add("task-data-container", "task-title");
    newTaskTitle.setAttribute(
      "data-task-title",
      newTaskContainer.getAttribute("data-task")
    );
    newTaskTitle.textContent = taskTitleInput.value;
    newTaskContainer.appendChild(newTaskTitle);
    const newTaskDueDateLabel = document.createElement("label");
    newTaskDueDateLabel.classList.add("task-data-container", "task-date");
    newTaskDueDateLabel.setAttribute(
      "data-task-date",
      newTaskContainer.getAttribute("data-task")
    );
    newTaskDueDateLabel.textContent = format(
      new Date(taskDueDateInput.value),
      "dd-MM-yyyy"
    );
    newTaskContainer.appendChild(newTaskDueDateLabel);
    setNewTaskColor(newTaskContainer, taskPriorityInput);
    createEditAndDeleteButtons(newTaskContainer);

    if (task.isToday(new Date(taskDueDateInput.value))) {
      listOfTodayTasks.appendChild(newTaskContainer.cloneNode(true));
    } else if (task.isUpcoming(new Date(taskDueDateInput.value))) {
      listOfNextWeekTasks.appendChild(newTaskContainer.cloneNode(true));
    }
  }

  function createEditAndDeleteButtons(container) {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("task-data-container", "buttons-container");
    container.appendChild(buttonsContainer);
    const editButton = document.createElement("i");
    editButton.classList.add("fas", "fa-edit", "edit-button", "icon");
    buttonsContainer.appendChild(editButton);
    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fas", "fa-trash", "delete-button", "icon");
    buttonsContainer.appendChild(deleteButton);
  }

  function setNewTaskColor(newTask, newTaskPriority) {
    if (newTaskPriority.value === "Low") {
      newTask.style.borderLeftColor = "#006400";
    } else if (newTaskPriority.value === "Medium") {
      newTask.style.borderLeftColor = "#ff8c00";
    } else {
      newTask.style.borderLeftColor = "#8b0000";
    }
  }

  function createNewNoteContainer() {
    const noteTitleInput = document.querySelector("#note-title-input");
    const noteDescriptionInput = document.querySelector(
      "#note-description-input"
    );
    const newNoteContainer = document.createElement("div");
    newNoteContainer.classList.add("note-container");
    newNoteContainer.setAttribute("id", setTaskAndNoteContainerId());
    newNoteContainer.setAttribute("data-note", note.notesArray.length);
    const listOfAllNotes = document.querySelector("#list-of-all-notes");
    listOfAllNotes.appendChild(newNoteContainer);
    const deleteNoteButton = document.createElement("button");
    deleteNoteButton.classList.add("delete-note-button");
    deleteNoteButton.textContent = "x";
    newNoteContainer.appendChild(deleteNoteButton);
    const newNoteTitle = document.createElement("h3");
    newNoteTitle.classList.add("note-title");
    newNoteTitle.textContent = noteTitleInput.value;
    newNoteContainer.appendChild(newNoteTitle);
    const newNoteDescription = document.createElement("p");
    newNoteDescription.classList.add("note-description");
    newNoteDescription.textContent = noteDescriptionInput.value;
    newNoteContainer.appendChild(newNoteDescription);
  }

  return {
    createNewTaskContainer,
    createNewNoteContainer,
    createEditAndDeleteButtons,
    setNewTaskColor,
  };
};
