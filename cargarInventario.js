// ========================================
// SIGIB 03
// CARGA INICIAL INVENTARIO A FIREBASE
// ========================================

import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



async function cargarInventarioInicial(){


    if(typeof inventario === "undefined"){

        console.error(
            "❌ No existe inventario. Revisar datos.js"
        );

        return;

    }



    const existente = await getDocs(
        collection(db,"inventario")
    );


    if(!existente.empty){

        console.warn(
            "⚠️ Ya existen datos en inventario Firebase"
        );

        return;

    }



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


            console.log(
                "✅ Cargado:",
                ubicacion,
                material.nombre
            );


        }


    }


    console.log(
        "🔥 INVENTARIO SIGIB 03 CARGADO A FIREBASE"
    );


}



window.cargarInventarioInicial =
cargarInventarioInicial;
