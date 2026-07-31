// ========================================
// SIGIB 03
// MODULO PIZARRA OPERATIVA
// ========================================


let tareasPizarra = JSON.parse(
    localStorage.getItem("SIGIB_tareas")
) || [];




// ========================================
// MOSTRAR PIZARRA
// ========================================

function mostrarPizarra() {


    const panel = document.getElementById("panel");


    let contenido = `


    <div class="contenedor">


    <button onclick="mostrarMenuPrincipal()">
        ⬅ Volver
    </button>


    <h1>
        📋 PIZARRA SIGIB 03
    </h1>


    <h2>
        Tareas operativas
    </h2>


    <button onclick="nuevaTarea()">
        ➕ Nueva tarea
    </button>


    <hr>


    `;



    if(tareasPizarra.length === 0){


        contenido += `

        <p>
        📋 No hay tareas cargadas
        </p>

        `;


    }



    tareasPizarra.forEach((tarea,index)=>{


        contenido += `


        <div class="tarjeta">


        <h3>
        📝 ${tarea.tarea}
        </h3>


        <p>
        🎯 Área:
        ${tarea.area}
        </p>


        <p>
        🚨 Prioridad:
        ${tarea.prioridad}
        </p>


        <p>
        📅 Creada:
        ${tarea.fechaCreacion}
        </p>


        <p>
        👤 Creada por:
        ${tarea.creador}
        </p>



        <p>
        Estado:
        ${tarea.estado}
        </p>



        `;



        if(tarea.estado === "Pendiente"){


            contenido += `


            <button onclick="realizarTarea(${index})">

            ✅ Realizar

            </button>


            `;


        }
        else{


            contenido += `


            <p>
            👤 Realizada por:
            ${tarea.realizadaPor}
            </p>


            <p>
            📅 Finalizada:
            ${tarea.fechaFinalizacion}
            </p>


            `;


        }



        contenido += `


        </div>


        `;



    });




    contenido += `


    </div>


    `;



    panel.innerHTML = contenido;


}





// ========================================
// NUEVA TAREA
// ========================================


function nuevaTarea(){


    const panel =
    document.getElementById("panel");



    panel.innerHTML = `


    <div class="contenedor">


    <button onclick="mostrarPizarra()">
        ⬅ Volver
    </button>


    <h2>
    ➕ Nueva tarea
    </h2>



    <textarea

    id="textoTarea"

    placeholder="Descripción de la tarea">

    </textarea>


    <br><br>



    <select id="areaTarea">


        <option>
        🚒 Incendio estructural
        </option>


        <option>
        🌲 Incendio forestal
        </option>


        <option>
        🚗 Rescate vehicular
        </option>


        <option>
        🩺 Trauma
        </option>


        <option>
        🌊 Rescate acuático
        </option>


        <option>
        🧗 GRIMP
        </option>


        <option>
        🫁 ERA
        </option>


        <option>
        👕 Ropería
        </option>


        <option>
        ⚙️ Equipos a explosión
        </option>


    </select>


    <br><br>



    <select id="prioridadTarea">


        <option>
        🔴 ALTA
        </option>


        <option>
        🟡 MEDIA
        </option>


        <option>
        🟢 BAJA
        </option>


    </select>



    <br><br>



    <button onclick="guardarTarea()">

        💾 Guardar tarea

    </button>



    </div>


    `;


}





// ========================================
// GUARDAR TAREA
// ========================================


function guardarTarea(){



    let nueva = {


        tarea:
        document.getElementById("textoTarea").value,


        area:
        document.getElementById("areaTarea").value,


        prioridad:
        document.getElementById("prioridadTarea").value,


        fechaCreacion:
        new Date().toLocaleString(),


        creador:
        usuarioActivo 
        ?
        usuarioActivo.nombre
        :
        "Usuario SIGIB",


        estado:
        "Pendiente"



    };



    tareasPizarra.push(nueva);



    localStorage.setItem(

        "SIGIB_tareas",

        JSON.stringify(tareasPizarra)

    );



    alert("Tarea creada");


    mostrarPizarra();


}





// ========================================
// FINALIZAR TAREA
// ========================================


function realizarTarea(index){



    tareasPizarra[index].estado =
    "Realizado";



    tareasPizarra[index].realizadaPor =

    usuarioActivo

    ?

    usuarioActivo.nombre

    :

    "Usuario SIGIB";



    tareasPizarra[index].fechaFinalizacion =

    new Date().toLocaleString();



    localStorage.setItem(

        "SIGIB_tareas",

        JSON.stringify(tareasPizarra)

    );



    mostrarPizarra();


}




// ========================================
// EXPORTAR
// ========================================


window.mostrarPizarra = mostrarPizarra;

window.nuevaTarea = nuevaTarea;

window.guardarTarea = guardarTarea;

window.realizarTarea = realizarTarea;
