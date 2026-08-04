// ==========================================
// SIGIB 03
// APP.JS
// PARTE 1
// LOGIN + PERMISOS + MENU
// ==========================================



import { db } from "./firebase.js";
import { personal, modulos, inventario } from "./datos.js";


import {

    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    orderBy

} from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ==========================================
// USUARIO ACTIVO
// ==========================================


window.usuarioActivo = null;




// ==========================================
// PERMISOS
// ==========================================


function esAdministrador(){


    if(!window.usuarioActivo)

        return false;



    return (

        window.usuarioActivo.areas &&

        window.usuarioActivo.areas.includes("TODAS")

    );


}





function perteneceArea(codigoModulo){



    if(!window.usuarioActivo)

        return false;



    if(esAdministrador())

        return true;




    return (

        window.usuarioActivo.areas &&

        window.usuarioActivo.areas.includes(codigoModulo)

    );


}






function puedeModificarInventario(codigoModulo){


    return perteneceArea(codigoModulo);


}






// ==========================================
// INGRESO POR LEGAJO
// ==========================================

function ingresar(){

    const legajo = document
        .getElementById("legajo")
        .value
        .trim();

    const usuario = personal.find(
        persona => persona.legajo === legajo
    );

    if(!usuario){

        alert("Legajo no registrado");

        return;

    }

    window.usuarioActivo = usuario;

    document
        .getElementById("login")
        .style.display = "none";

    document
        .getElementById("panel")
        .style.display = "block";

    mostrarMenuModulos();

}

window.ingresar = ingresar;


// ==========================================
// MENU PRINCIPAL
// ==========================================


function mostrarMenuModulos(){



let contenido = `



<div class="contenedor">


<h1>

🚒 SIGIB 03

</h1>




<p>

👤 ${window.usuarioActivo.nombre}

<br>

${window.usuarioActivo.funcion}

</p>



<hr>





<button onclick="mostrarPizarra()">

📋 Pizarra

</button>





<button onclick="mostrarMovimientos()">

🔄 Movimientos

</button>





<hr>




<h2>

Seleccione un área

</h2>




<div class="modulos">


`;





modulos.forEach((modulo,index)=>{



contenido += `



<button onclick="abrirModulo(${index})">


${modulo.nombre}


</button>



`;



});





contenido += `



</div>


</div>


`;





document

.getElementById("panel")

.innerHTML = contenido;



}
// ==========================================
// SIGIB 03
// APP.JS
// PARTE 2
// MODULOS + INVENTARIO FIREBASE
// ==========================================




// ==========================================
// ABRIR AREA
// ==========================================


function abrirModulo(index){



const modulo = modulos[index];





let contenido = `



<button onclick="mostrarMenuModulos()">

⬅ Volver

</button>





<h2>

${modulo.nombre}

</h2>





<div class="modulos">


`;





modulo.subdivisiones.forEach((sub)=>{



contenido += `



<button onclick="abrirInventario(

'${modulo.codigo}',

'${sub.codigo}',

'${modulo.nombre}',

'${sub.nombre}'

)">



${sub.nombre}



</button>



`;



});





contenido += `



</div>


`;





document

.getElementById("panel")

.innerHTML = contenido;



}









// ==========================================
// ABRIR INVENTARIO
// ==========================================


async function abrirInventario(

codigoModulo,

codigoUbicacion,

nombreModulo,

nombreUbicacion

){



window.moduloActual = codigoModulo;

window.ubicacionActual = codigoUbicacion;



let panel =

document.getElementById("panel");





panel.innerHTML = `



<button onclick="mostrarMenuModulos()">

⬅ Volver

</button>





<h2>

${nombreModulo}

</h2>





<h3>

${nombreUbicacion}

</h3>







<input

id="busqueda"

placeholder="🔍 Buscar elemento"

onkeyup="buscarInventario()"

>





<br><br>







${

puedeModificarInventario(codigoModulo)

?

`

<button onclick="agregarInventario(

'${codigoModulo}',

'${codigoUbicacion}',

'${nombreModulo}',

'${nombreUbicacion}'

)">

➕ Agregar elemento

</button>

`

:

`

<p>

👁️ Modo consulta

</p>

`

}







<hr>





<div id="listaInventario">

Cargando inventario...

</div>





`;





cargarInventario(codigoUbicacion);



}









// ==========================================
// CARGAR INVENTARIO FIREBASE
// ==========================================


async function cargarInventario(codigoUbicacion){



const lista =

document.getElementById("listaInventario");



lista.innerHTML = "";





try{



const q = query(

collection(db,"inventario"),

where(

"ubicacion",

"==",

codigoUbicacion

),

orderBy(

"nombre"

)

);





const datos = await getDocs(q);





if(datos.empty){


lista.innerHTML = `


<p>

📦 No hay elementos cargados

</p>


`;

return;


}







datos.forEach((documento)=>{



const item = documento.data();



let botones = "";





if(

puedeModificarInventario(window.moduloActual)

){



botones = `



<button onclick="editarInventario('${documento.id}')">

✏️ Editar

</button>





<button onclick="eliminarInventario('${documento.id}')">

🗑️ Eliminar

</button>



`;



}







lista.innerHTML += `



<div class="tarjeta">



<h3>

${item.nombre}

</h3>





<p>

📦 Cantidad:

${item.cantidad}

</p>





<p>

🟢 Estado:

${item.estado}

</p>





<p>

📍 Ubicación:

${item.ubicacion}

</p>





<p>

📝 ${item.observaciones || ""}

</p>





${botones}





</div>



`;



});



}

catch(error){


console.error(error);



lista.innerHTML = `

<p>

❌ Error cargando inventario

</p>

`;



}



}








