function cargarPizarra() {

    const app = document.getElementById("app");

    app.innerHTML = `

    <div class="contenedor">

        <h1>🚒 SIGIB 03</h1>

        <h2>Sistema de Gestión de Inventario Bomberos</h2>

        <hr>

        <button onclick="mostrarInventario()">
            📦 Inventario
        </button>

        <button onclick="mostrarMovimientos()">
            🔄 Movimientos
        </button>

        <button onclick="mostrarReportes()">
            📊 Reportes
        </button>

        <button onclick="alert('Próximamente')">
            📋 Pizarra
        </button>

        <button onclick="alert('Próximamente')">
            👤 Usuarios
        </button>

        <button onclick="alert('Próximamente')">
            ⚙️ Configuración
        </button>

        <hr>

        <h3>Áreas del cuartel</h3>

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

cargarPizarra();
