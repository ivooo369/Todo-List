import {
  task,
  note,
  validation,
  imageHandler,
  creationWindow,
  editWindow,
  menu,
  containerCreator,
  menuEventListeners,
  creationWindowEventListeners,
  editWindowEventListeners,
  mainInterfaceEventListeners,
} from ".";

let chosenTask = "";
let chosenNote = "";

window.addEventListener("load", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasksArray")) || [];
  const storedNotes = JSON.parse(localStorage.getItem("notesArray")) || [];

  if (storedTasks) {
    task.renderTasks(storedTasks);
  }
  if (storedNotes) {
    note.renderNotes(storedNotes);
  }
  imageHandler.handlePageImageDisplaying();
});

export const MenuEventListeners = () => {
  const homeButton = document.querySelector("#home-button");
  const allTasksButton = document.querySelector("#all-tasks-button");
  const menuToggle = document.querySelector("#menu-toggle");
  const todayTasksButton = document.querySelector("#today-tasks-button");
  const weekTasksButton = document.querySelector("#week-tasks-button");
  const allNotesButton = document.querySelector("#all-notes-button");
  const creationButton = document.querySelector("#creation-button");

  function handleMenuEventListeners() {
    homeButton.addEventListener("click", () => menu.switchToAllTasksView());
    allTasksButton.addEventListener("click", () => menu.switchToAllTasksView());
    menuToggle.addEventListener("click", () => menu.toggleMenuVisibility());
    todayTasksButton.addEventListener("click", () =>
      menu.switchToTodayTasksView()
    );
    weekTasksButton.addEventListener("click", () =>
      menu.switchToWeekTasksView()
    );
    allNotesButton.addEventListener("click", () => menu.switchToAllNotesView());
    creationButton.addEventListener("click", () =>
      creationWindow.openCreationWindow()
    );
  }
  return { handleMenuEventListeners };
};

export const CreationWindowEventListeners = () => {
  const taskButton = document.querySelector("#task-button");
  const noteButton = document.querySelector("#note-button");
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
  const creationWindowCloseButton = document.querySelector(
    "#creation-window-close-button"
  );
  const addTaskSubmitButton = document.querySelector("#add-task-submit-button");
  const addNoteSubmitButton = document.querySelector("#add-note-submit-button");

  function handleCreationWindowEventListeners() {
    taskButton.addEventListener("click", () => creationWindow.showTaskForm());
    noteButton.addEventListener("click", () => creationWindow.showNoteForm());
    taskTitleInput.addEventListener("input", validation.clearValidationMessage);
    taskDescriptionInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    taskDueDateInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    taskPriorityInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    noteTitleInput.addEventListener("input", validation.clearValidationMessage);
    noteDescriptionInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    creationWindowCloseButton.addEventListener("click", () =>
      creationWindow.closeCreationWindow()
    );
    addTaskSubmitButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (validation.validateCreationTaskForm()) {
        containerCreator.createNewTaskContainer();
        task.createNewTask();
        imageHandler.handlePageImageDisplaying();
        creationWindow.closeCreationWindow();
      }
    });
    addNoteSubmitButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (validation.validateNoteForm()) {
        containerCreator.createNewNoteContainer();
        note.createNewNote();
        imageHandler.handlePageImageDisplaying();
        creationWindow.closeCreationWindow();
      }
    });
  }
  return { handleCreationWindowEventListeners };
};

export const EditWindowEventListeners = () => {
  const editTaskTitleInput = document.querySelector("#edit-task-title-input");
  const editTaskDescriptionInput = document.querySelector(
    "#edit-task-description-input"
  );
  const editTaskDateInput = document.querySelector("#edit-task-date-input");
  const editTaskPriorityInput = document.querySelector(
    "#edit-task-priority-input"
  );
  const editWindowCloseButton = document.querySelector(
    "#edit-window-close-button"
  );
  const editTaskSubmitButton = document.querySelector(
    "#edit-task-submit-button"
  );

  function handleEditWindowEventListeners() {
    editTaskTitleInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    editTaskDescriptionInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    editTaskDateInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    editTaskPriorityInput.addEventListener(
      "input",
      validation.clearValidationMessage
    );
    editWindowCloseButton.addEventListener("click", () =>
      editWindow.closeEditWindow()
    );
    editTaskSubmitButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (validation.validateEditTaskForm()) {
        task.editChosenTask(
          chosenTask,
          editTaskTitleInput.value,
          editTaskPriorityInput
        );
        editWindow.closeEditWindow();
      }
    });
  }
  return { handleEditWindowEventListeners };
};

export const MainInterfaceEventListeners = () => {
  const listsOfTasks = document.querySelectorAll(".lists-of-tasks");
  const listsOfAllNotes = document.querySelectorAll("#list-of-all-notes");

  function handleMainInterfaceEventListeners() {
    listsOfTasks.forEach((list) => {
      list.addEventListener("click", (e) => {
        const taskContainer = e.target.closest(".task-container");
        const taskContainers = document.querySelectorAll(".task-container");
        const editButton = e.target.closest(".edit-button");
        const deleteButton = e.target.closest(".delete-button");

        chosenTask = taskContainer;

        if (editButton) {
          editWindow.openEditWindow(chosenTask);
        } else if (deleteButton) {
          taskContainers.forEach((container) => {
            if (
              container.getAttribute("data-task") ===
              chosenTask.getAttribute("data-task")
            ) {
              container.remove();
              chosenTask.remove();
            }
          });
          task.deleteChosenTask(chosenTask);
          imageHandler.handlePageImageDisplaying();
        }
      });
    });

    listsOfAllNotes.forEach((item) => {
      item.addEventListener("click", (e) => {
        const noteContainer = e.target.closest(".note-container");
        const noteContainers = document.querySelectorAll(".note-container");
        const deleteNoteButton = e.target.closest(".delete-note-button");

        chosenNote = noteContainer;

        if (deleteNoteButton) {
          noteContainers.forEach((container) => {
            if (
              container.getAttribute("data-note") ===
              chosenNote.getAttribute("data-note")
            ) {
              container.remove();
              chosenNote.remove();
            }
          });
          note.deleteChosenNote(chosenNote);
          imageHandler.handlePageImageDisplaying();
        }
      });
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
