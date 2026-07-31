// ==========================================
// SIGIB 03
// MODULO MOVIMIENTOS FIREBASE
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
// MOSTRAR MOVIMIENTOS
// ==========================================


async function mostrarMovimientos(){


const panel =
document.getElementById("panel");



panel.innerHTML = `


<div class="contenedor">


<button onclick="mostrarMenuModulos()">

⬅ Volver

</button>



<h1>
🔄 Movimientos
</h1>



<button onclick="nuevoMovimiento()">

➕ Nuevo Movimiento

</button>



<hr>



<div id="listaMovimientos">

Cargando movimientos...

</div>



</div>


`;



cargarMovimientos();


}





// ==========================================
// CARGAR MOVIMIENTOS FIRESTORE
// ==========================================


async function cargarMovimientos(){


const lista =
document.getElementById("listaMovimientos");



lista.innerHTML = "";



const q = query(

collection(db,"movimientos"),

orderBy("fecha","desc")

);



const datos =
await getDocs(q);




if(datos.empty){


lista.innerHTML = `

<p>
🔄 No hay movimientos registrados
</p>

`;


return;

}





datos.forEach((documento)=>{


let movimiento =
documento.data();


let id =
documento.id;




lista.innerHTML += `


<div class="tarjeta">


<h3>

${movimiento.tipo}

</h3>



<p>

📦 Material:

${movimiento.material}

</p>



<p>

🔢 Cantidad:

${movimiento.cantidad}

</p>



<p>

📍 Destino:

${movimiento.destino}

</p>



<p>

📝 Observación:

${movimiento.observacion}

</p>



<p>

👤 Responsable:

${movimiento.responsable}

</p>



<p>

📅 Fecha:

${movimiento.fecha}

</p>



<p>

Estado:

${movimiento.estado}

</p>




${
movimiento.estado === "Pendiente"

?

`

<button onclick="finalizarMovimiento('${id}')">

✅ Finalizar

</button>

`

:

`

<p>

✔ Finalizado por:

${movimiento.finalizadoPor}

</p>


<p>

📅 Fecha finalización:

${movimiento.fechaFinalizacion}

</p>

`

}




<button onclick="eliminarMovimiento('${id}')">

🗑️ Eliminar

</button>



</div>


`;



});



}





// ==========================================
// NUEVO MOVIMIENTO
// ==========================================


function nuevoMovimiento(){


const panel =
document.getElementById("panel");



panel.innerHTML = `


<div class="contenedor">


<button onclick="mostrarMovimientos()">

⬅ Volver

</button>



<h2>
➕ Nuevo Movimiento
</h2>




<select id="movTipo">


<option>
Salida
</option>


<option>
Ingreso
</option>


</select>



<br><br>




<input

id="movMaterial"

placeholder="Material"

>




<br><br>



<input

id="movCantidad"

type="number"

placeholder="Cantidad"

>




<br><br>



<input

id="movDestino"

placeholder="Destino / Ubicación"

>




<br><br>



<textarea

id="movObs"

placeholder="Observaciones">

</textarea>




<br><br>



<button onclick="guardarMovimiento()">

💾 Guardar Movimiento

</button>



</div>


`;



}





// ==========================================
// GUARDAR MOVIMIENTO FIREBASE
// ==========================================


async function guardarMovimiento(){



let movimiento = {


tipo:

document.getElementById("movTipo").value,



material:

document.getElementById("movMaterial").value,



cantidad:

Number(

document.getElementById("movCantidad").value

),



destino:

document.getElementById("movDestino").value,



observacion:

document.getElementById("movObs").value,



responsable:

usuarioActivo

?

usuarioActivo.nombre

:

"Usuario SIGIB",



legajo:

usuarioActivo

?

usuarioActivo.legajo

:

"",



estado:

"Pendiente",



fecha:

new Date().toLocaleString()


};





await addDoc(

collection(db,"movimientos"),

movimiento

);




alert("Movimiento guardado");



mostrarMovimientos();



}





// ==========================================
// FINALIZAR MOVIMIENTO
// ==========================================


async function finalizarMovimiento(id){



await updateDoc(

doc(db,"movimientos",id),

{


estado:"Finalizado",


finalizadoPor:

usuarioActivo

?

usuarioActivo.nombre

:

"Usuario SIGIB",



fechaFinalizacion:

new Date().toLocaleString()


}

);



mostrarMovimientos();



}





// ==========================================
// ELIMINAR MOVIMIENTO
// ==========================================


async function eliminarMovimiento(id){



let confirmar =
confirm("¿Eliminar movimiento?");



if(!confirmar)

return;




await deleteDoc(

doc(db,"movimientos",id)

);



mostrarMovimientos();



}





// ==========================================
// EXPORTAR FUNCIONES
// ==========================================


window.mostrarMovimientos = mostrarMovimientos;

window.nuevoMovimiento = nuevoMovimiento;

window.guardarMovimiento = guardarMovimiento;

window.finalizarMovimiento = finalizarMovimiento;

window.eliminarMovimiento = eliminarMovimiento;
