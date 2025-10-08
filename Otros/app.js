document.getElementById("addTaskBtn").addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Por favor escribe una tarea.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Marcar como completada al hacer clic
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Eliminar al hacer doble clic
  li.addEventListener("dblclick", function () {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
