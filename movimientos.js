/* ==========================================
   SIGIB 03
   MODULO MOVIMIENTOS
========================================== */


let movimientos = JSON.parse(
    localStorage.getItem("movimientos")
) || [];



function mostrarMovimientos(){


let html = `

<h2>🔄 Movimientos</h2>


<button onclick="nuevoMovimiento()">
➕ Nuevo Movimiento
</button>


<hr>

`;



if(movimientos.length === 0){

html += `

<div class="card">

<p>No hay movimientos registrados</p>

</div>

`;

}



movimientos.forEach((m,i)=>{


html += `

<div class="card">

<h3>${m.tipo}</h3>


📦 Material:
${m.material}


<br>

🔢 Cantidad:
${m.cantidad}


<br>

📍 Ubicación:
${m.destino}


<br>

👤 Responsable:
${m.responsable}


<br>

📅 Fecha:
${m.fecha}


<br>

🟡 Estado:
${m.estado}


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

<option>Salida</option>

<option>Ingreso</option>

<option>Mantenimiento</option>

<option>Baja</option>

</select>



<br><br>


<input id="movMaterial"

placeholder="Material">



<br><br>


<input id="movCantidad"

type="number"

placeholder="Cantidad">



<br><br>


<input id="movDestino"

placeholder="Destino / Ubicación">



<br><br>


<textarea id="movObs"

placeholder="Observaciones">

</textarea>


<br><br>


<button onclick="guardarMovimiento()">

💾 Guardar Movimiento

</button>


<br><br>


<button onclick="mostrarMovimientos()">

⬅ Volver

</button>



`;



cambiarContenido(html);


}




function guardarMovimiento(){



let movimiento = {


tipo:
document.getElementById("movTipo").value,


material:
document.getElementById("movMaterial").value,


cantidad:
Number(document.getElementById("movCantidad").value),


destino:
document.getElementById("movDestino").value,


observacion:
document.getElementById("movObs").value,


responsable:
"Usuario SIGIB",


estado:
"Pendiente",


fecha:
new Date().toLocaleString()


};



movimientos.push(movimiento);



localStorage.setItem(

"movimientos",

JSON.stringify(movimientos)

);



alert("Movimiento guardado");


mostrarMovimientos();


}




function finalizarMovimiento(i){


movimientos[i].estado="Finalizado";


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
