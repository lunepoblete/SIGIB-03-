/* ==========================================
   SIGIB 03
   CONEXIÓN FIREBASE
========================================== */


import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { 
getFirestore 
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// Configuración SIGIB03

const firebaseConfig = {

apiKey: "AIzaSyDzsWkNLKwz0U2iFuYax-4GttWbSvQ-5jQ",

authDomain: "sigib03-ddaeb.firebaseapp.com",

projectId: "sigib03-ddaeb",

storageBucket: "sigib03-ddaeb.firebasestorage.app",

messagingSenderId: "381032367890",

appId: "1:381032367890:web:391fd8fcc55dded04a55cb"

};




// Inicializar Firebase

const app = initializeApp(firebaseConfig);




// Base de datos

const db = getFirestore(app);



// Exportar conexión

export { db };