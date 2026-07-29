/* ==========================================
   SIGIB 03
   MODULO PIZARRA MEJORADO
========================================== */


function mostrarPizarra(){

let html = `

<h2>📝 Pizarra</h2>

<button onclick="nuevaTarea()">
➕ Nueva tarea
</button>

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

👤 Creada por:
${t.creador}

<br>

📅 ${t.fecha}


<button onclick="editarTarea(${t.id})">
✏️ Modificar
</button>


<button onclick="finalizarTarea(${t.id})">
✅ Finalizar
</button>


<button onclick="eliminarTarea(${t.id})">
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



finalizadas.forEach(t=>{


html += `

<div class="card">


<h3>✅ ${t.titulo}</h3>


📝 ${t.descripcion}


<br><br>

Creada por:
${t.creador}


<br>

Realizada por:
${t.realizador}


<br>

📅 ${t.fechaFinalizacion}


<button onclick="eliminarTarea(${t.id})">
🗑️ Eliminar
</button>


</div>

`;

});



cambiarContenido(html);

}





function editarTarea(id){


let t=tareas.find(
x=>x.id==id
);



let html=`


<h2>✏️ Modificar tarea</h2>


<input id="editTitulo"
value="${t.titulo}">


<textarea id="editDescripcion">
${t.descripcion}
</textarea>



<select id="editPrioridad">

<option>${t.prioridad}</option>

<option>
🟢 Baja
</option>

<option>
🟡 Media
</option>

<option>
🔴 Alta
</option>

</select>


<button onclick="guardarEdicionTarea(${id})">

💾 Guardar cambios

</button>


`;



cambiarContenido(html);


}







function guardarEdicionTarea(id){


let t=tareas.find(
x=>x.id==id
);


t.titulo=editTitulo.value;

t.descripcion=editDescripcion.value;

t.prioridad=editPrioridad.value;



localStorage.setItem(
"tareas",
JSON.stringify(tareas)
);



mostrarPizarra();


}







function eliminarTarea(id){


let confirmar =
confirm(
"¿Eliminar esta tarea?"
);



if(confirmar){


tareas=tareas.filter(
t=>t.id!=id
);



localStorage.setItem(
"tareas",
JSON.stringify(tareas)
);



mostrarPizarra();


}


}