let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const templateContent = `
    <li class="task">
      <div class="task-information">
        <h2 class="taskName">${task.name}</h2>
        <h3 class="taskOwner">${task.owner}</h3>
        <p class="classDescription">${task.description}</p>
      </div>
      <img src="${task.imgUrl}" alt="${task.name}">
    </li>
  `;

  const elements = document.querySelector("ul");

  // hecho de esta forma, dado que teoricamente queda bien 
  // que el elemento sea de tipo li si esta dentro de una ul
  const newElement = document.createElement("li"); 
  newElement.innerHTML = templateContent;

  // Agregar el event listener para eliminar la tarea al hacer clic
  newElement.addEventListener('click', function() {
    deleteTaskHandler(newElement);
  });

  elements.appendChild(newElement);
}

function loadTasks() {
  tasks.forEach((element) => {
    createTaskComponent(element);
  });
}

// Llamar la función loadTasks cuando el documento esté listo
window.onload = loadTasks;

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
// este no me esta funcionando 
function addTaskAlert(newTask) {
  const message = `Task Name: ${newTask.name}\n
                    Task Owner: ${newTask.owner}\n
                    Task Description: ${newTask.description}\n
                    Task Image URL: ${newTask.imgUrl}
                    `;
  window.alert(message);
}

  // 2 - Function
  // Agregar elemento en la lista al llenar el formulario
  function addTaskHandler(event) {
    event.preventDefault(); 

    const newTask = {
      id: currentIdNumber++,
      name: document.getElementById('nameInput').value,
      owner: document.getElementById('ownerInput').value,
      description: document.getElementById('descriptionInput').value,
      imgUrl: document.getElementById('imgUrlInput').value
    };

    createTaskComponent(newTask);
    addTaskAlert(newTask);

    // Limpiar el formulario
    document.querySelector('.main__form').reset();
  }

  // Escuchar el evento de envío del formulario
  document.querySelector('.main__form').addEventListener('submit', addTaskHandler);

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {
  taskElement.remove(); 

  // Verificar si ya no quedan tareas
  if (document.querySelectorAll('ul li').length === 0) {
    redirectWhenNoTask();
  }
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  const elements = document.querySelector('ul');
  elements.innerHTML = '';
  redirectWhenNoTask();
}

document.getElementsByClassName('clear-button')[0].addEventListener('click', deleteAllTaskHandler);

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  window.location.href = "https://www.youtube.com";
}
