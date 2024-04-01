const rows =  document.querySelector(".rows");
const alerta = document.querySelector("#nuevaTarea");
const botonAgrega = document.querySelector("#ingresoTarea");
const inputTarea = document.querySelector("#nuevaTarea");
const total =document.querySelector("#nt")
const realizada =document.querySelector("#realizada")

const tareas = [{id: 1711936216743, nombreTarea:'lavar auto',check:false},
{id: 1711936216744, nombreTarea:'lavar ropa',check: false},
{id: 1711936216750, nombreTarea:'comprar pan',check: true}
];

botonAgrega.addEventListener ("click", () => { 
      const nuevaTarea = {
        id: Date.now(),
        nombreTarea: inputTarea.value,
        check: "",
      };
 
      tareas.push(nuevaTarea);
      inputTarea.value = "";
      renderLista();

    })
  
  const renderLista = function () {
    let htmlElementoRows = "";
    for (let tarea of tareas) {
      htmlElementoRows += `
      <div class="id-rows">${tarea.id}</div>
      <div class="tarea-rows">${tarea.nombreTarea}</div>
      <div class="realizada-rows"><input type="checkbox" value ="false" class="checkbox" id="checkbox_${tarea.id}"></div>
      <button class="eliminar-rows"><button" onClick="eliminarTarea(${tarea.id})"</button>X</button>
    `;
    }
    rows.innerHTML = htmlElementoRows;
    total.innerHTML = tareas.length;
    
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        renderRealizadas();
      });
    });
  };

  renderLista();
  
  const eliminarTarea = function (id) {
    const posicion = tareas.findIndex((tarea) => tarea.id == id);
    tareas.splice(posicion, 1);
    renderLista();
  };
  
  
  const renderRealizadas = () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    let tareasRealizadas = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked == true) {
        tareasRealizadas++;
      }
    });
    realizadas.innerHTML = tareasRealizadas;
  };




