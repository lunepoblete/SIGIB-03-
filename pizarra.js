// ==========================================
// SIGIB 03
// PIZARRA OPERATIVA FIREBASE
// ==========================================


import { db } from "./firebase.js";


import {

    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    orderBy,
    query

} from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





// ==========================================
// MOSTRAR PIZARRA
// ==========================================


async function mostrarPizarra(){


    const panel =
    document.getElementById("panel");



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


    <div id="listaTareas">

    Cargando tareas...

    </div>


    </div>


    `;


    panel.innerHTML = contenido;


    cargarTareas();


}





// ==========================================
// CARGAR TAREAS FIRESTORE
// ==========================================


async function cargarTareas(){


    const lista =
    document.getElementById("listaTareas");



    lista.innerHTML = "";



    const q = query(

        collection(db,"tareas"),

        orderBy("fechaCreacion","desc")

    );



    const datos =
    await getDocs(q);



    if(datos.empty){


        lista.innerHTML = `

        <p>
        📋 No hay tareas cargadas
        </p>

        `;


        return;

    }





    datos.forEach((documento)=>{


        let tarea =
        documento.data();


        let id =
        documento.id;




        lista.innerHTML += `



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



        ${
        tarea.estado === "Pendiente"

        ?

        `

        <button onclick="realizarTarea('${id}')">

        ✅ Realizar

        </button>

        `

        :

        `

        <p>
        👤 Realizada por:
        ${tarea.realizadaPor}
        </p>


        <p>
        📅 Finalizada:
        ${tarea.fechaFinalizacion}
        </p>

        `

        }



        <button onclick="eliminarTarea('${id}')">

        🗑️ Eliminar

        </button>



        </div>



        `;


    });


}





// ==========================================
// NUEVA TAREA
// ==========================================


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

💾 Guardar

</button>


</div>


`;


}





// ==========================================
// GUARDAR TAREA EN FIRESTORE
// ==========================================


async function guardarTarea(){


let tarea = {


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



try {

    await addDoc(collection(db, "tareas"), tarea);

    alert("✅ Tarea creada correctamente");

    mostrarPizarra();

} catch (error) {

    console.error(error);

    alert("❌ Error al guardar la tarea:\n" + error.message);

}


}







// ==========================================
// REALIZAR TAREA
// ==========================================


async function realizarTarea(id){



await updateDoc(

    doc(db,"tareas",id),

    {


    estado:"Realizado",


    realizadaPor:

    usuarioActivo

    ?

    usuarioActivo.nombre

    :

    "Usuario SIGIB",



    fechaFinalizacion:

    new Date().toLocaleString()


    }

);



mostrarPizarra();


}





// ==========================================
// ELIMINAR TAREA
// ==========================================


async function eliminarTarea(id){


let confirmar =
confirm("¿Eliminar tarea?");



if(!confirmar) return;



await deleteDoc(

    doc(db,"tareas",id)

);



mostrarPizarra();


}





// ==========================================
// EXPORTAR
// ==========================================


window.mostrarPizarra = mostrarPizarra;

window.nuevaTarea = nuevaTarea;

window.guardarTarea = guardarTarea;

window.realizarTarea = realizarTarea;

window.eliminarTarea = eliminarTarea;
