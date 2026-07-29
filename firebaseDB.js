/* ==========================================
   SIGIB 03
   FIREBASE DATABASE
========================================== */


import { db } from "./firebase.js";


import {

collection,

addDoc,

getDocs

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





// ==========================================
// INVENTARIO
// ==========================================



async function guardarMaterialFirebase(material){


await addDoc(

collection(db,"inventario"),

material

);


}





async function leerInventarioFirebase(){


let lista=[];



const datos = await getDocs(

collection(db,"inventario")

);



datos.forEach((doc)=>{


lista.push({

id:doc.id,

...doc.data()

});


});



return lista;


}







// ==========================================
// MOVIMIENTOS
// ==========================================



async function guardarMovimientoFirebase(movimiento){


await addDoc(

collection(db,"movimientos"),

movimiento

);


}







// ==========================================
// HACER FUNCIONES VISIBLES PARA SIGIB 03
// ==========================================


window.guardarMaterialFirebase = guardarMaterialFirebase;


window.leerInventarioFirebase = leerInventarioFirebase;


window.guardarMovimientoFirebase = guardarMovimientoFirebase;