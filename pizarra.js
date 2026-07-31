// ========================================
// SIGIB 03
// MODULO PIZARRA
// ========================================



function cargarPizarra() {


    const app = document.getElementById("panel");


    app.innerHTML = `


    <div class="contenedor">


        <h1>🚒 SIGIB 03</h1>


        <h2>
        Sistema de Gestión de Inventario Bomberos
        </h2>


        <hr>


        <button onclick="mostrarMenuPrincipal()">
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
        Áreas del cuartel
        </h3>


        <p>🚒 Incendios Estructurales</p>
        <p>🌲 Incendios Forestales</p>
        <p>🚗 Rescate Vehicular</p>
        <p>🩺 Trauma</p>
        <p>🌊 Rescate Acuático</p>
        <p>🧗 GRIMP</p>
        <p>🫁 ERA</p>
        <p>👕 Ropería</p>
        <p>⛽ Equipos a Explosión</p>


    </div>


    `;


}




// ========================================
// PIZARRA OPERATIVA
// ========================================


function mostrarPizarra() {


    const app = document.getElementById("panel");


    app.innerHTML = `


    <div class="contenedor">


        <button onclick="mostrarMenuPrincipal()">

            ⬅ Volver

        </button>



        <h1>
            📋 PIZARRA SIGIB 03
        </h1>



        <h2>
            Estado operativo del cuartel
        </h2>



        <hr>



        <h3>
            🚒 Móviles
        </h3>



        <p>
            🚒 Móvil 26 - Disponible
        </p>


        <p>
            🚒 Móvil 32 - Disponible
        </p>


        <p>
            🚒 Móvil 38 - Disponible
        </p>


        <p>
            🚒 Móvil 40 - Disponible
        </p>


        <p>
            🚒 Móvil 41 - Disponible
        </p>



        <hr>



        <h3>
            📦 Estado de materiales
        </h3>


        <p>
            🟢 Operativos
        </p>


        <p>
            🟡 En revisión
        </p>


        <p>
            🔴 Fuera de servicio
        </p>



        <hr>



        <h3>
            📝 Novedades
        </h3>


        <p>
            Sin novedades cargadas
        </p>



    </div>


    `;


}




// ========================================
// EXPORTAR FUNCIONES
// ========================================


window.cargarPizarra = cargarPizarra;

window.mostrarPizarra = mostrarPizarra;
