document.querySelector('.container').style.border = '1px solid black';
document.querySelector('.container').style.padding = '100px';


document.getElementById("list").addEventListener("submit", function(hi) {
  hi.preventDefault();
  
  const listInput = document.getElementById("listInput");
  const task = listInput.value.trim();
  if (task !== "") {
    addTasktoList(task);
    listInput.value = "";
  }
});


function addTasktoList(task) {
  const theList = document.getElementById("theList");
  const taskItem = document.createElement("div");
  taskItem.innerHTML = `
  <p>${task}</p>
  <button onclick="removeTask(this)">Remove</button>
  `;
  theList.appendChild(taskItem);
}


function removeTask(button) {
  const taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}
