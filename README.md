# Todo-List

This is a basic task manager project that I created while following The Odin Project's curriculum.

## Assignment

1. Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.
2. Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.
3. Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.
4. You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.
5. The look of the User Interface is up to you, but it should be able to do the following:
   - View all projects.
   - View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
   - Expand a single todo to see/edit its details.
   - Delete a todo.
6. Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:
   - date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.
7. We haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their todos will disappear! You should add some persistence to this todo app using the Web Storage API.

## Features:

- Creating a task by giving it a name, description, due date, and priority;
- Creating a note by giving it a name and description;
- Editing a task;
- Removing a task;
- Removing a note;
- Filtering tasks by their due date;
- Saving tasks and notes in local storage;

## Used technologies:

- HTML;
- CSS;
- JavaScript;
- Webpack;

## Live Preview:

https://ivooo369.github.io/Todo-List/
