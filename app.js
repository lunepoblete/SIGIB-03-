/* ==========================================
   SIGIB 03
   APP PRINCIPAL
========================================== */


let app = document.getElementById("app");



function guardarUsuario(){

localStorage.setItem(
"usuarioActual",
JSON.stringify(usuarioActual)
);

}



function cargarUsuario(){

let u = localStorage.getItem("usuarioActual");

if(u){

usuarioActual = JSON.parse(u);

}

}





function iniciar(){

cargarUsuario();


if(usuarioActual){

mostrarAplicacion();

}else{

mostrarLogin();

}

}







function mostrarLogin(){


app.innerHTML = `


<div class="logo">

🚒 SIGIB 03

</div>


<div class="sublogo">

BOMBEROS VOLUNTARIOS

<br>

JUNÍN DE LOS ANDES

</div>



<div class="card">


<h2>👤 Ingreso</h2>



<input 
id="inputLegajo"
placeholder="Ingrese legajo"
type="number">



<button onclick="ingresar()">

INGRESAR

</button>


</div>


`;

}









function ingresar(){


let legajo = inputLegajo.value;



if(usuarios[legajo]){


usuarioActual = {

legajo:legajo,

nombre:usuarios[legajo].nombre,

cargo:usuarios[legajo].cargo

};



guardarUsuario();


mostrarAplicacion();



}else{


alert(
"Legajo no encontrado"
);


}



}









function mostrarAplicacion(){


app.innerHTML = `


<header>


<div class="logo">

🚒 SIGIB 03

</div>


<div class="sublogo">

BOMBEROS VOLUNTARIOS

<br>

JUNÍN DE LOS ANDES

</div>



<div class="usuario">


👤 ${usuarioActual.nombre}

<br>

${usuarioActual.cargo}


</div>


</header>



<main id="contenido">


</main>




<nav class="barra-menu">


<button onclick="abrirPizarra()">

PIZARRA📝

</button>



<button onclick="abrirInventario()">

INVENTARIOS📦

</button>



<button onclick="abrirMovimientos()">

MOVIMIENTOS🔄

</button>



<button onclick="abrirReportes()">

REPORTES📊

</button>



<button onclick="cerrarSesion()">

CERRAR SESION🚪

</button>



</nav>


`;



abrirPizarra();



}









function cambiarContenido(html){

document.getElementById("contenido").innerHTML=html;

}









function cerrarSesion(){


localStorage.removeItem(
"usuarioActual"
);


usuarioActual=null;


mostrarLogin();


}








function abrirPizarra(){

if(typeof mostrarPizarra=="function"){

mostrarPizarra();

}else{

cambiarContenido(

`
<h2>
📝 Pizarra
</h2>

<p>Módulo en desarrollo</p>
`

);

}

}







function abrirInventario(){

    mostrarInventario();

}






function abrirMovimientos(){


if(typeof mostrarMovimientos=="function"){

mostrarMovimientos();


}else{


cambiarContenido(

`

<h2>
🔄 Movimientos
</h2>


<p>
Módulo en desarrollo
</p>

`

);


}


}







function abrirReportes(){


if(typeof mostrarReportes=="function"){

mostrarReportes();


}else{


cambiarContenido(

`

<h2>
📊 Reportes
</h2>


<p>
Módulo en desarrollo
</p>

`

);


}


}






iniciar();
window.abrirPizarra = abrirPizarra;
window.abrirInventario = abrirInventario;
window.abrirMovimientos = abrirMovimientos;
window.abrirReportes = abrirReportes;