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


const panel = document.getElementById("panel");



panel.innerHTML = `


<div class="contenedor">


<button onclick="mostrarMenuModulos()">

⬅ Volver

</button>



<h1>

🔄 Movimientos SIGIB 03

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
// CARGAR MOVIMIENTOS
// ==========================================


async function cargarMovimientos(){


const lista =
document.getElementById("listaMovimientos");



try{


const q = query(

collection(db,"movimientos"),

orderBy("fecha","desc")

);



const datos = await getDocs(q);



lista.innerHTML = "";



if(datos.empty){


lista.innerHTML = `

<p>

🔄 No hay movimientos registrados

</p>

`;

return;


}





datos.forEach((documento)=>{


const movimiento = documento.data();

const id = documento.id;



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

🆔 Legajo:

${movimiento.legajo}

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

catch(error){


console.error(error);


lista.innerHTML = `

<p>

❌ Error cargando movimientos

</p>

`;


}


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
// GUARDAR MOVIMIENTO
// ==========================================


async function guardarMovimiento(){



const movimiento = {


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

window.usuarioActivo

?

window.usuarioActivo.nombre

:

"Usuario SIGIB",



legajo:

window.usuarioActivo

?

window.usuarioActivo.legajo

:

"",



estado:

"Pendiente",



fecha:

new Date().toLocaleString()


};





try{


await addDoc(

collection(db,"movimientos"),

movimiento

);



alert("✅ Movimiento guardado correctamente");



mostrarMovimientos();


}

catch(error){


console.error(error);


alert(

"❌ Error guardando movimiento:\n"

+

error.message

);


}


}






// ==========================================
// FINALIZAR MOVIMIENTO
// ==========================================


async function finalizarMovimiento(id){



try{


await updateDoc(

doc(db,"movimientos",id),

{


estado:

"Finalizado",



finalizadoPor:

window.usuarioActivo

?

window.usuarioActivo.nombre

:

"Usuario SIGIB",



fechaFinalizacion:

new Date().toLocaleString()


}

);



mostrarMovimientos();


}

catch(error){


console.error(error);


alert(error.message);


}


}






// ==========================================
// ELIMINAR MOVIMIENTO
// ==========================================


async function eliminarMovimiento(id){



if(!confirm("¿Eliminar movimiento?"))

return;



try{


await deleteDoc(

doc(db,"movimientos",id)

);



mostrarMovimientos();


}

catch(error){


console.error(error);


alert(error.message);


}


}






// ==========================================
// EXPORTAR FUNCIONES
// ==========================================


window.mostrarMovimientos = mostrarMovimientos;

window.nuevoMovimiento = nuevoMovimiento;

window.guardarMovimiento = guardarMovimiento;

window.finalizarMovimiento = finalizarMovimiento;

window.eliminarMovimiento = eliminarMovimiento;



console.log("🔄 Movimientos SIGIB 03 cargado correctamente");
