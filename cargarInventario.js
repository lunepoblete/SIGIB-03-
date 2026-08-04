// ========================================
// SIGIB 03
// LIMPIAR Y CARGAR INVENTARIO FIREBASE
// ========================================


import { db } from "./firebase.js";

import { inventario } from "./datos.js";


import {

collection,
addDoc,
getDocs,
deleteDoc,
doc

} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ========================================
// CARGA COMPLETA INVENTARIO
// ========================================


async function cargarInventarioInicial(){


console.log("🚒 INICIANDO CARGA COMPLETA SIGIB 03");




// BORRAR INVENTARIO ANTERIOR


const anterior = await getDocs(

collection(db,"inventario")

);



console.log(
"🗑️ Documentos encontrados:",
anterior.size
);



for(const documento of anterior.docs){


await deleteDoc(

doc(
db,
"inventario",
documento.id
)

);


console.log(
"🗑️ Eliminado:",
documento.id
);


}




let total = 0;




// CARGAR DATOS NUEVOS


for(const ubicacion in inventario){



const materiales = inventario[ubicacion];



for(const material of materiales){



await addDoc(

collection(db,"inventario"),

{


ubicacion: ubicacion,


nombre: material.nombre,


cantidad: material.cantidad,


estado: material.estado,


observaciones: material.observaciones,


fechaCarga: new Date()



}

);



total++;



console.log(

"✅ Cargado:",

ubicacion,

material.nombre

);



}


}




console.log(

"🔥 INVENTARIO SIGIB 03 CARGADO CORRECTAMENTE"

);


console.log(

"📦 Total elementos:",

total

);


}




window.cargarInventarioInicial = cargarInventarioInicial;

cargarInventarioInicial();
