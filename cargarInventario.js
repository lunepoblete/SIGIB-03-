// ========================================
// SIGIB 03
// CARGA INICIAL INVENTARIO A FIREBASE
// ========================================

import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ========================================
// CARGAR INVENTARIO INICIAL
// ========================================

async function cargarInventarioInicial() {

    console.log("🚒 VERSION NUEVA 04/08/2026");

    const existente = await getDocs(
        collection(db, "inventario")
    );

    console.log("📦 Cantidad de documentos:", existente.size);

    existente.forEach((doc) => {

        console.log("ID:", doc.id);
        console.log(doc.data());

    });

    if (!existente.empty) {

        console.log("⚠️ Ya existen datos en inventario Firebase");

        return;

    }

    let total = 0;

    for (const ubicacion in inventario) {

        const materiales = inventario[ubicacion];

        for (const material of materiales) {

            await addDoc(

                collection(db, "inventario"),

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
        "📦 Total de elementos:",
        total
    );

}

window.cargarInventarioInicial = cargarInventarioInicial;
