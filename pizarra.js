/* ==========================================
   SIGIB 03
   MODULO PIZARRA
   FIREBASE
========================================== */

let tareas = [];



async function cargarPizarraFirebase(){

    if(typeof leerPizarraFirebase=="function"){

        let datos = await leerPizarraFirebase();

        tareas = datos;

        localStorage.setItem(
            "tareas",
            JSON.stringify(tareas)
        );

    }else{

        tareas = JSON.parse(
            localStorage.getItem("tareas") || "[]"
        );

    }

}






async function mostrarPizarra(){

    await cargarPizarraFirebase();

    let html = `

<h2>📝 Pizarra</h2>

<button onclick="nuevaTarea()">
➕ Nueva tarea
</button>

<hr>

<h3>⏳ Pendientes</h3>

`;



let pendientes = tareas.filter(
t => t.estado=="Pendiente"
);



if(pendientes.length==0){

html += `

<div class="card">

No hay tareas pendientes

</div>

`;

}



pendientes.forEach(t=>{

html += `

<div class="card">

<h3>${t.titulo}</h3>

⚠️ Prioridad:
${t.prioridad}

<br><br>

📝 ${t.descripcion}

<br><br>

👤 ${t.creador}

<br>

📅 ${t.fecha}

<br><br>

<button onclick="editarTarea('${t.id}')">

✏️ Modificar

</button>

<button onclick="finalizarTarea('${t.id}')">

✅ Finalizar

</button>

<button onclick="eliminarTarea('${t.id}')">

🗑️ Eliminar

</button>

</div>

`;

});



html += `

<hr>

<h3>✅ Finalizadas</h3>

`;



let finalizadas = tareas.filter(
t=>t.estado=="Finalizada"
);



if(finalizadas.length==0){

html += `

<div class="card">

No hay tareas finalizadas

</div>

`;

}



finalizadas.forEach(t=>{

html += `

<div class="card">

<h3>✅ ${t.titulo}</h3>

📝 ${t.descripcion}

<br><br>

👤 ${t.creador}

<br>

✔ ${t.realizador}

<br>

📅 ${t.fechaFinalizacion}

<br><br>

<button onclick="eliminarTarea('${t.id}')">

🗑️ Eliminar

</button>

</div>

`;

});



cambiarContenido(html);

}
/* ==========================================
   NUEVA TAREA
========================================== */

function nuevaTarea(){

let html = `

<h2>➕ Nueva tarea</h2>

<input
id="nuevoTitulo"
placeholder="Título">

<textarea
id="nuevoDescripcion"
placeholder="Descripción">
</textarea>

<select id="nuevoPrioridad">

<option>🟢 Baja</option>

<option selected>🟡 Media</option>

<option>🔴 Alta</option>

</select>

<br><br>

<button onclick="guardarTarea()">
💾 Guardar
</button>

<button onclick="mostrarPizarra()">
❌ Cancelar
</button>

`;

cambiarContenido(html);

}





async function guardarTarea(){

let tarea={

id:Date.now().toString(),

titulo:nuevoTitulo.value,

descripcion:nuevoDescripcion.value,

prioridad:nuevoPrioridad.value,

estado:"Pendiente",

creador:usuarioActual.nombre,

fecha:new Date().toLocaleString()

};



tareas.push(tarea);



localStorage.setItem(

"tareas",

JSON.stringify(tareas)

);



if(typeof guardarTareaFirebase=="function"){

await guardarTareaFirebase(tarea);

}



alert("Tarea creada");



mostrarPizarra();

}
/* ==========================================
   EDITAR TAREA
========================================== */

function editarTarea(id){

let t=tareas.find(x=>x.id==id);

let html=`

<h2>✏️ Modificar tarea</h2>

<input
id="editTitulo"
value="${t.titulo}">

<textarea id="editDescripcion">${t.descripcion}</textarea>

<select id="editPrioridad">

<option ${t.prioridad=="🟢 Baja"?"selected":""}>🟢 Baja</option>

<option ${t.prioridad=="🟡 Media"?"selected":""}>🟡 Media</option>

<option ${t.prioridad=="🔴 Alta"?"selected":""}>🔴 Alta</option>

</select>

<br><br>

<button onclick="guardarEdicionTarea('${id}')">
💾 Guardar cambios
</button>

<button onclick="mostrarPizarra()">
❌ Cancelar
</button>

`;

cambiarContenido(html);

}





function guardarEdicionTarea(id){

let t=tareas.find(x=>x.id==id);

t.titulo=editTitulo.value;

t.descripcion=editDescripcion.value;

t.prioridad=editPrioridad.value;

localStorage.setItem(
"tareas",
JSON.stringify(tareas)
);

mostrarPizarra();

}





function finalizarTarea(id){

let t=tareas.find(x=>x.id==id);

t.estado="Finalizada";

t.realizador=usuarioActual.nombre;

t.fechaFinalizacion=new Date().toLocaleString();

localStorage.setItem(
"tareas",
JSON.stringify(tareas)
);

mostrarPizarra();

}





function eliminarTarea(id){

if(confirm("¿Eliminar esta tarea?")){

tareas=tareas.filter(x=>x.id!=id);

localStorage.setItem(
"tareas",
JSON.stringify(tareas)
);

mostrarPizarra();

}