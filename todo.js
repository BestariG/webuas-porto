// Add your todo list functionality here
function addTodo() {
  var todoText = document.getElementById('newTodo').value;
  if (todoText.trim() === "") {
      alert("Please enter a valid todo!");
      return;
  }

  var todoBody = document.getElementById('todo-body');

  var todoItem = document.createElement('tr');
  todoItem.className = 'todo-item';

  // Add checkbox
  var checkboxCell = document.createElement('td');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkboxCell.appendChild(checkbox);

  var taskCell = document.createElement('td');
  taskCell.innerText = todoText;

  var actionCell = document.createElement('td');
  actionCell.className = 'action-btns';

  var editButton = document.createElement('span');
  editButton.className = 'edit-btn';
  editButton.innerHTML = '&#9998;';
  editButton.onclick = function () {
      var updatedTask = prompt("Edit task:", todoText);
      if (updatedTask !== null && updatedTask.trim() !== "") {
          taskCell.innerText = updatedTask;
      }
  };

  var deleteButton = document.createElement('span');
  deleteButton.className = 'delete-btn';
  deleteButton.innerHTML = '&#10008;';
  deleteButton.onclick = function () {
      todoBody.removeChild(todoItem);
  };

  actionCell.appendChild(editButton);
  actionCell.appendChild(deleteButton);

  todoItem.appendChild(checkboxCell);
  todoItem.appendChild(taskCell);
  todoItem.appendChild(actionCell);
  todoBody.appendChild(todoItem);

  // Clear the input field
  document.getElementById('newTodo').value = "";
}
