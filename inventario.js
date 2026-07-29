/* ==========================================
   SIGIB 03
   MODULO INVENTARIO FIREBASE
========================================== */


async function cargarInventarioFirebase(){


if(typeof leerInventarioFirebase === "function"){


let datos = await leerInventarioFirebase();


if(datos.length > 0){


inventario = datos;


localStorage.setItem(

"inventario",

JSON.stringify(inventario)

);


}


}


}







async function mostrarInventario(){


await cargarInventarioFirebase();



let html = `

<h2>📦 Inventario</h2>


<button onclick="nuevoMaterial()">

➕ Nuevo Material

</button>


`;



for(let area in areas){


html += `

<div class="card">


<button onclick="verSubcategorias('${area}')">

📂 ${area}

</button>


</div>


`;


}



cambiarContenido(html);


}








function verSubcategorias(area){


let html = `

<h2>📂 ${area}</h2>


<button onclick="mostrarInventario()">

⬅ Volver

</button>


`;



areas[area].forEach(sub=>{


html += `

<div class="card">


<button onclick="verMateriales('${area}','${sub}')">

${sub}

</button>


</div>


`;



});


cambiarContenido(html);


}








function verMateriales(area,sub){


let html = `

<h2>${sub}</h2>


<button onclick="verSubcategorias('${area}')">

⬅ Volver

</button>


`;



let encontrados=false;



inventario.forEach((m,i)=>{


if(m.area==area && m.subcategoria==sub){


encontrados=true;



html += `

<div class="card">


<h3>${m.nombre}</h3>


📦 Cantidad:
${m.cantidad}


<br>


📍 Ubicación:
${m.ubicacion}


<br>


Estado:
${m.estado}


<br><br>


<button onclick="editarMaterial(${i})">

✏️ Modificar

</button>


</div>


`;

}


});



if(!encontrados){


html += `

<div class="card">

No hay materiales cargados

</div>


`;

}



cambiarContenido(html);


}








function nuevoMaterial(){


let html = `

<h2>➕ Nuevo Material</h2>


<select id="nuevoArea" onchange="cargarSubNuevo()">


<option value="">

Seleccione área

</option>


`;



for(let a in areas){


html += `

<option value="${a}">

${a}

</option>


`;

}



html += `


</select>


<select id="nuevoSub">


<option>

Seleccione subcategoría

</option>


</select>



<input id="nuevoNombre"

placeholder="Material">


<input id="nuevoCantidad"

type="number"

placeholder="Cantidad">



<input id="nuevoUbicacion"

placeholder="Ubicación">



<select id="nuevoEstado">


<option>🟢 Operativo</option>

<option>🟡 Mantenimiento</option>

<option>🔴 Fuera de servicio</option>


</select>



<textarea id="nuevoObs"

placeholder="Observaciones">

</textarea>



<button onclick="guardarMaterialNuevo()">

💾 Guardar

</button>


`;



cambiarContenido(html);


}








function cargarSubNuevo(){


let area = nuevoArea.value;


let select = nuevoSub;


select.innerHTML="";



if(areas[area]){


areas[area].forEach(s=>{


let op=document.createElement("option");


op.text=s;


select.add(op);


});


}


}








async function guardarMaterialNuevo(){


let material={


area:nuevoArea.value,

subcategoria:nuevoSub.value,

nombre:nuevoNombre.value,

cantidad:Number(nuevoCantidad.value),

ubicacion:nuevoUbicacion.value,

estado:nuevoEstado.value,

obs:nuevoObs.value,

creadoPor:usuarioActual.nombre,

fecha:new Date().toLocaleString()


};




// respaldo local

inventario.push(material);


localStorage.setItem(

"inventario",

JSON.stringify(inventario)

);



// Firebase

if(typeof guardarMaterialFirebase === "function"){


await guardarMaterialFirebase(material);


}



alert("Material guardado");


mostrarInventario();


}








function editarMaterial(i){


let m=inventario[i];


let html=`


<h2>✏️ Editar Material</h2>



<input id="editCantidad"

value="${m.cantidad}">



<input id="editUbicacion"

value="${m.ubicacion}">



<select id="editEstado">

<option>${m.estado}</option>

<option>🟢 Operativo</option>

<option>🟡 Mantenimiento</option>

<option>🔴 Fuera de servicio</option>

</select>



<textarea id="editObs">

${m.obs || ""}

</textarea>



<button onclick="guardarEdicionMaterial(${i})">

💾 Guardar cambios

</button>


`;



cambiarContenido(html);


}








function guardarEdicionMaterial(i){


inventario[i].cantidad =
Number(editCantidad.value);


inventario[i].ubicacion =
editUbicacion.value;


inventario[i].estado =
editEstado.value;


inventario[i].obs =
editObs.value;


localStorage.setItem(

"inventario",

JSON.stringify(inventario)

);



alert("Cambios guardados");


mostrarInventario();


}








window.mostrarInventario = mostrarInventario;

window.nuevoMaterial = nuevoMaterial;

window.guardarMaterialNuevo = guardarMaterialNuevo;

window.editarMaterial = editarMaterial;

window.guardarEdicionMaterial = guardarEdicionMaterial;

window.verSubcategorias = verSubcategorias;

window.verMateriales = verMateriales;

window.cargarSubNuevo = cargarSubNuevo;