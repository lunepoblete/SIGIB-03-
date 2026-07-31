// ========================================
// SIGIB 03
// APP.JS - NAVEGACIÓN PRINCIPAL
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


    mostrarMenuModulos();


}



// ========================================
// MOSTRAR MENÚ DE MÓDULOS
// ========================================

function mostrarMenuModulos() {


    let contenido = `

        <header>

            <h1>🚒 SIGIB 03</h1>

            <p>
            👤 ${usuarioActivo.nombre}
            <br>
            ${usuarioActivo.funcion}
            </p>

        </header>


        <h2>
            Seleccione un área
        </h2>


        <div class="modulos">

    `;



    modulos.forEach((modulo, indice) => {


        contenido += `

            <button onclick="abrirModulo(${indice})">

                ${modulo.nombre}

            </button>


        `;


    });



    contenido += `

        </div>

    `;


    document.getElementById("panel").innerHTML = contenido;


}



// ========================================
// ABRIR UN MÓDULO
// ========================================

function abrirModulo(indice) {


    const modulo =
        modulos[indice];


    let contenido = `


        <button onclick="mostrarMenuModulos()">
            ⬅️ Volver
        </button>


        <h2>
            ${modulo.nombre}
        </h2>


        <div class="modulos">

    `;



    modulo.subdivisiones.forEach(
        (subdivision) => {


        contenido += `


            <button onclick="abrirInventario('${modulo.nombre}','${subdivision}')">

                ${subdivision}

            </button>


        `;


    });



    contenido += `</div>`;


    document.getElementById("panel").innerHTML = contenido;

// ========================================
// APP.JS - PARTE 2
// INVENTARIO POR ÁREA Y SUBDIVISIÓN
// ========================================


// Base de inventarios
// Cada área y ubicación tendrá su propio listado

let inventarios = {};


// Cargar inventario inicial

if (typeof inventariosIniciales !== "undefined") {

    inventarios = JSON.parse(
        JSON.stringify(inventariosIniciales)
    );

}



// ========================================
// ABRIR INVENTARIO
// ========================================

function abrirInventario(modulo, subdivision) {


    const clave =
        modulo + "_" + subdivision;


    if (!inventarios[clave]) {

        inventarios[clave] = [];

    }



    let contenido = `


        <button onclick="volverModulo('${modulo}')">
            ⬅️ Volver
        </button>


        <h2>
            ${modulo}
        </h2>


        <h3>
            ${subdivision}
        </h3>


        <input 
            type="text"
            id="busqueda"
            placeholder="🔍 Buscar elemento..."
            onkeyup="buscarInventario()"
        >


        <br><br>


        <button onclick="agregarInventario('${clave}')">

            ➕ Agregar elemento

        </button>


        <div id="listaInventario">


    `;



    if (inventarios[clave].length === 0) {


        contenido += `

            <p>
                📦 No hay elementos cargados.
            </p>

        `;


    } else {


        inventarios[clave].forEach(
            (item, indice) => {


            contenido += `


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
                    📝 ${item.observaciones}
                </p>


                <button onclick="editarInventario('${clave}',${indice})">
                    ✏️ Editar
                </button>


                <button onclick="eliminarInventario('${clave}',${indice})">
                    🗑️ Eliminar
                </button>


            </div>


            `;


        });


    }



    contenido += `</div>`;


    document.getElementById("panel").innerHTML =
        contenido;


}



// ========================================
// VOLVER A SUBDIVISIÓN
// ========================================

function volverModulo(nombreModulo) {


    const indice =
        modulos.findIndex(
            m => m.nombre === nombreModulo
        );


    abrirModulo(indice);


}



// ========================================
// BUSCAR INVENTARIO
// ========================================

function buscarInventario() {


    const texto =
        document
        .getElementById("busqueda")
        .value
        .toLowerCase();



    const tarjetas =
        document.querySelectorAll(".tarjeta");



    tarjetas.forEach(
        tarjeta => {


        tarjeta.style.display =
            tarjeta.innerText
            .toLowerCase()
            .includes(texto)
            ?
            "block"
            :
            "none";


    });

// ========================================
// APP.JS - PARTE 3
// GESTIÓN DE ELEMENTOS
// ========================================


// ========================================
// CARGAR DATOS GUARDADOS
// ========================================

let datosGuardados =
    localStorage.getItem("SIGIB_inventarios");


if (datosGuardados) {

    inventarios = JSON.parse(datosGuardados);

}



// ========================================
// GUARDAR INVENTARIO
// ========================================

function guardarInventario() {


    localStorage.setItem(
        "SIGIB_inventarios",
        JSON.stringify(inventarios)
    );


}



// ========================================
// AGREGAR ELEMENTO
// ========================================

function agregarInventario(clave) {


    let nombre =
        prompt("Nombre del elemento:");

    if (!nombre) return;



    let cantidad =
        prompt("Cantidad:");

    if (cantidad === null) return;



    let estado =
        prompt(
            "Estado:",
            "Bueno"
        );

    if (estado === null) return;



    let observaciones =
        prompt(
            "Observaciones:",
            ""
        );



    inventarios[clave].push({

        nombre: nombre,

        cantidad: Number(cantidad),

        estado: estado,

        ubicacion: clave,

        observaciones:
            observaciones || ""

    });



    guardarInventario();


    alert(
        "Elemento agregado correctamente"
    );


    location.reload();


}



// ========================================
// EDITAR ELEMENTO
// ========================================

function editarInventario(clave, indice) {


    let elemento =
        inventarios[clave][indice];



    let nombre =
        prompt(
            "Nombre:",
            elemento.nombre
        );

    if (nombre === null) return;



    let cantidad =
        prompt(
            "Cantidad:",
            elemento.cantidad
        );

    if (cantidad === null) return;



    let estado =
        prompt(
            "Estado:",
            elemento.estado
        );

    if (estado === null) return;



    let observaciones =
        prompt(
            "Observaciones:",
            elemento.observaciones
        );



    elemento.nombre = nombre;

    elemento.cantidad =
        Number(cantidad);

    elemento.estado = estado;

    elemento.observaciones =
        observaciones || "";



    guardarInventario();


    alert(
        "Elemento actualizado"
    );


    location.reload();


}



// ========================================
// ELIMINAR ELEMENTO
// ========================================

function eliminarInventario(clave, indice) {


    let confirmar =
        confirm(
            "¿Eliminar este elemento?"
        );



    if (!confirmar) return;



    inventarios[clave].splice(
        indice,
        1
    );



    guardarInventario();


    alert(
        "Elemento eliminado"
    );


    location.reload();


}
}
}