// ==========================================
// BUSCAR INVENTARIO
// ==========================================


function buscarInventario(){



let texto =

document

.getElementById("busqueda")

.value

.toLowerCase();





document

.querySelectorAll(".tarjeta")

.forEach((tarjeta)=>{



tarjeta.style.display =



tarjeta.innerText

.toLowerCase()

.includes(texto)



?

"block"



:

"none";



});



}
// ==========================================
// SIGIB 03
// APP.JS
// PARTE 3
// GESTION INVENTARIO + EXPORTACIONES
// ==========================================




// ==========================================
// AGREGAR INVENTARIO
// ==========================================


async function agregarInventario(

codigoModulo,

codigoUbicacion,

nombreModulo,

nombreUbicacion

){



if(!puedeModificarInventario(codigoModulo)){


alert("No tiene permisos para modificar inventario");

return;


}





let nombre =

prompt("Nombre del elemento:");



if(!nombre)

return;





let cantidad =

prompt("Cantidad:");



if(cantidad === null)

return;





let estado =

prompt(

"Estado:",

"Bueno"

);





let observaciones =

prompt(

"Observaciones:",

""

);







try{



await addDoc(

collection(db,"inventario"),

{


modulo:

nombreModulo,



ubicacion:

codigoUbicacion,



nombre:

nombre,



cantidad:

Number(cantidad),



estado:

estado,



observaciones:

observaciones || "",



cargadoPor:

window.usuarioActivo.nombre,



legajo:

window.usuarioActivo.legajo,



fechaCarga:

new Date().toLocaleString()



}

);





alert("✅ Elemento agregado correctamente");





abrirInventario(

codigoModulo,

codigoUbicacion,

nombreModulo,

nombreUbicacion

);



}

catch(error){


console.error(error);


alert(

"❌ Error cargando material:\n"

+

error.message

);


}



}








// ==========================================
// EDITAR INVENTARIO POR CAMPOS
// ==========================================


async function editarInventario(id){



if(!window.moduloActual)

return;



if(!puedeModificarInventario(window.moduloActual)){


alert("No tiene permisos");


return;


}





let opcion = prompt(

"¿Qué desea modificar?\n\n"

+

"1 - Nombre\n"

+

"2 - Cantidad\n"

+

"3 - Estado\n"

+

"4 - Observaciones"

);





let cambios = {};





switch(opcion){



case "1":


let nombre = prompt(

"Nuevo nombre:"

);


if(nombre)

cambios.nombre = nombre;


break;





case "2":


let cantidad = prompt(

"Nueva cantidad:"

);


if(cantidad !== null)

cambios.cantidad = Number(cantidad);


break;





case "3":


let estado = prompt(

"Nuevo estado:"

);


if(estado)

cambios.estado = estado;


break;





case "4":


let observaciones = prompt(

"Nuevas observaciones:"

);


if(observaciones !== null)

cambios.observaciones = observaciones;


break;





default:


return;


}





cambios.modificadoPor =

window.usuarioActivo.nombre;



cambios.legajoModificacion =

window.usuarioActivo.legajo;



cambios.fechaModificacion =

new Date().toLocaleString();








try{



await updateDoc(

doc(db,"inventario",id),

cambios

);





alert("✅ Material actualizado");





location.reload();



}

catch(error){


console.error(error);


alert(

"❌ Error actualizando:\n"

+

error.message

);


}



}








// ==========================================
// ELIMINAR INVENTARIO
// ==========================================


async function eliminarInventario(id){



if(!puedeModificarInventario(window.moduloActual)){


alert("No tiene permisos");


return;


}





if(

!confirm(

"¿Eliminar este elemento?"

)

)

return;







try{



await deleteDoc(

doc(db,"inventario",id)

);





alert("🗑️ Elemento eliminado");





location.reload();



}

catch(error){


console.error(error);


alert(

"❌ Error eliminando:\n"

+

error.message

);


}



}








// ==========================================
// EXPORTAR FUNCIONES AL HTML
// ==========================================


window.ingresar = ingresar;


window.mostrarMenuModulos = mostrarMenuModulos;


window.abrirModulo = abrirModulo;


window.abrirInventario = abrirInventario;


window.agregarInventario = agregarInventario;


window.editarInventario = editarInventario;


window.eliminarInventario = eliminarInventario;


window.buscarInventario = buscarInventario;


window.esAdministrador = esAdministrador;


window.puedeModificarInventario = puedeModificarInventario;



console.log(

"🔥 SIGIB 03 APP.JS cargado correctamente"

);
