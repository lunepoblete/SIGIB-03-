/* ==========================================
   SIGIB 03
   MODULO MOVIMIENTOS
========================================== */


function mostrarMovimientos(){


let html = `

<h2>🔄 Movimientos</h2>


<button onclick="nuevoMovimiento()">

➕ Nuevo Movimiento

</button>


<hr>

`;



movimientos.forEach((m,i)=>{


html += `

<div class="card">

<h3>${m.tipo}</h3>


📦 Material:
${m.material}


<br>

Cantidad:
${m.cantidad}


<br>

👤 Responsable:
${m.responsable}


<br>

📅 Fecha:
${m.fecha}


<br><br>


<button onclick="finalizarMovimiento(${i})">

✅ Finalizar

</button>


<button onclick="eliminarMovimiento(${i})">

🗑️ Eliminar

</button>


</div>

`;



});



cambiarContenido(html);


}







function nuevoMovimiento(){


let html = `


<h2>➕ Nuevo Movimiento</h2>



<select id="movTipo">

<option>
Salida
</option>

<option>
Ingreso
</option>

</select>



<input id="movMaterial"

placeholder="Material">



<input id="movCantidad"

type="number"

placeholder="Cantidad">



<input id="movDestino"

placeholder="Destino / Ubicación">



<textarea id="movObs"

placeholder="Observaciones">

</textarea>



<button onclick="guardarMovimiento()">

💾 Guardar Movimiento

</button>



`;



cambiarContenido(html);


}








async function guardarMovimiento(){


let movimiento = {


tipo:
movTipo.value,


material:
movMaterial.value,


cantidad:
Number(movCantidad.value),


destino:
movDestino.value,


observacion:
movObs.value,


responsable:
usuarioActual.nombre,


legajo:
usuarioActual.legajo,


estado:
"Pendiente",


fecha:
new Date().toLocaleString()


};




// respaldo local

movimientos.push(movimiento);


localStorage.setItem(

"movimientos",

JSON.stringify(movimientos)

);




// Firebase

if(typeof guardarMovimientoFirebase === "function"){


await guardarMovimientoFirebase(movimiento);


}



alert("Movimiento guardado");


mostrarMovimientos();


}








function finalizarMovimiento(i){


movimientos[i].estado="Finalizado";


movimientos[i].finalizadoPor=
usuarioActual.nombre;


movimientos[i].fechaFinalizacion=
new Date().toLocaleString();



localStorage.setItem(

"movimientos",

JSON.stringify(movimientos)

);



alert("Movimiento finalizado");


mostrarMovimientos();


}








function eliminarMovimiento(i){


movimientos.splice(i,1);



localStorage.setItem(

"movimientos",

JSON.stringify(movimientos)

);



alert("Movimiento eliminado");


mostrarMovimientos();


}








window.mostrarMovimientos = mostrarMovimientos;

window.nuevoMovimiento = nuevoMovimiento;

window.guardarMovimiento = guardarMovimiento;

window.finalizarMovimiento = finalizarMovimiento;

window.eliminarMovimiento = eliminarMovimiento;