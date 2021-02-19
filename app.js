const from = document.getElementById("formTask");

from.addEventListener("submit", guardarTarea);

function guardarTarea(e) {

  
  e.preventDefault();

  const titulo = document.getElementById("tittle").value;
  const descripcion = document.getElementById("description").value;

  const tareas = {
    titulo,
    descripcion,
  };
  
  let tasks = [];
  
  if (localStorage.getItem("tasks") === null) {
    tasks.push(tareas);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {

    let tasks = JSON.parse(localStorage.getItem("tasks"));    
    tasks.push(tareas);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }


  getTareas()
  from.reset()
}

function getTareas() {

  

    const root = document.getElementById("DOMtask")

    const tareas = JSON.parse(localStorage.getItem("tasks"))

    root.innerHTML = ""

    for(let i = 0; i < tareas.length; i++){

        let titulo = tareas[i].titulo
        let descripcion = tareas[i].descripcion

        root.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p> ${titulo} -- ${descripcion}</p>
                <a class="btn btn-danger" onclick="eliminarTarea('${titulo}')">Eliminar</a>
            </div>
        </div>`
    }
}


function eliminarTarea (title) {

   let tareas = JSON.parse(localStorage.getItem('tasks'))

   for( let i = 0; i < tareas.length ; i++){

    let tituloAc = tareas[i].titulo

        if(title == tituloAc){

            tareas.splice(i, 1)
        }
   }

   localStorage.setItem('tasks',  JSON.stringify(tareas))
   getTareas()
}

getTareas()


