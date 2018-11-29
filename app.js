function onReady() {

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button
    let deleteButton = document.createElement('button')

    // Set the content of the button
    deleteButton.textContent = "x";

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    // attach delete to li
    toDoList.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      toDoList.removeChild(newLi);
      toDoList.removeChild(deleteButton);
    });
  });

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push ({
      title: newToDoText.value,
      complete: false,
      id: id

    });

    id++;

    newToDoText.value = '';

    renderTheUI();
  }

  function deleteToDo(id) {
    return toDos.filter(toDo => toDo.id !==id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';

      deleteButton.addEventListener('click', event => {
        toDos = deleteToDo(toDo.id);
        renderTheUI();
      });


      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

}


window.onload = function () {
  alert("The window has loaded!");
  onReady();
};
