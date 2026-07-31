// ========================================
// SIGIB 03
// APP.JS
// PARTE 1: LOGIN Y NAVEGACIÓN PRINCIPAL
// ========================================


let usuarioActivo = null;



// ========================================
// INGRESO POR LEGAJO
// ========================================

function ingresar() {


    const legajo =
        document.getElementById("legajo").value.trim();



    const usuario =
        personal.find(
            persona => persona.legajo === legajo
        );



    if (!usuario) {

        alert("Legajo no registrado");
        return;

    }



    usuarioActivo = usuario;



    document.getElementById("login").style.display = "none";

    document.getElementById("panel").style.display = "block";



    mostrarMenuPrincipal();


}




// ========================================
// MENÚ PRINCIPAL SIGIB 03
// ========================================

function mostrarMenuPrincipal() {


    let contenido = `


    <div class="contenedor">


        <h1>🚒 SIGIB 03</h1>


        <h3>
        👤 ${usuarioActivo.nombre}
        </h3>


        <p>
        ${usuarioActivo.funcion}
        </p>


        <hr>



        <button onclick="mostrarMenuModulos()">
            📦 Inventario
        </button>



        <button onclick="mostrarMovimientos()">
            🔄 Movimientos
        </button>



        <button onclick="mostrarReportes()">
            📊 Reportes
        </button>



        <button onclick="mostrarPizarra()">
            📋 Pizarra
        </button>



        <hr>


        <h3>
        Áreas operativas
        </h3>


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



    document.getElementById("panel").innerHTML =
        contenido;


}




// ========================================
// MENÚ DE MÓDULOS
// ========================================

function mostrarMenuModulos(){

    mostrarMenuPrincipal();

}




// ========================================
// ABRIR ÁREA
// ========================================

function abrirModulo(indice){


    const modulo =
        modulos[indice];



    let contenido = `


    <div class="contenedor">


    <button onclick="mostrarMenuPrincipal()">

        ⬅ Volver

    </button>



    <h2>

        ${modulo.nombre}

    </h2>



    <hr>



    <div class="modulos">


    `;



    modulo.subdivisiones.forEach(sub=>{


        contenido += `


        <button onclick="abrirInventario('${sub.codigo}')">


            ${sub.nombre}

        </button>


        `;


    });



    contenido += `


    </div>


    </div>


    `;



    document.getElementById("panel").innerHTML =
        contenido;


}
// ========================================
// SIGIB 03
// APP.JS
// PARTE 2: INVENTARIO
// ========================================



// ========================================
// COPIA DE INVENTARIO BASE
// ========================================


let inventarios = {};



if(typeof inventario !== "undefined"){


    inventarios =
        JSON.parse(
            JSON.stringify(inventario)
        );


}





// ========================================
// CARGAR DATOS GUARDADOS
// ========================================


let inventarioGuardado =

localStorage.getItem(
    "SIGIB_inventario"
);



if(inventarioGuardado){


    inventarios =
        JSON.parse(inventarioGuardado);


}





// ========================================
// ABRIR INVENTARIO
// ========================================


function abrirInventario(codigo){



    if(!inventarios[codigo]){


        inventarios[codigo] = [];


    }





    let contenido = `



    <div class="contenedor">



    <button onclick="mostrarMenuPrincipal()">

        ⬅ Volver

    </button>



    <h2>

        📦 Inventario

    </h2>



    <h3>

        ${codigo}

    </h3>



    <hr>



    <button onclick="agregarInventario('${codigo}')">

        ➕ Agregar elemento

    </button>



    <br><br>



    <input

    id="busqueda"

    placeholder="🔍 Buscar elemento"

    onkeyup="buscarInventario()"

    >



    <hr>



    <div id="listaInventario">


    `;




    if(inventarios[codigo].length === 0){


        contenido += `


        <p>

        📦 Sin elementos cargados

        </p>


        `;


    }



    else{


        inventarios[codigo].forEach((item,index)=>{



            contenido += `



            <div class="tarjeta">


            <h3>

            ${item.nombre}

            </h3>



            📦 Cantidad:

            ${item.cantidad}



            <br>



            🟢 Estado:

            ${item.estado}



            <br>



            📝 Observaciones:

            ${item.observaciones}



            <br><br>



            <button onclick="editarInventario('${codigo}',${index})">

            ✏️ Editar

            </button>



            <button onclick="eliminarInventario('${codigo}',${index})">

            🗑️ Eliminar

            </button>



            </div>



            `;



        });



    }




    contenido += `


    </div>


    </div>


    `;



    document.getElementById("panel").innerHTML =
        contenido;



}






// ========================================
// BUSCADOR
// ========================================


function buscarInventario(){



    const texto =

    document.getElementById("busqueda")
    .value
    .toLowerCase();




    const tarjetas =

    document.querySelectorAll(".tarjeta");




    tarjetas.forEach(t=>{


        t.style.display =

        t.innerText
        .toLowerCase()
        .includes(texto)

        ?

        "block"

        :

        "none";



    });



}
// ========================================
// SIGIB 03
// APP.JS
// PARTE 3: GESTIÓN DE ELEMENTOS Y REPORTES
// ========================================



// ========================================
// GUARDAR INVENTARIO
// ========================================


function guardarInventario(){


    localStorage.setItem(

        "SIGIB_inventario",

        JSON.stringify(inventarios)

    );


}





// ========================================
// AGREGAR ELEMENTO
// ========================================


function agregarInventario(codigo){



    let nombre =

    prompt("Nombre del elemento:");



    if(!nombre) return;




    let cantidad =

    prompt("Cantidad:");



    if(cantidad === null) return;




    let estado =

    prompt(

        "Estado:",

        "Bueno"

    );



    if(estado === null) return;





    let observaciones =

    prompt(

        "Observaciones:",

        ""

    );






    inventarios[codigo].push({


        nombre:nombre,


        cantidad:Number(cantidad),


        estado:estado,


        observaciones:

        observaciones || ""


    });





    guardarInventario();




    alert(

        "Elemento agregado correctamente"

    );




    abrirInventario(codigo);



}





// ========================================
// EDITAR ELEMENTO
// ========================================


function editarInventario(codigo,index){



    let item =

    inventarios[codigo][index];





    let nombre =

    prompt(

        "Nombre:",

        item.nombre

    );



    if(nombre === null) return;





    let cantidad =

    prompt(

        "Cantidad:",

        item.cantidad

    );



    if(cantidad === null) return;





    let estado =

    prompt(

        "Estado:",

        item.estado

    );



    if(estado === null) return;





    let observaciones =

    prompt(

        "Observaciones:",

        item.observaciones

    );






    item.nombre = nombre;


    item.cantidad = Number(cantidad);


    item.estado = estado;


    item.observaciones =

        observaciones || "";





    guardarInventario();




    alert(

        "Elemento actualizado"

    );




    abrirInventario(codigo);



}





// ========================================
// ELIMINAR ELEMENTO
// ========================================


function eliminarInventario(codigo,index){



    let confirmar =

    confirm(

        "¿Eliminar este elemento?"

    );



    if(!confirmar) return;





    inventarios[codigo].splice(

        index,

        1

    );





    guardarInventario();




    alert(

        "Elemento eliminado"

    );




    abrirInventario(codigo);



}





// ========================================
// REPORTES
// ========================================


function mostrarReportes(){



    let total = 0;


    let areas = Object.keys(inventarios);



    areas.forEach(area=>{


        total +=

        inventarios[area].length;


    });






    let contenido = `


    <div class="contenedor">


    <button onclick="mostrarMenuPrincipal()">

    ⬅ Volver

    </button>



    <h2>

    📊 Reportes SIGIB 03

    </h2>



    <hr>



    <p>

    📦 Total de registros:

    ${total}

    </p>



    <p>

    🗂 Áreas cargadas:

    ${areas.length}

    </p>



    <hr>



    <p>

    Reporte básico operativo.

    </p>



    </div>


    `;



    document.getElementById("panel").innerHTML =

    contenido;



}





// ========================================
// EXPORTAR FUNCIONES
// ========================================


window.ingresar = ingresar;

window.mostrarMenuPrincipal = mostrarMenuPrincipal;

window.mostrarMenuModulos = mostrarMenuModulos;

window.abrirModulo = abrirModulo;

window.abrirInventario = abrirInventario;

window.buscarInventario = buscarInventario;

window.agregarInventario = agregarInventario;

window.editarInventario = editarInventario;

window.eliminarInventario = eliminarInventario;

window.mostrarReportes = mostrarReportes;

function cambiarContenido(html){

    document.getElementById("panel").innerHTML = html;

}


window.cambiarContenido = cambiarContenido;
