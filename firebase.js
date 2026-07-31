// ==========================================
// SIGIB 03
// CONEXIÓN FIREBASE
// ==========================================


console.log("ENTRANDO A FIREBASE.JS");


// Importar Firebase

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getFirestore } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ==========================================
// CONFIGURACIÓN SIGIB 03
// ==========================================


const firebaseConfig = {


    apiKey: "AIzaSyDzsWkNLKwz0U2iFuYax-4GttWbSvQ-5jQ",


    authDomain: "sigib03-ddaeb.firebaseapp.com",


    projectId: "sigib03-ddaeb",


    storageBucket: "sigib03-ddaeb.firebasestorage.app",


    messagingSenderId: "381032367890",


    appId: "1:381032367890:web:391fd8fcc55dded04a55cb"


};




// ==========================================
// INICIALIZAR FIREBASE
// ==========================================


const app = initializeApp(firebaseConfig);




// ==========================================
// CONEXIÓN FIRESTORE
// ==========================================


const db = getFirestore(app);




console.log("🔥 Firebase SIGIB 03 conectado");




// ==========================================
// EXPORTAR BASE DE DATOS
// ==========================================


export { db };
