var taskInput = document.getElementById("task-input");
var taskButton = document.getElementById("task-button");
var contentCountainer = document.querySelector(".content-countainer");

taskButton.addEventListener("click", function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = taskInput.value;
  contentCountainer.appendChild(paragraph);
  taskInput.value = "";
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  });
paragraph.addEventListener('dblclick', function(){
  contentCountainer.removeChild(paragraph);
});
});
