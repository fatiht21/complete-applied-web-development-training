let gorevListesi = [
  { id: 1, gorevAdi: "Görev 1" },
  { id: 2, gorevAdi: "Görev 2" },
  { id: 3, gorevAdi: "Görev 3" },
  { id: 4, gorevAdi: "Görev 4" },
];

let editId;
let isEditTask = false;
const taskInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");

displayTasks();
function displayTasks() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";

  if (gorevListesi.length == 0) {
    ul.innerHTML = "<p class='p-3 m-3'>Görev Listeniz Boş!</p>";
  } else {
    for (let gorev of gorevListesi) {
      let li = `
  <li class="task list-group-item">
        <div class="form-check">
          <input type="checkbox" id="${gorev.id}" class="form-check-input" />
          <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
        </div>
        <div class="dropdown">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
            <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
          </ul>
      </div>
  </li>`;
      ul.insertAdjacentHTML("beforeend", li);
    }
  }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document
  .querySelector("#btnAddNewTask")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("btnAddNewTask").click();
    }
  });

function newTask(event) {
  if (taskInput.value == "") {
    alert("görev girmelisiniz");
  } else {
    if (!isEditTask) {
      //ekleme
      gorevListesi.push({
        id: gorevListesi.length + 1,
        gorevAdi: taskInput.value,
      });
      taskInput.value = "";
      displayTasks();
    } else {
      // güncelleme
      for (let gorev of gorevListesi) {
        if (gorev.id == editId) {
          gorev.gorevAdi = taskInput.value;
        }
        isEditTask = false;
      }
    }
  }

  event.preventDefault();
}

function deleteTask(id) {
  let deleteId;
  for (let index in gorevListesi) {
    if (gorevListesi[index].id == id) {
      deleteId = index;
    }
  }

  gorevListesi.splice(deleteId, 1);
  displayTasks();
}

function editTask(taskId, taskName) {
  editId = taskId;
  isEditTask = true;
  taskInput.value = taskName;
  taskInput.focus();
  taskInput.classList.add("active");
}

btnClear.addEventListener("click", function () {
  gorevListesi.splice(0, gorevListesi.length);
  displayTasks();
});
